<?php defined('BASEPATH') or exit('No direct script access allowed');

class Laporan extends CI_Controller
{

    private $id_laporan;
    private $nama;
    private $tanggal_dibuat;
    private $dibuat_oleh;

    public function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('id_pengguna')) {
            redirect(base_url("login"));
        }
        $this->load->library('Pdf');
    }

    // Laporan
    public function lihatLaporan()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-laporan';
        $data['laporan'] = $this->dataHandle->other_query('SELECT tr_laporan.*, m_pengguna.nama_lengkap
        FROM tr_laporan JOIN m_pengguna ON tr_laporan.dibuat_oleh = m_pengguna.id_pengguna')->result();
        $this->template->admin('laporan/index.php', $data);
    }

    public function tambahLaporan()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-laporan';
        $data['agenda'] = $this->dataHandle->getAllOrder('id_agenda', 'm_agenda', 'DESC')->result();
        $data['pengunjung'] = $this->dataHandle->getAllOrder('id_pengunjung', 'm_pengunjung', 'DESC')->result();
        $this->template->admin('laporan/tambah_laporan', $data);
    }

    public function prosesTambahLaporan()
    {
        $response = [];
        $nama_foto = '';
        $nama_fotos = [];
        $count = count($_FILES['dokumentasi']['name']);
        for ($i = 0; $i < $count; $i++) {
            if (!empty($_FILES['dokumentasi']['name'][$i])) {
                unset($config_foto);
                $_FILES['f']['name']        = $_FILES['dokumentasi']['name'][$i];
                $_FILES['f']['type']        = $_FILES['dokumentasi']['type'][$i];
                $_FILES['f']['tmp_name']    = $_FILES['dokumentasi']['tmp_name'][$i];
                $_FILES['f']['error']       = $_FILES['dokumentasi']['error'][$i];
                $_FILES['f']['size']        = $_FILES['dokumentasi']['size'][$i];

                $config_foto['upload_path'] = FCPATH . "/assets/images/foto/";
                $config_foto['allowed_types'] = 'jpg|png';
                $config_foto['encrypt_name'] = TRUE;
                $config_foto['overwrite'] = true;
                $this->load->library('upload', $config_foto);
                $this->upload->initialize($config_foto);
                if (!$this->upload->do_upload('f')) {
                    $error = array('error' => $this->upload->display_errors());
                    $response['msg'] = $error['error'];
                    $nama_foto = 'default.png';
                } else {
                    $arr_foto = array('upload_data' => $this->upload->data());
                    $nama_foto = $arr_foto['upload_data']['file_name'];

                    //Resize and Compress Image
                    $config['image_library'] = 'gd2';
                    $config['source_image'] = FCPATH . '/assets/images/foto/' . $nama_foto;
                    $config['create_thumb'] = FALSE;
                    $config['maintain_ratio'] = FALSE;
                    $config['quality'] = '100%';
                    $config['width'] = 240;
                    $config['height'] = 240;
                    $config['new_image'] = FCPATH . '/assets/images/foto/' . $nama_foto;
                    $this->load->library('image_lib', $config);
                    $this->image_lib->resize();
                }
                array_push($nama_fotos, $nama_foto);
            }
        }

        $input = $this->input->post();
        $dokumentasi = json_encode($nama_fotos);
        $id_bukutamu_terakhir = $this->dataHandle->get_last_id('id_bukutamu', 'tr_bukutamu');
        if ($id_bukutamu_terakhir) {
            $nilai_kode = substr($id_bukutamu_terakhir['id_bukutamu'], 3);
            $id_bukutamu = (int) $nilai_kode;
            $id_bukutamu = $id_bukutamu + 1;
            $id_bukutamu_otomatis = "B" . str_pad($id_bukutamu, 3, "0", STR_PAD_LEFT);
        } else {
            $id_bukutamu_otomatis = "B001";
        }
        $data = [
            'id_bukutamu' => $id_bukutamu_otomatis,
            'id_agenda' => $input['agenda'],
            'id_pengunjung' => json_encode($input['pengunjung']),
            'pembahasan' => $input['pembahasan'],
            'dokumentasi' => $dokumentasi,
            'dibuat_oleh' => $this->session->userdata('id_pengguna')
        ];
        if ($this->dataHandle->insert('tr_bukutamu', $data) > 0) {
            $response['status'] = 1;
            $response['title'] = 'BUKU TAMU';
            $response['msg'] = 'Data Berhasil Ditambahkan';
            $response['page'] = 'bukutamu';
        } else {
            $response['status'] = 2;
            $response['title'] = 'BUKU TAMU';
            $response['msg'] = 'Data Gagal Ditambahkan';
        }
        echo json_encode($response);
    }
}
