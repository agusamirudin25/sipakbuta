<?php
require('./application/third_party/vendor/autoload.php');

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('nip')) {
            redirect(base_url("auth"));
        } else if ($this->session->userdata('jabatan') != 'SPV') {
            redirect(base_url('auth'));
        }
    }

    public function index()
    {
        $this->lihatMonitoringApar();
    }

    public function lihatMonitoringApar()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-m-apar';
        $data['apar'] = $this->dataHandle->other_query("SELECT tr_pengecekan_apar.*, m_apar.zona, m_apar.penempatan, m_apar.type, m_apar.merk, m_petugas.nama
        FROM tr_pengecekan_apar JOIN m_apar ON tr_pengecekan_apar.nomor_apar = m_apar.nomor_apar
        JOIN m_petugas ON tr_pengecekan_apar.nip = m_petugas.nip
        ORDER BY tr_pengecekan_apar.tanggal_pengisian DESC")->result();
        $this->template->admin('admin/lihat_monitoring_apar', $data);
    }

    public function tambahMonitoringApar()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-monitoring-apar';
        $data['apar'] = $this->dataHandle->other_query("SELECT * FROM m_apar WHERE nomor_apar NOT IN (
            SELECT nomor_apar FROM tr_pengecekan_apar WHERE MONTH(tanggal_pengisian) = MONTH(NOW())
            )")->result();
        $data['kuesApar'] = $this->dataHandle->get('m_kuesioner', ['type' => 1])->result();
        $this->template->admin('admin/tambah_monitoring_apar', $data);
    }
    function setInfo()
    {
        $code = $this->input->post('code');
        if ($code == '1') {
            $no_apar = $this->input->post('no_apar');
            $apar = $this->dataHandle->get('m_apar', ['nomor_apar' => $no_apar])->row();
            $data['zona'] = $apar->zona;
            $data['penempatan'] = $apar->penempatan;
            $data['type'] = $apar->type;
            $data['merk'] = $apar->merk;
            $data['type'] = $apar->type;
            $data['jenis_isi'] = $apar->jenis_isi;
            $data['berat'] = $apar->berat;
        } else if ($code == '2') {
            $no_firealarm = $this->input->post('no_firealarm');
            $firealarm = $this->dataHandle->get('m_firealarm', ['no_firealarm' => $no_firealarm])->row();
            $data['zona'] = $firealarm->zona;
            $data['penempatan'] = $firealarm->penempatan;
            $data['type'] = $firealarm->type;
            $data['merk'] = $firealarm->merk;
            $data['titik'] = $firealarm->titik;
            $data['jenis'] = $firealarm->jenis_sensor;
        }

        echo json_encode($data);
    }
    public function prosesTambahMonitoringApar()
    {
        $input = $this->input->post(NULL, TRUE);
        $count = count($_FILES['foto']['name']);
        $nama_fotos = [];
        $count_jawaban = count($input['kuesioner']);
        $total_jawaban = array_sum($input['kuesioner']);
        $nilai = round($total_jawaban / $count_jawaban);
        // set Kondisi
        $kondisi = '';
        switch ($nilai) {
            case 1:
                $kondisi = "Sangat tidak baik/Rusak";
                break;
            case 2:
                $kondisi = "Tidak baik";
                break;
            case 3:
                $kondisi = "Cukup";
                break;
            case 4:
                $kondisi = "Baik";
                break;
            case 5:
                $kondisi = "Baik";
                break;
            default:
                $kondisi = '-';
        }
        if (in_array(1, $input['kuesioner'])) {
            $kondisi = "Sangat tidak baik/Rusak";
        };


        if ($count > 0) {
            for ($i = 0; $i < $count; $i++) {
                if (!empty($_FILES['foto']['name'][$i])) {
                    unset($config_foto);
                    $_FILES['f']['name']        = $_FILES['foto']['name'][$i];
                    $_FILES['f']['type']        = $_FILES['foto']['type'][$i];
                    $_FILES['f']['tmp_name']    = $_FILES['foto']['tmp_name'][$i];
                    $_FILES['f']['error']       = $_FILES['foto']['error'][$i];
                    $_FILES['f']['size']        = $_FILES['foto']['size'][$i];

                    $config_foto['upload_path']        = FCPATH . '/assets/images/foto/';
                    $config_foto['allowed_types']      = 'jpg|jpeg|png';
                    $config_foto['encrypt_name']       = TRUE;
                    $config_foto['overwrite']          = true;
                    $config_foto['max_size']           = 4096; // 4MB

                    $this->load->library('upload', $config_foto);
                    $this->upload->initialize($config_foto);
                    if (!$this->upload->do_upload('f')) {
                        $error = array('error' => $this->upload->display_errors());
                        print_r($error['error']);
                        die();
                        $nama_foto = 'default.png';
                    } else {
                        $arr_foto = array('upload_data' => $this->upload->data());
                        $nama_foto = $arr_foto['upload_data']['file_name'];
                    }
                    array_push($nama_fotos, $nama_foto);
                }
            }
        }
        $data = [
            'nomor_apar' => $input['nomor_apar'],
            'tanggal_refill_sebelumnya' => $input['refill'],
            'id_kuesioner' => json_encode($input['pertanyaan']),
            'nilai' => $nilai,
            'data' => json_encode($input['kuesioner']),
            'timbangan' => $input['timbangan'],
            'kondisi' => $kondisi,
            'foto' => json_encode($nama_fotos),
            'keterangan' => $input['keterangan'],
            'status' => 1,
            'nip' => $this->session->userdata('nip')
        ];

        if ($this->dataHandle->insert('tr_pengecekan_apar', $data) > 0) {
            $response['status'] = 1;
            $response['title'] = 'Monitoring APAR';
            $response['msg'] = 'Data Berhasil Ditambahkan';
            $response['page'] = 'monitoring-apar';
        } else {
            $response['status'] = 2;
            $response['title'] = 'Monitoring APAR';
            $response['msg'] = 'Data Gagal Ditambahkan';
        }

        echo json_encode($response);
    }

    public function editMonitoringApar($id_pengecekan)
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-monitoring-apar';

        $data['mon_apar'] = $this->dataHandle->other_query("SELECT tr_pengecekan_apar.*, m_apar.zona, m_apar.penempatan, m_apar.type, m_apar.merk, m_petugas.nama
        FROM tr_pengecekan_apar JOIN m_apar ON tr_pengecekan_apar.nomor_apar = m_apar.nomor_apar
        JOIN m_petugas ON tr_pengecekan_apar.nip = m_petugas.nip WHERE tr_pengecekan_apar.id_pengecekan = '$id_pengecekan'")->row();
        $x = json_decode($data['mon_apar']->id_kuesioner);
        $pertanyaan = [];
        foreach ($x as $id_kuesioner) {
            $tmp = $this->dataHandle->get('m_kuesioner', ['id_kuesioner' => $id_kuesioner])->row();
            array_push($pertanyaan, $tmp->pertanyaan);
        }
        $data['apar'] = $this->dataHandle->getAll('m_apar')->result();
        $y = $this->dataHandle->get('m_apar', ['nomor_apar' => $data['mon_apar']->nomor_apar])->row();
        $data['info'] = $y;
        $data['mon_apar']->pertanyaan = $pertanyaan;
        $data['pertanyaan'] = $pertanyaan;
        $this->template->admin('admin/edit_monitoring_apar', $data);
    }
    public function prosesEditMonitoringApar()
    {
        $input = $this->input->post(NULL, TRUE);

        $cek = $_FILES['foto']['name'][0];

        $count = count($_FILES['foto']['name']);

        $nama_fotos = [];
        $count_jawaban = count($input['kuesioner']);
        $total_jawaban = array_sum($input['kuesioner']);
        $nilai = round($total_jawaban / $count_jawaban);
        // set Kondisi
        $kondisi = '';
        switch ($nilai) {
            case 1:
                $kondisi = "Sangat tidak baik/Rusak";
                break;
            case 2:
                $kondisi = "Tidak baik";
                break;
            case 3:
                $kondisi = "Cukup";
                break;
            case 4:
                $kondisi = "Baik";
                break;
            case 5:
                $kondisi = "Baik";
                break;
            default:
                $kondisi = '-';
        }
        if (in_array(1, $input['kuesioner'])) {
            $kondisi = "Sangat tidak baik/Rusak";
        };


        if ($cek != "") {
            var_dump($cek);
            die;
            for ($i = 0; $i < $count; $i++) {
                if (!empty($_FILES['foto']['name'][$i])) {
                    unset($config_foto);
                    $_FILES['f']['name']        = $_FILES['foto']['name'][$i];
                    $_FILES['f']['type']        = $_FILES['foto']['type'][$i];
                    $_FILES['f']['tmp_name']    = $_FILES['foto']['tmp_name'][$i];
                    $_FILES['f']['error']       = $_FILES['foto']['error'][$i];
                    $_FILES['f']['size']        = $_FILES['foto']['size'][$i];

                    $config_foto['upload_path']        = FCPATH . '/assets/images/foto/';
                    $config_foto['allowed_types']      = 'jpg|jpeg|png';
                    $config_foto['encrypt_name']       = TRUE;
                    $config_foto['overwrite']          = true;
                    $config_foto['max_size']           = 4096; // 4MB

                    $this->load->library('upload', $config_foto);
                    $this->upload->initialize($config_foto);
                    if (!$this->upload->do_upload('f')) {
                        $error = array('error' => $this->upload->display_errors());
                        $response['msg'] = 'Data Gagal Diubah';
                        print_r($error['error']);
                        die();
                        $nama_foto = 'default.png';
                    } else {
                        $arr_foto = array('upload_data' => $this->upload->data());
                        $nama_foto = $arr_foto['upload_data']['file_name'];
                    }
                    array_push($nama_fotos, $nama_foto);
                }
            }
        } else {
            $nama_fotos = [];
        }


        if (count($nama_fotos) == 0) {
            // jika ga ada upload
            $data = [
                'nomor_apar' => $input['nomor_apar'],
                'tanggal_refill_sebelumnya' => $input['refill'],
                'nilai' => $nilai,
                'data' => json_encode($input['kuesioner']),
                'timbangan' => $input['timbangan'],
                'kondisi' => $kondisi,
                'keterangan' => $input['keterangan']
            ];
        } else {
            $data = [
                'nomor_apar' => $input['nomor_apar'],
                'tanggal_refill_sebelumnya' => $input['refill'],
                'nilai' => $nilai,
                'data' => json_encode($input['kuesioner']),
                'timbangan' => $input['timbangan'],
                'kondisi' => $kondisi,
                'foto' => json_encode($nama_fotos),
                'keterangan' => $input['keterangan'],
            ];
        }
        $where = ['id_pengecekan' => $input['id_pengecekan']];

        if ($this->dataHandle->edit('tr_pengecekan_apar', $data, $where) > 0) {
            $response['status'] = 1;
            $response['title'] = 'Monitoring APAR';
            $response['msg'] = 'Data Berhasil Diubah';
            $response['page'] = 'monitoring-apar';
        } else {
            $response['status'] = 2;
            $response['title'] = 'Monitoring APAR';
            $response['msg'] = 'Data Gagal Diubah, tidak ada yang diganti';
        }

        echo json_encode($response);
    }

    public function hapusMonitoringApar()
    {
        $id_pengecekan = $this->input->post('id', TRUE);
        $hapus = $this->dataHandle->delete('tr_pengecekan_apar', ['id_pengecekan' => $id_pengecekan]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "monitoring-apar";
        } else {
            $response['status'] = 2;
            $response['page'] = "monitoring-apar";
        }
        echo json_encode($response);
    }

    public function lihatMonitoringFirealarm()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-m-firealarm';
        $data['firealarm'] = $this->dataHandle->other_query("SELECT tr_pengecekan_firealarm.*, m_firealarm.zona, m_firealarm.penempatan, m_firealarm.type, m_firealarm.merk, m_firealarm.titik, m_petugas.nama
        FROM tr_pengecekan_firealarm JOIN m_firealarm ON tr_pengecekan_firealarm.no_firealarm = m_firealarm.no_firealarm
        JOIN m_petugas ON tr_pengecekan_firealarm.nip = m_petugas.nip
        ORDER BY tr_pengecekan_firealarm.tanggal_pengecekan DESC")->result();
        $this->template->admin('admin/lihat_monitoring_firealarm', $data);
    }

    public function tambahMonitoringFirealarm()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-monitoring-firealarm';
        $data['firealarm'] = $this->dataHandle->other_query("SELECT * FROM m_firealarm WHERE no_firealarm NOT IN (
            SELECT no_firealarm FROM tr_pengecekan_firealarm WHERE MONTH(tanggal_pengecekan) = MONTH(NOW()))")->result();
        $data['kuesFirealarm'] = $this->dataHandle->get('m_kuesioner', ['type' => 2])->result();
        $this->template->admin('admin/tambah_monitoring_firealarm', $data);
    }

    public function prosesTambahMonitoringFirealarm()
    {
        $input = $this->input->post(NULL, TRUE);

        $count = count($_FILES['foto']['name']);
        $msg = '';
        $nama_fotos = [];
        $count_jawaban = count($input['kuesioner']);
        $total_jawaban = array_sum($input['kuesioner']);
        $nilai = round($total_jawaban / $count_jawaban);
        // set Kondisi
        $kondisi = '';
        switch ($nilai) {
            case 1:
                $kondisi = "Sangat tidak baik/Rusak";
                break;
            case 2:
                $kondisi = "Tidak baik";
                break;
            case 3:
                $kondisi = "Cukup";
                break;
            case 4:
                $kondisi = "Baik";
                break;
            case 5:
                $kondisi = "Baik";
                break;
            default:
                $kondisi = '-';
        }
        if (in_array(1, $input['kuesioner'])) {
            $kondisi = "Sangat tidak baik/Rusak";
        };


        if ($count > 0) {
            for ($i = 0; $i < $count; $i++) {
                if (!empty($_FILES['foto']['name'][$i])) {
                    unset($config_foto);
                    $_FILES['f']['name']        = $_FILES['foto']['name'][$i];
                    $_FILES['f']['type']        = $_FILES['foto']['type'][$i];
                    $_FILES['f']['tmp_name']    = $_FILES['foto']['tmp_name'][$i];
                    $_FILES['f']['error']       = $_FILES['foto']['error'][$i];
                    $_FILES['f']['size']        = $_FILES['foto']['size'][$i];

                    $config_foto['upload_path']        = FCPATH . '/assets/images/foto/';
                    $config_foto['allowed_types']      = 'jpg|jpeg|png';
                    $config_foto['encrypt_name']       = TRUE;
                    $config_foto['overwrite']          = true;
                    $config_foto['max_size']           = 4096; // 4MB

                    $this->load->library('upload', $config_foto);
                    $this->upload->initialize($config_foto);
                    if (!$this->upload->do_upload('f')) {
                        $error = array('error' => $this->upload->display_errors());
                        print_r($error['error']);
                        die();
                        $nama_foto = 'default.png';
                    } else {
                        $arr_foto = array('upload_data' => $this->upload->data());
                        $nama_foto = $arr_foto['upload_data']['file_name'];
                    }
                    array_push($nama_fotos, $nama_foto);
                }
            }
        }
        $data = [
            'no_firealarm' => $input['no_firealarm'],
            'id_kuesioner' => json_encode($input['pertanyaan']),
            'nilai' => $nilai,
            'data' => json_encode($input['kuesioner']),
            'kondisi' => $kondisi,
            'foto' => json_encode($nama_fotos),
            'keterangan' => $input['keterangan'],
            'status' => 1,
            'nip' => $this->session->userdata('nip')
        ];

        if ($this->dataHandle->insert('tr_pengecekan_firealarm', $data) > 0) {
            $response['status'] = 1;
            $response['title'] = 'Monitoring Firealarm';
            $response['msg'] = 'Data Berhasil Ditambahkan';
            $response['page'] = 'monitoring-firealarm';
        } else {
            $response['status'] = 2;
            $response['title'] = 'Monitoring Firealarm';
            $response['msg'] = 'Data Gagal Ditambahkan' . $msg;
        }

        echo json_encode($response);
    }
    public function editMonitoringFirealarm($id_pengecekan)
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-monitoring-apar';

        $data['mon_firealarm'] = $this->dataHandle->other_query("SELECT tr_pengecekan_firealarm.*, m_firealarm.zona, m_firealarm.penempatan, m_firealarm.type, m_firealarm.merk, m_firealarm.titik, m_petugas.nama
        FROM tr_pengecekan_firealarm JOIN m_firealarm ON tr_pengecekan_firealarm.no_firealarm = m_firealarm.no_firealarm
        JOIN m_petugas ON tr_pengecekan_firealarm.nip = m_petugas.nip WHERE tr_pengecekan_firealarm.id_pengecekan = '$id_pengecekan'")->row();
        $x = json_decode($data['mon_firealarm']->id_kuesioner);
        $pertanyaan = [];
        foreach ($x as $id_kuesioner) {
            $tmp = $this->dataHandle->get('m_kuesioner', ['id_kuesioner' => $id_kuesioner])->row();
            array_push($pertanyaan, $tmp->pertanyaan);
        }
        $data['firealarm'] = $this->dataHandle->getAll('m_firealarm')->result();
        $y = $this->dataHandle->get('m_firealarm', ['no_firealarm' => $data['mon_firealarm']->no_firealarm])->row();
        $data['info'] = $y;
        $data['mon_firealarm']->pertanyaan = $pertanyaan;
        $data['pertanyaan'] = $pertanyaan;
        $this->template->admin('admin/edit_monitoring_firealarm', $data);
    }
    public function prosesEditMonitoringFirealarm()
    {
        $input = $this->input->post(NULL, TRUE);

        $cek = $_FILES['foto']['name'][0];
        $count = count($_FILES['foto']['name']);
        $msg = '';
        $nama_fotos = [];
        $count_jawaban = count($input['kuesioner']);
        $total_jawaban = array_sum($input['kuesioner']);
        $nilai = round($total_jawaban / $count_jawaban);
        // set Kondisi
        $kondisi = '';
        switch ($nilai) {
            case 1:
                $kondisi = "Sangat tidak baik/Rusak";
                break;
            case 2:
                $kondisi = "Tidak baik";
                break;
            case 3:
                $kondisi = "Cukup";
                break;
            case 4:
                $kondisi = "Baik";
                break;
            case 5:
                $kondisi = "Baik";
                break;
            default:
                $kondisi = '-';
        }
        if (in_array(1, $input['kuesioner'])) {
            $kondisi = "Sangat tidak baik/Rusak";
        };


        if ($cek != "") {
            for ($i = 0; $i < $count; $i++) {
                if (!empty($_FILES['foto']['name'][$i])) {
                    unset($config_foto);
                    $_FILES['f']['name']        = $_FILES['foto']['name'][$i];
                    $_FILES['f']['type']        = $_FILES['foto']['type'][$i];
                    $_FILES['f']['tmp_name']    = $_FILES['foto']['tmp_name'][$i];
                    $_FILES['f']['error']       = $_FILES['foto']['error'][$i];
                    $_FILES['f']['size']        = $_FILES['foto']['size'][$i];

                    $config_foto['upload_path']        = FCPATH . '/assets/images/foto/';
                    $config_foto['allowed_types']      = 'jpg|jpeg|png';
                    $config_foto['encrypt_name']       = TRUE;
                    $config_foto['overwrite']          = true;
                    $config_foto['max_size']           = 4096; // 4MB

                    $this->load->library('upload', $config_foto);
                    $this->upload->initialize($config_foto);
                    if (!$this->upload->do_upload('f')) {
                        $error = array('error' => $this->upload->display_errors());
                        $response['msg'] = 'Data Gagal Diubah';
                        print_r($error['error']);
                        die();
                        $nama_foto = 'default.png';
                    } else {
                        $arr_foto = array('upload_data' => $this->upload->data());
                        $nama_foto = $arr_foto['upload_data']['file_name'];
                    }
                    array_push($nama_fotos, $nama_foto);
                }
            }
        } else {
            $nama_fotos = [];
        }


        if (count($nama_fotos) == 0) {
            // jika ga ada upload
            $data = [
                'nilai' => $nilai,
                'data' => json_encode($input['kuesioner']),
                'kondisi' => $kondisi,
                'keterangan' => $input['keterangan'],
                'no_firealarm' => $input['no_firealarm']
            ];
        } else {
            $data = [
                'nilai' => $nilai,
                'data' => json_encode($input['kuesioner']),
                'kondisi' => $kondisi,
                'foto' => json_encode($nama_fotos),
                'keterangan' => $input['keterangan'],
                'no_firealarm' => $input['no_firealarm']
            ];
        }
        $where = ['id_pengecekan' => $input['id_pengecekan']];

        if ($this->dataHandle->edit('tr_pengecekan_firealarm', $data, $where) > 0) {
            $response['status'] = 1;
            $response['title'] = 'Monitoring Firealarm';
            $response['msg'] = 'Data Berhasil Diubah';
            $response['page'] = 'monitoring-firealarm';
        } else {
            $response['status'] = 2;
            $response['title'] = 'Monitoring Firealarm';
            $response['msg'] = 'Gagal, tidak ada yang diganti';
        }

        echo json_encode($response);
    }

    public function hapusMonitoringFirealarm()
    {
        $id_pengecekan = $this->input->post('id', TRUE);
        $hapus = $this->dataHandle->delete('tr_pengecekan_firealarm', ['id_pengecekan' => $id_pengecekan]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "monitoring-firealarm";
        } else {
            $response['status'] = 2;
            $response['page'] = "monitoring-firealarm";
        }
        echo json_encode($response);
    }

    public function rekapBulananApar()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = '';
        $this->template->admin('admin/rekapitulasi_apar', $data);
    }
    public function rekapBulananFirealarm()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = '';
        $this->template->admin('admin/rekapitulasi_firealarm', $data);
    }
    public function rekapBulan()
    {
        $input = $this->input->post(NULL, TRUE);
        $bulan = $input['bulan'];
        $tahun = $input['tahun'];
        $code = $input['code'];
        $html = "";
        $kondisi = 0;
        if ($code == 1) {
            // APAR
            $apar = $this->dataHandle->other_query("SELECT tr_pengecekan_apar.*, m_apar.zona, m_apar.penempatan, m_apar.type, m_apar.merk, m_petugas.nama FROM tr_pengecekan_apar JOIN m_apar ON tr_pengecekan_apar.nomor_apar = m_apar.nomor_apar JOIN m_petugas ON tr_pengecekan_apar.nip = m_petugas.nip WHERE MONTH(tr_pengecekan_apar.tanggal_pengisian) = $bulan AND YEAR(tr_pengecekan_apar.tanggal_pengisian) = $tahun ORDER BY tr_pengecekan_apar.tanggal_pengisian DESC")->result();
            $count = count($apar);
            if ($count == 0) {
                // Jika data kosong
                $html .= "<tr>\n<td colspan = 9 align='center'>DATA TIDAK DITEMUKAN</td>\n</tr>";
                $kondisi = 0;
            } else {
                $i = 1;
                foreach ($apar as $row) {
                    $html .= "<tr>\n";
                    $html .= "<td>$i</td>\n";
                    $html .= "<td>$row->nomor_apar</td>\n";
                    $html .= "<td>$row->zona" . " (" . $row->penempatan . ")</td>\n";
                    $html .= "<td>$row->type" . " (" . $row->merk . ")</td>\n";
                    $html .= "<td class=text-center> $row->timbangan Kg </td>\n";
                    $html .= "<td>$row->kondisi</td>\n";
                    $html .= "<td>$row->keterangan</td>\n";
                    $html .= "<td>$row->nama</td>\n";
                    $html .= "<td>$row->tanggal_pengisian</td>\n";
                    $html .= "</tr>";
                    $i++;
                }
                $kondisi = 1;
            }
        } elseif ($code == 2) {
            // Firealarm
            $fa = $this->dataHandle->other_query("SELECT tr_pengecekan_firealarm.*, m_firealarm.zona, m_firealarm.titik, m_firealarm.penempatan, m_firealarm.type, m_firealarm.merk, m_firealarm.jenis_sensor, m_petugas.nama, m_petugas.paraf FROM tr_pengecekan_firealarm JOIN m_firealarm ON tr_pengecekan_firealarm.no_firealarm = m_firealarm.no_firealarm JOIN m_petugas ON tr_pengecekan_firealarm.nip = m_petugas.nip WHERE MONTH(tr_pengecekan_firealarm.tanggal_pengecekan) = $bulan AND YEAR(tr_pengecekan_firealarm.tanggal_pengecekan) = $tahun ORDER BY tr_pengecekan_firealarm.tanggal_pengecekan DESC")->result();
            $count = count($fa);
            if ($count == 0) {
                // Jika data kosong
                $html .= "<tr>\n<td colspan = 9 align='center'>DATA TIDAK DITEMUKAN</td>\n</tr>";
                $kondisi = 0;
            } else {
                $i = 1;
                foreach ($fa as $row) {
                    $html .= "<tr>\n";
                    $html .= "<td>$i</td>\n";
                    $html .= "<td>$row->no_firealarm</td>\n";
                    $html .= "<td>$row->zona" . "/" . $row->titik . " (" . $row->penempatan . ")</td>\n";
                    $html .= "<td>$row->type" . " (" . $row->merk . ")</td>\n";
                    $html .= "<td>$row->jenis_sensor</td>\n";
                    $html .= "<td>$row->kondisi</td>\n";
                    $html .= "<td>$row->keterangan</td>\n";
                    $html .= "<td>$row->nama</td>\n";
                    $html .= "<td>$row->tanggal_pengecekan</td>\n";
                    $html .= "</tr>";
                    $i++;
                }
                $kondisi = 1;
            }
        }
        $data['html'] = $html;
        $data['kondisi'] = $kondisi;
        echo json_encode($data);
    }
    public function eksporExcel($bulan, $tahun, $code)
    {
        $CreateDate = date('d-m-Y');
        $CreateTime = date("H:i:s");
        $month = '';
        if ($bulan == 1) {
            $month = 'JANUARI';
        } else if ($bulan == 2) {
            $month = 'FEBRUARI';
        } else if ($bulan == 3) {
            $month = 'MARET';
        } else if ($bulan == 4) {
            $month = 'APRIL';
        } else if ($bulan == 5) {
            $month = 'MEI';
        } else if ($bulan == 6) {
            $month = 'JUNI';
        } else if ($bulan == 7) {
            $month = 'JULI';
        } else if ($bulan == 8) {
            $month = 'AGUSTUS';
        } else if ($bulan == 9) {
            $month = 'SEPTEMBER';
        } else if ($bulan == 10) {
            $month = 'OKTOBER';
        } else if ($bulan == 11) {
            $month = 'NOVEMBER';
        } else if ($bulan == 12) {
            $month = 'DESEMBER';
        }
        // konfigurasi
        $judul = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $nama_tim = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $deskripsi = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $logo = $this->dataHandle->cek_konfigurasi('logo');
        if ($code == 1) {
            $x = 'APAR';
        } else {
            $x = 'FIRE ALARM';
        }
        $nama_spv = $this->dataHandle->get('m_petugas', ['jabatan' => 'SPV'])->row();
        $spreadsheet = new Spreadsheet;
        $spreadsheet->getActiveSheet()->getRowDimension('1')->setRowHeight(30);
        $spreadsheet->getActiveSheet()->mergeCells('A1:K1');
        $spreadsheet->getActiveSheet()->mergeCells('A2:B2');
        $spreadsheet->getActiveSheet()->mergeCells('A3:B3');
        $spreadsheet->getActiveSheet()->mergeCells('A4:B4');
        $spreadsheet->getActiveSheet()->mergeCells('A5:B5');
        $spreadsheet->getActiveSheet()->mergeCells('J2:K5');
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setWidth(18);
        $spreadsheet->getActiveSheet()->getColumnDimension('D')->setWidth(18);
        $spreadsheet->getActiveSheet()->getColumnDimension('F')->setWidth(18);
        $spreadsheet->getActiveSheet()->getColumnDimension('G')->setWidth(18);
        $spreadsheet->getActiveSheet()->getColumnDimension('H')->setWidth(18);
        $spreadsheet->getActiveSheet()->getColumnDimension('I')->setWidth(20);
        $spreadsheet->getActiveSheet()->getColumnDimension('J')->setWidth(18);
        $spreadsheet->getActiveSheet()->getColumnDimension('K')->setWidth(15);
        $spreadsheet->setActiveSheetIndex(0)
            ->setCellValue('A1', 'REKAP MONITORING ' . $x)
            ->setCellValue('A2', 'NAMA APLIKASI')
            ->setCellValue('A3', 'GI/GITET/KANTOR')
            ->setCellValue('A4', 'BULAN')
            ->setCellValue('A5', 'TANGGAL')
            ->setCellValue('C2', ': ' . $judul . ' (' . $deskripsi . ')')
            ->setCellValue('C3', ': GI 70KV RENGASDENGKLOK')
            ->setCellValue('C4', ': ' . $month . ' ' . $tahun)
            ->setCellValue('C5', ': ' . tgl_indo($CreateDate));
        $drawing = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
        $drawing2 = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
        $drawing3 = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
        $drawing->setName('Paid');
        $drawing->setDescription('Paid');
        $drawing->setPath(FCPATH . 'assets/images/logo/' . $logo); // put your path and image here
        $drawing->setCoordinates('J2');
        $drawing->setWidth(80);
        $drawing->setOffsetX(86);
        $drawing->setWorksheet($spreadsheet->setActiveSheetIndex(0));
        $styleArray = [
            'font' => [
                'bold' => true,
                'name' => 'Calibri',
                'size' => 20
            ],
            'alignment' => [
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'top' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                ],
            ]
        ];
        $styleJudul = [
            'font' => [
                'bold' => true,
                'name' => 'Calibri',
                'size' => 12
            ],
            'alignment' => [
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
            'borders' => [
                'top' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                ],
                'bottom' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                ],
            ]
        ];
        $style_tengah = [
            'alignment' => [
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
        ];
        $spreadsheet->getActiveSheet()->getStyle('A1')->applyFromArray($styleArray);
        if ($code == 1) {
            // APAR
            $apar = $this->dataHandle->other_query("SELECT tr_pengecekan_apar.*,m_apar.tanggal_kadaluwarsa, m_apar.zona, m_apar.penempatan, m_apar.type, m_apar.merk, m_petugas.paraf, m_petugas.nama FROM tr_pengecekan_apar JOIN m_apar ON tr_pengecekan_apar.nomor_apar = m_apar.nomor_apar JOIN m_petugas ON tr_pengecekan_apar.nip = m_petugas.nip WHERE MONTH(tr_pengecekan_apar.tanggal_pengisian) = $bulan AND YEAR(tr_pengecekan_apar.tanggal_pengisian) = $tahun ORDER BY tr_pengecekan_apar.tanggal_pengisian DESC")->result();
            $spreadsheet->getActiveSheet()->getRowDimension('7')->setRowHeight(40);
            $spreadsheet->setActiveSheetIndex(0)
                ->setCellValue('A7', 'NO')
                ->setCellValue('B7', 'NO APAR')
                ->setCellValue('C7', 'ZONA (PENEMPATAN)')
                ->setCellValue('D7', 'TYPE (MERK)')
                ->setCellValue('E7', 'BERAT')
                ->setCellValue('F7', 'KONDISI')
                ->setCellValue('G7', 'PETUGAS PELAKSANA')
                ->setCellValue('H7', 'TANGGAL PEMASANGAN')
                ->setCellValue('I7', 'TANGGAL REFILL SEBELUMNYA')
                ->setCellValue('J7', 'TANGGAL KADALUARSA')
                ->setCellValue('K7', 'KETERANGAN');
            $spreadsheet->getActiveSheet()->getStyle('A7:K7')->getAlignment()->setWrapText(true);
            $spreadsheet->getActiveSheet()->getStyle('A7:K7')->applyFromArray($styleJudul);
            $spreadsheet->getActiveSheet()->getStyle('A8:B50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('E8:E50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('F8:F50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('G8:G50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('H8:J50')->applyFromArray($style_tengah);
            $no = 1;
            $x = 8;
            foreach ($apar as $row) {
                $spreadsheet->setActiveSheetIndex(0)->setCellValue('A' . $x, $no++)
                    ->setCellValue('B' . $x, $row->nomor_apar)
                    ->setCellValue('C' . $x, $row->zona . ' (' . $row->penempatan . ')')
                    ->setCellValue('D' . $x, $row->type . ' (' . $row->merk . ')')
                    ->setCellValue('E' . $x, $row->timbangan . 'Kg')
                    ->setCellValue('F' . $x, $row->kondisi)
                    ->setCellValue('G' . $x, $row->nama)
                    ->setCellValue('H' . $x, tgl_indo($row->tanggal_pengisian))
                    ->setCellValue('I' . $x, tgl_indo($row->tanggal_refill_sebelumnya))
                    ->setCellValue('J' . $x, tgl_indo($row->tanggal_kadaluwarsa))
                    ->setCellValue('K' . $x, $row->keterangan);
                $x++;
            }
            $y = $x + 8;
            $spreadsheet->getActiveSheet()->mergeCells('G' . $y . ':H' . $y);
            $spreadsheet->getActiveSheet()->mergeCells('J' . $y . ':K' . $y);
            $spreadsheet->setActiveSheetIndex(0)
                ->setCellValue('G' . $y, 'Mengetahui,')
                ->setCellValue('J' . $y, 'Pelaksana,');
            $xy = $y + 6;
            $xz = $xy + 1;
            $spreadsheet->getActiveSheet()->mergeCells('G' . $xy . ':H' . $xy);
            $spreadsheet->getActiveSheet()->mergeCells('J' . $xy . ':K' . $xy);
            $spreadsheet->getActiveSheet()->mergeCells('G' . $xz . ':H' . $xz);

            $spreadsheet->setActiveSheetIndex(0)
                ->setCellValue('G' . $xy, $nama_spv->nama)
                ->setCellValue('J' . $xy, $apar[0]->nama)
                ->setCellValue('G' . $xz, 'SPV JARGI RSDLK');

            // set ttd
            $p = $y + 1;
            $q = $xy - 1;
            $spreadsheet->getActiveSheet()->mergeCells('G' . $p . ':H' . $q);
            $drawing2->setName('paraf_spv');
            $drawing2->setDescription('spv');
            $drawing2->setPath(FCPATH . 'assets/images/paraf/' . $nama_spv->paraf); // put your path and image here
            $drawing2->setCoordinates('G' . $p);
            $drawing2->setWidth(80);
            $drawing2->setOffsetX(86);
            $drawing2->setOffsetY(10);
            $drawing2->setWorksheet($spreadsheet->setActiveSheetIndex(0));
            $spreadsheet->getActiveSheet()->mergeCells('J' . $p . ':K' . $q);
            $spreadsheet->getActiveSheet()->mergeCells('J' . $xz . ':K' . $xz);
            $drawing3->setName('paraf_sie');
            $drawing3->setDescription('petugas');
            $drawing3->setPath(FCPATH . 'assets/images/paraf/' . $apar[0]->paraf); // put your path and image here
            $drawing3->setCoordinates('J' . $p);
            $drawing3->setWidth(80);
            $drawing3->setOffsetX(86);
            $drawing3->setOffsetY(10);
            $drawing3->setWorksheet($spreadsheet->setActiveSheetIndex(0));
            $spreadsheet->setActiveSheetIndex(0);
            $writer = new Xlsx($spreadsheet);
            $nama = 'Apar';
            header('Content-Type: application/vnd.ms-excel');
            header('Content-Disposition: attachment;filename="Rekap ' . $nama . ' ' . $CreateDate . ' ' . $CreateTime . '.xlsx"');
            header('Cache-Control: max-age=0');

            $writer->save('php://output');
        } else {
            // firealarm
            $fa = $this->dataHandle->other_query("SELECT tr_pengecekan_firealarm.*, m_firealarm.zona, m_firealarm.titik, m_firealarm.penempatan, m_firealarm.type, m_firealarm.merk, m_firealarm.jenis_sensor, m_petugas.nama, m_petugas.paraf FROM tr_pengecekan_firealarm JOIN m_firealarm ON tr_pengecekan_firealarm.no_firealarm = m_firealarm.no_firealarm JOIN m_petugas ON tr_pengecekan_firealarm.nip = m_petugas.nip WHERE MONTH(tr_pengecekan_firealarm.tanggal_pengecekan) = $bulan AND YEAR(tr_pengecekan_firealarm.tanggal_pengecekan) = $tahun ORDER BY tr_pengecekan_firealarm.tanggal_pengecekan DESC")->result();
            $spreadsheet->getActiveSheet()->getRowDimension('7')->setRowHeight(40);
            $spreadsheet->getActiveSheet()->mergeCells('D7:E7');
            $spreadsheet->getActiveSheet()->mergeCells('F7:G7');
            $spreadsheet->setActiveSheetIndex(0)
                ->setCellValue('A7', 'NO')
                ->setCellValue('B7', 'NO FIREALARM')
                ->setCellValue('C7', 'ZONA/TITIK (PENEMPATAN)')
                ->setCellValue('D7', 'TYPE (MERK)')
                ->setCellValue('F7', 'JENIS')
                ->setCellValue('H7', 'KONDISI')
                ->setCellValue('I7', 'PETUGAS PELAKSANA')
                ->setCellValue('J7', 'TANGGAL PEMASANGAN')
                ->setCellValue('K7', 'KETERANGAN');
            $spreadsheet->getActiveSheet()->getStyle('A7:K7')->getAlignment()->setWrapText(true);
            $spreadsheet->getActiveSheet()->getStyle('A7:K7')->applyFromArray($styleJudul);
            $spreadsheet->getActiveSheet()->getStyle('A8:B50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('E8:E50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('F8:F50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('G8:G50')->applyFromArray($style_tengah);
            $spreadsheet->getActiveSheet()->getStyle('H8:J50')->applyFromArray($style_tengah);
            $no = 1;
            $x = 8;
            foreach ($fa as $row) {
                $spreadsheet->setActiveSheetIndex(0)->setCellValue('A' . $x, $no++)
                    ->setCellValue('B' . $x, $row->no_firealarm)
                    ->setCellValue('C' . $x, $row->zona . '/' .  $row->titik . ' (' . $row->penempatan . ')')
                    ->setCellValue('D' . $x, $row->type . ' (' . $row->merk . ')')
                    ->setCellValue('F' . $x, $row->jenis_sensor)
                    ->setCellValue('H' . $x, $row->kondisi)
                    ->setCellValue('I' . $x, $row->nama)
                    ->setCellValue('J' . $x, tgl_indo($row->tanggal_pengecekan))
                    ->setCellValue('K' . $x, $row->keterangan);
                $spreadsheet->getActiveSheet()->mergeCells('D' . $x . ':E' . $x);
                $spreadsheet->getActiveSheet()->mergeCells('F' . $x . ':G' . $x);
                $x++;
            }
            $y = $x + 8;
            $spreadsheet->getActiveSheet()->mergeCells('G' . $y . ':H' . $y);
            $spreadsheet->getActiveSheet()->mergeCells('J' . $y . ':K' . $y);
            $spreadsheet->setActiveSheetIndex(0)
                ->setCellValue('G' . $y, 'Mengetahui,')
                ->setCellValue('J' . $y, 'Pelaksana,');
            $xy = $y + 6;
            $xz = $xy + 1;
            $spreadsheet->getActiveSheet()->mergeCells('G' . $xy . ':H' . $xy);
            $spreadsheet->getActiveSheet()->mergeCells('J' . $xy . ':K' . $xy);
            $spreadsheet->getActiveSheet()->mergeCells('G' . $xz . ':H' . $xz);

            $spreadsheet->setActiveSheetIndex(0)
                ->setCellValue('G' . $xy, $nama_spv->nama)
                ->setCellValue('J' . $xy, $fa[0]->nama)
                ->setCellValue('G' . $xz, 'SPV JARGI RSDLK');

            // set ttd
            $p = $y + 1;
            $q = $xy - 1;
            $spreadsheet->getActiveSheet()->mergeCells('G' . $p . ':H' . $q);
            $drawing2->setName('paraf_spv');
            $drawing2->setDescription('spv');
            $drawing2->setPath(FCPATH . 'assets/images/paraf/' . $nama_spv->paraf); // put your path and image here
            $drawing2->setCoordinates('G' . $p);
            $drawing2->setWidth(80);
            $drawing2->setOffsetX(86);
            $drawing2->setOffsetY(10);
            $drawing2->setWorksheet($spreadsheet->setActiveSheetIndex(0));
            $spreadsheet->getActiveSheet()->mergeCells('J' . $p . ':K' . $q);
            $spreadsheet->getActiveSheet()->mergeCells('J' . $xz . ':K' . $xz);
            $drawing3->setName('paraf_sie');
            $drawing3->setDescription('petugas');
            $drawing3->setPath(FCPATH . 'assets/images/paraf/' . $fa[0]->paraf); // put your path and image here
            $drawing3->setCoordinates('J' . $p);
            $drawing3->setWidth(80);
            $drawing3->setOffsetX(86);
            $drawing3->setOffsetY(10);
            $drawing3->setWorksheet($spreadsheet->setActiveSheetIndex(0));
            $spreadsheet->setActiveSheetIndex(0);
            $writer = new Xlsx($spreadsheet);
            $nama = 'Firealarm';
            header('Content-Type: application/vnd.ms-excel');
            header('Content-Disposition: attachment;filename="Rekap ' . $nama . ' ' . $CreateDate . ' ' . $CreateTime . '.xlsx"');
            header('Cache-Control: max-age=0');

            $writer->save('php://output');
        }
    }
}
