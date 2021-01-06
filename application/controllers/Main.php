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
        $tahun_ini = date('Y');
        $grafik = $this->dataHandle->other_query("SELECT
        SUM(IF(MONTH (tanggal) = '1' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS jan,
        SUM(IF(MONTH (tanggal) = '2' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS feb,
        SUM(IF(MONTH (tanggal) = '3' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS mar,
        SUM(IF(MONTH (tanggal) = '4' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS apr,
        SUM(IF(MONTH (tanggal) = '5' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS mei,
        SUM(IF(MONTH (tanggal) = '6' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS jun,
        SUM(IF(MONTH (tanggal) = '7' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS jul,
        SUM(IF(MONTH (tanggal) = '8' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS aug,
        SUM(IF(MONTH (tanggal) = '9' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS sep,
        SUM(IF(MONTH (tanggal) = '10' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS okt,
        SUM(IF(MONTH (tanggal) = '11' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS nov,
        SUM(IF(MONTH (tanggal) = '12' AND YEAR(tanggal) = '$tahun_ini', 1, 0 )) AS des
        FROM m_agenda")->result();

        $json = "[";
        foreach ($grafik as $g) {
            $json .= $g->jan . ', ';
            $json .= $g->feb . ', ';
            $json .= $g->mar . ', ';
            $json .= $g->apr . ', ';
            $json .= $g->mei . ', ';
            $json .= $g->jun . ', ';
            $json .= $g->jul . ', ';
            $json .= $g->aug . ', ';
            $json .= $g->sep . ', ';
            $json .= $g->okt . ', ';
            $json .= $g->nov . ', ';
            $json .= $g->des;
        }
        $json .= "]";
        $data['grafik'] = $json;
        $this->template->admin('main/index', $data);
    }
    public function setKonfigurasi()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah';
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
            $this->id_konfigurasi = 1;
            $this->logo = $data['file_name'];
            $this->nama_perusahaan  = $input['nama_perusahaan'];
            $this->nama_aplikasi    = $input['nama_aplikasi'];
            $this->deskripsi_aplikasi = $input['deskripsi'];
            $this->alamat = $input['alamat'];
            $data =
                [
                    'nama_perusahaan' => $this->nama_perusahaan,
                    'nama_aplikasi' => $this->nama_aplikasi,
                    'deskripsi_aplikasi' => $this->deskripsi_aplikasi,
                    'logo' => $this->logo,
                    'alamat' => $this->alamat
                ];
            $where = ['id_konfigurasi' => $this->id_konfigurasi];
            $result = $this->dataHandle->edit('m_main', $data, $where);
        } else {
            $input = $this->input->post();
            $this->id_konfigurasi = 1;
            $this->nama_perusahaan  = $input['nama_perusahaan'];
            $this->nama_aplikasi    = $input['nama_aplikasi'];
            $this->deskripsi_aplikasi = $input['deskripsi'];
            $this->alamat = $input['alamat'];
            $data =
                [
                    'nama_perusahaan' => $this->nama_perusahaan,
                    'nama_aplikasi' => $this->nama_aplikasi,
                    'deskripsi_aplikasi' => $this->deskripsi_aplikasi,
                    'alamat' => $this->alamat
                ];
            $where = ['id_konfigurasi' => $this->id_konfigurasi];
            $result = $this->dataHandle->edit('m_main', $data, $where);
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
