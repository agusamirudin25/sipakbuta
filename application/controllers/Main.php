<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Main extends CI_Controller
{
    private $id_konfigurasi;
    private $nama_perusahaan;
    private $nama_aplikasi;
    private $deskripsi_aplikasi;
    private $logo;
    private $alamat;
    private $status;
    private $tanggal_dibuat;

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
        $data['page'] = 'tambah';

        $data['total_pengguna'] = $this->dataHandle->other_query("SELECT count(id_pengguna) as total_pengguna from m_pengguna")->row();
        $data['total_agenda'] = $this->dataHandle->other_query("SELECT count(id_agenda) as total_agenda from m_agenda")->row();
        $data['total_pengunjung'] = $this->dataHandle->other_query("SELECT count(id_pengunjung) as total_pengunjung from m_pengunjung")->row();
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
}
