<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Lokasi extends CI_Controller
{

    private $id_lokasi;
    private $nama_lokasi;
    private $status;
    private $tanggal_dibuat;
    private $dibuat_oleh;

    function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('id_pengguna')) {
            redirect(base_url("login"));
        }
    }

    // Lokasi
    public function lihatLokasi()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-lokasi';
        $data['lokasi'] = $this->dataHandle->getAllOrder('id_lokasi', 'm_lokasi', 'DESC')->result();
        $this->template->admin('lokasi/index.php', $data);
    }

    public function tambahLokasi()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-lokasi';
        $this->template->admin('lokasi/tambah_lokasi', $data);
    }

    public function prosesTambahLokasi()
    {
        $input = $this->input->post();
        $id_lokasi_terakhir = $this->dataHandle->get_last_id('id_lokasi', 'm_lokasi');
        if ($id_lokasi_terakhir) {
            $nilai_kode = substr($id_lokasi_terakhir['id_lokasi'], 2);
            $id_lokasi = (int) $nilai_kode;
            $id_lokasi = $id_lokasi + 1;
            $id_lokasi_otomatis = "L" . str_pad($id_lokasi, 3, "0", STR_PAD_LEFT);
        } else {
            $id_lokasi_otomatis = "L001";
        }

        $data = [
            'id_lokasi' => $id_lokasi_otomatis,
            'nama_lokasi' => $input['nama_lokasi'],
            'dibuat_oleh' => $this->session->userdata('id_pengguna'),
            'status' => 1,
        ];
        $nama = [
            'nama_lokasi' => $input['nama_lokasi']
        ];

        if ($this->dataHandle->get('m_lokasi', $nama)->num_rows() == 0) {
            if ($this->dataHandle->insert('m_lokasi', $data) > 0) {
                $response['status'] = 1;
                $response['title'] = 'lokasi';
                $response['msg'] = 'Data Berhasil Ditambahkan';
                $response['page'] = 'lokasi';
            } else {
                $response['status'] = 2;
                $response['title'] = 'lokasi';
                $response['msg'] = 'Data Gagal Ditambahkan';
            }
        } else {
            $response['status'] = 2;
            $response['title'] = 'lokasi';
            $response['msg'] = 'Nama sudah terdaftar';
        }

        echo json_encode($response);
    }

    public function editLokasi($id_lokasi)
    {
        $id_lokasi = dec($id_lokasi);
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-pengunjung';
        $where = ['id_lokasi' => $id_lokasi];
        $field = '*';
        $data['lokasi'] = $this->dataHandle->getAllWhere('m_lokasi', $field, $where)->row();
        if ($data['lokasi']->id_lokasi) {
            $this->template->admin('lokasi/edit_lokasi', $data);
        } else {
            redirect('404_override');
        }
    }

    public function prosesEditLokasi()
    {
        $id_lokasi = dec($this->uri->segment(3));
        $input = $this->input->post();
        $data = [
            'nama_lokasi' => $input['nama_lokasi'],
            'dibuat_oleh' => $this->session->userdata('id_pengguna'),
            'status' => 1,
        ];

        $where = [
            'id_lokasi' => $id_lokasi
        ];
        $where_nama = [
            'nama_lokasi' => $input['nama_lokasi'],
            'id_lokasi !=' => $id_lokasi
        ];

        if ($this->dataHandle->get('m_lokasi', $where_nama)->num_rows() == 0) {
            if ($this->dataHandle->edit('m_lokasi', $data, $where) > 0) {
                $response['status'] = 1;
                $response['title'] = 'Lokasi';
                $response['msg'] = 'Data Berhasil Diubah';
                $response['page'] = 'lokasi';
            } else {
                $response['status'] = 2;
                $response['title'] = 'lokasi';
                $response['msg'] = 'Data Gagal Diubah';
            }
        } else {
            $response['status'] = 2;
            $response['title'] = 'Lokasi';
            $response['msg'] = 'Nama sudah terdaftar';
        }

        echo json_encode($response);
    }
    public function hapusLokasi()
    {
        $id_lokasi = dec($this->input->post('id', TRUE));
        $hapus = $this->dataHandle->delete('m_lokasi', ['id_lokasi' => $id_lokasi]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "lokasi";
        } else {
            $response['status'] = 2;
            $response['page'] = "lokasi";
        }
        echo json_encode($response);
    }
    // end of pengunjung
}
