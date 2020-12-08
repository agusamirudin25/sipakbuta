<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Main extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('id_pengguna')) {
            redirect(base_url("login"));
        }
    }

    public function index()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-apar';

        // $data['total_apar'] = $this->dataHandle->other_query("SELECT count(m_apar.nomor_apar) as total_apar from m_apar")->row();
        // $data['total_fa'] = $this->dataHandle->other_query("SELECT count(m_firealarm.no_firealarm) as total_fa from m_firealarm")->row();
        // $apar_belum_cek = $this->dataHandle->other_query("SELECT count(tr_pengecekan_apar.nomor_apar) as apar_belum FROM tr_pengecekan_apar WHERE MONTH(tr_pengecekan_apar.tanggal_pengisian) = MONTH(NOW())")->row();
        // $fa_belum_cek = $this->dataHandle->other_query("SELECT count(tr_pengecekan_firealarm.no_firealarm) as fa_belum FROM tr_pengecekan_firealarm WHERE MONTH(tr_pengecekan_firealarm.tanggal_pengecekan) = MONTH(NOW())")->row();
        // $data['apar_belum'] = $data['total_apar']->total_apar - $apar_belum_cek->apar_belum;
        // $data['fa_belum'] = $data['total_fa']->total_fa - $fa_belum_cek->fa_belum;

        date_default_timezone_set('Asia/Jakarta');
        $this->template->admin('main/index', $data);
    }
    public function setKonfigurasi()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-apar';
        $data['konfigurasi'] = $this->dataHandle->cek_konfigurasi('all');
        $this->template->admin('main/konfigurasi', $data);
    }
    public function ubahKonfigurasi()
    {
        // set config upload
        $config['upload_path'] = FCPATH . "/assets/images/logo/";
        $config['allowed_types'] = 'jpg|png';
        $config['encrypt_name'] = TRUE;

        $this->load->library('upload', $config);
        if ($this->upload->do_upload("logo")) {
            $data = $this->upload->data();

            //Resize and Compress Image
            $config['image_library'] = 'gd2';
            $config['source_image'] = FCPATH . '/assets/images/logo/' . $data['file_name'];
            $config['create_thumb'] = FALSE;
            $config['maintain_ratio'] = FALSE;
            $config['quality'] = '100%';
            $config['width'] = 240;
            $config['height'] = 240;
            $config['new_image'] = FCPATH . '/assets/images/logo/' . $data['file_name'];
            $this->load->library('image_lib', $config);
            $this->image_lib->resize();

            $input = $this->input->post();
            $logo = $data['file_name'];
            $data =
                [
                    'nama_perusahaan' => $input['nama_perusahaan'],
                    'nama_aplikasi' => $input['nama_aplikasi'],
                    'deskripsi_aplikasi' => $input['deskripsi'],
                    'logo' => $logo,
                    'alamat' => $input['alamat']
                ];
            $where = ['id_konfigurasi' => 1];
            $result = $this->dataHandle->edit('m_konfigurasi', $data, $where);
        } else {
            $input = $this->input->post();
            $data =
                [
                    'nama_perusahaan' => $input['nama_perusahaan'],
                    'nama_aplikasi' => $input['nama_aplikasi'],
                    'deskripsi_aplikasi' => $input['deskripsi'],
                    'alamat' => $input['alamat']
                ];
            $where = ['id_konfigurasi' => 1];
            $result = $this->dataHandle->edit('m_konfigurasi', $data, $where);
        }

        $response = [];
        if ($result > 0) {
            $response['status_konfigurasi'] = 1;
            $response['title'] = 'Konfigurasi';
            $response['msg'] = 'Data Berhasil diubah';
            $response['page'] = 'konfigurasi';
        } else {
            $response['status'] = 0;
            $response['title'] = 'Konfigurasi';
            $response['msg'] = 'Data Gagal diubah';
        }
        echo json_encode($response);
    }



    // Modul APAR
    public function lihatApar()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-apar';
        $data['pengguna'] = $this->dataHandle->getAllOrder('tanggal_dibuat', 'm_apar', 'DESC')->result();
        $this->template->admin('spv/lihat_apar', $data);
    }

    public function tambahApar()
    {

        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-apar';
        $this->template->admin('spv/tambah_apar', $data);
    }

    public function prosesTambahApar()
    {
        $input = $this->input->post(NULL, TRUE);

        $nomor_apar_terakhir = $this->dataHandle->get_last_id('nomor_apar', 'm_apar');
        if ($nomor_apar_terakhir) {
            $nilai_kode = substr($nomor_apar_terakhir['nomor_apar'], 7);
            $nomor_apar = (int) $nilai_kode;
            $nomor_apar = $nomor_apar + 1;
            $nomor_apar_otomatis = "RD-APAR" . str_pad($nomor_apar, 3, "0", STR_PAD_LEFT);
        } else {
            $nomor_apar_otomatis = "RD-APAR001";
        }

        $data = [
            'nomor_apar' => $nomor_apar_otomatis,
            'zona' => $input['zona'],
            'penempatan' => $input['penempatan'],
            'type' => $input['type'],
            'merk' => $input['merk'],
            'jenis_isi' => $input['jenis_isi'],
            'berat' => $input['berat'],
            'tanggal_perolehan' => $input['tanggal_perolehan'],
            'tanggal_kadaluwarsa' => $input['tanggal_kadaluwarsa'],
            'dibuat_oleh' => $this->session->userdata('nip')
        ];

        if ($this->dataHandle->insert('m_apar', $data) > 0) {
            $response['status'] = 1;
            $response['title'] = 'APAR';
            $response['msg'] = 'Data Berhasil Ditambahkan';
            $response['page'] = 'apar';
        } else {
            $response['status'] = 2;
            $response['title'] = 'APAR';
            $response['msg'] = 'Data Gagal Ditambahkan';
        }

        echo json_encode($response);
    }

    public function editApar($nomor_apar)
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $where = ['nomor_apar' => $nomor_apar];
        $data['page'] = 'tambah-apar';
        // $field = ['nomor_apar', 'zona', 'penempatan', 'type', 'merk', 'jenis_isi', 'berat', 'tanggal_perolehan', 'tanggal_kadaluwarsa', 'dibuat_oleh'];
        $data['apar'] = $this->dataHandle->other_query("SELECT m_apar.*, m_petugas.nama FROM m_apar JOIN m_petugas ON m_apar.dibuat_oleh = m_petugas.nip WHERE m_apar.nomor_apar = '$nomor_apar'")->row();

        $this->template->admin('spv/edit_apar', $data);
    }

    public function prosesEditApar()
    {
        $input = $this->input->post(NULL, TRUE);

        $data = [
            'zona' => $input['zona'],
            'penempatan' => $input['penempatan'],
            'type' => $input['type'],
            'merk' => $input['merk'],
            'jenis_isi' => $input['jenis_isi'],
            'berat' => $input['berat'],
            'tanggal_perolehan' => $input['tanggal_perolehan'],
            'tanggal_kadaluwarsa' => $input['tanggal_kadaluwarsa'],
            'dibuat_oleh' => $this->session->userdata('nip')
        ];

        $where = [
            'nomor_apar' => $input['nomor_apar']
        ];

        if ($this->dataHandle->edit('m_apar', $data, $where) > 0) {
            $response['status'] = 1;
            $response['title'] = 'APAR';
            $response['msg'] = 'Data Berhasil Diubah';
            $response['page'] = 'apar';
        } else {
            $response['status'] = 2;
            $response['title'] = 'APAR';
            $response['msg'] = 'Data Gagal Diubah';
        }
        echo json_encode($response);
    }
    public function hapusApar()
    {
        $nomor_apar = $this->input->post('id', TRUE);
        $hapus = $this->dataHandle->delete('m_apar', ['nomor_apar' => $nomor_apar]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "apar";
        } else {
            $response['status'] = 2;
            $response['page'] = "apar";
        }
        echo json_encode($response);
    }

    // Modul Fire Alarm
    public function lihatFirealarm()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-firealarm';
        $data['firealarm'] = $this->dataHandle->getAllOrder('tanggal_dibuat', 'm_firealarm', 'DESC')->result();
        $this->template->admin('spv/lihat_firealarm', $data);
    }

    public function tambahFirealarm()
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-firealarm';
        $this->template->admin('spv/tambah_firealarm', $data);
    }

    public function prosesTambahFirealarm()
    {
        $input = $this->input->post(NULL, TRUE);

        $nomor_firealarm_terakhir = $this->dataHandle->get_last_id('no_firealarm', 'm_firealarm');
        if ($nomor_firealarm_terakhir) {
            $nilai_kode = substr($nomor_firealarm_terakhir['no_firealarm'], 5);
            $nomor_firealarm = (int) $nilai_kode;
            $nomor_firealarm = $nomor_firealarm + 1;
            $nomor_firealarm_otomatis = "RD-FA" . str_pad($nomor_firealarm, 3, "0", STR_PAD_LEFT);
        } else {
            $nomor_apar_otomatis = "RD-FA001";
        }

        $data = [
            'no_firealarm' => $nomor_firealarm_otomatis,
            'zona' => $input['zona'],
            'penempatan' => $input['penempatan'],
            'titik' => $input['titik'],
            'type' => $input['type'],
            'merk' => $input['merk'],
            'jenis_sensor' => $input['jenis_sensor'],
            'tanggal_pasang' => $input['tanggal_pasang'],
            'dibuat_oleh' => $this->session->userdata('nip')
        ];

        if ($this->dataHandle->insert('m_firealarm', $data) > 0) {
            $response['status'] = 1;
            $response['title'] = 'FIREALARM';
            $response['msg'] = 'Data Berhasil Ditambahkan';
            $response['page'] = 'firealarm';
        } else {
            $response['status'] = 2;
            $response['title'] = 'FIREALARM';
            $response['msg'] = 'Data Gagal Ditambahkan';
        }

        echo json_encode($response);
    }

    public function editFirealarm($no_firealarm)
    {
        // konfigurasi
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-firealarm';
        $where = ['no_firealarm' => $no_firealarm];
        // $field = ['no_firealarm', 'zona', 'penempatan', 'type', 'merk', 'jenis_isi', 'berat', 'tanggal_perolehan', 'tanggal_kadaluwarsa', 'dibuat_oleh'];
        $data['firealarm'] = $this->dataHandle->other_query("SELECT m_firealarm.*, m_petugas.nama FROM m_firealarm JOIN m_petugas ON m_firealarm.dibuat_oleh = m_petugas.nip WHERE m_firealarm.no_firealarm = '$no_firealarm'")->row();

        $this->template->admin('spv/edit_firealarm', $data);
    }

    public function prosesEditFirealarm()
    {
        $input = $this->input->post(NULL, TRUE);

        $data = [
            'zona' => $input['zona'],
            'penempatan' => $input['penempatan'],
            'titik' => $input['titik'],
            'type' => $input['type'],
            'merk' => $input['merk'],
            'jenis_sensor' => $input['jenis_sensor'],
            'tanggal_pasang' => $input['tanggal_pasang'],
            'dibuat_oleh' => $this->session->userdata('nip')
        ];

        $where = [
            'no_firealarm' => $input['no_firealarm']
        ];

        if ($this->dataHandle->edit('m_firealarm', $data, $where) > 0) {
            $response['status'] = 1;
            $response['title'] = 'File Alarm';
            $response['msg'] = 'Data Berhasil Diubah';
            $response['page'] = 'firealarm';
        } else {
            $response['status'] = 2;
            $response['title'] = 'File Alarm';
            $response['msg'] = 'Data Gagal Diubah';
        }
        echo json_encode($response);
    }
    public function hapusFirealarm()
    {
        $no_firealarm = $this->input->post('id', TRUE);
        $hapus = $this->dataHandle->delete('m_firealarm', ['no_firealarm' => $no_firealarm]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "firealarm";
        } else {
            $response['status'] = 2;
            $response['page'] = "firealarm";
        }
        echo json_encode($response);
    }
}
