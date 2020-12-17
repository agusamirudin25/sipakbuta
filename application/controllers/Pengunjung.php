<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Pengunjung extends CI_Controller
{
    private $id_pengunjung;
    private $nama;
    private $jabatan;
    private $instansi;
    private $no_hp;
    private $tanda_tangan;
    private $tanggal_dibuat;
    private $tanggal_diubah;

    function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('id_pengguna')) {
            redirect(base_url("login"));
        }
    }


    // Pengguna
    public function lihatPengunjung()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-pengunjung';
        $data['pengunjung'] = $this->dataHandle->getAllOrder('id_pengunjung', 'm_pengunjung', 'DESC')->result();
        $this->template->admin('pengunjung/index.php', $data);
    }

    public function tambahPengunjung()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-pengunjung';
        $this->template->admin('pengunjung/tambah_pengunjung', $data);
    }

    public function prosesTambahPengunjung()
    {
        $input = $this->input->post();

        $base64_default = "iVBORw0KGgoAAAANSUhEUgAAAOwAAACaCAYAAACqqKTIAAADxElEQVR4Xu3TgQkAMAwCwXb/oS10i4fLBHLGu23HESCQELgGm+hJSAJfwGA9AoGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBB7lXmZRz/obHAAAAABJRU5ErkJggg==";
        $paraf = str_replace("data:image/png;base64,", '', $input['paraf']);
        if ($paraf != $base64_default) {
            $b64 = $paraf;
            $bin = base64_decode($b64);
            $im = imageCreateFromString($bin);
            if (!$im) {
                $response['status'] = 3;
                $response['title'] = 'pengunjung';
                $response['msg'] = 'Paraf tidak valid';
            }
            $paraf_file = $input['nama'] . '.png';
            $img_file = FCPATH . 'assets/images/paraf/' . $paraf_file;
            imagepng($im, $img_file, 0);
        } else {
            $paraf_file = 'default.png';
        }
        $id_pengunjung_terakhir = $this->dataHandle->get_last_id('id_pengunjung', 'm_pengunjung');
        if ($id_pengunjung_terakhir) {
            $nilai_kode = substr($id_pengunjung_terakhir['id_pengunjung'], 4);
            $id_pengunjung = (int) $nilai_kode;
            $id_pengunjung = $id_pengunjung + 1;
            $id_pengunjung_otomatis = "PG" . str_pad($id_pengunjung, 3, "0", STR_PAD_LEFT);
        } else {
            $id_pengunjung_otomatis = "PG-001";
        }

        $data = [
            'id_pengunjung' => $id_pengunjung_otomatis,
            'nama' => $input['nama'],
            'jabatan' => $input['jabatan'],
            'instansi' => $input['instansi'],
            'no_hp' => $input['no_hp'],
            'status' => 1,
            'tanda_tangan' => $paraf_file
        ];
        $nama = [
            'nama' => $input['nama']
        ];

        if ($this->dataHandle->get('m_pengunjung', $nama)->num_rows() == 0) {
            if ($this->dataHandle->insert('m_pengunjung', $data) > 0) {
                $response['status'] = 1;
                $response['title'] = 'pengunjung';
                $response['msg'] = 'Data Berhasil Ditambahkan';
                $response['page'] = 'pengunjung';
            } else {
                $response['status'] = 2;
                $response['title'] = 'pengunjung';
                $response['msg'] = 'Data Gagal Ditambahkan';
            }
        } else {
            $response['status'] = 2;
            $response['title'] = 'pengunjung';
            $response['msg'] = 'Nama sudah terdaftar';
        }

        echo json_encode($response);
    }

    public function editpengunjung($id_pengunjung)
    {
        $id_pengunjung = dec($id_pengunjung);
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-pengunjung';
        $where = ['id_pengunjung' => $id_pengunjung];
        $field = '*';
        $data['pengunjung'] = $this->dataHandle->getAllWhere('m_pengunjung', $field, $where)->row();
        if ($data['pengunjung']->id_pengunjung) {
            $this->template->admin('pengunjung/edit_pengunjung', $data);
        } else {
            redirect('404_override');
        }
    }

    public function prosesEditPengunjung()
    {
        $id_pengunjung = dec($this->uri->segment(3));
        $input = $this->input->post();
        $base64_default = "iVBORw0KGgoAAAANSUhEUgAAAOwAAACaCAYAAACqqKTIAAADxElEQVR4Xu3TgQkAMAwCwXb/oS10i4fLBHLGu23HESCQELgGm+hJSAJfwGA9AoGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBB7lXmZRz/obHAAAAABJRU5ErkJggg==";
        $paraf = str_replace("data:image/png;base64,", '', $input['paraf']);

        if ($paraf != $base64_default) {
            //jika ada paraf baru :
            $b64 = $paraf;
            $bin = base64_decode($b64);
            $im = imageCreateFromString($bin);
            if (!$im) {
                $response['status'] = 3;
                $response['title'] = 'Pengguna';
                $response['msg'] = 'Paraf tidak valid';
            }
            $paraf_file = $input['nama'] . '.png';
            $img_file = FCPATH . 'assets/images/paraf/' . $paraf_file;
            imagepng($im, $img_file, 0);
            $data['paraf'] = $paraf_file;
        } else {
            $data['paraf'] = '';
        }
        if ($data['paraf'] == '') {
            $data = [
                'nama' => $input['nama'],
                'jabatan' => $input['jabatan'],
                'instansi' => $input['instansi'],
                'no_hp' => $input['no_hp']
            ];
        } else {
            $data = [
                'nama' => $input['nama'],
                'jabatan' => $input['jabatan'],
                'instansi' => $input['instansi'],
                'no_hp' => $input['no_hp'],
                'tanda_tangan' => $paraf_file
            ];
        }

        $where = [
            'id_pengunjung' => $id_pengunjung
        ];
        $where_nama = [
            'nama' => $input['nama'],
            'id_pengunjung !=' => $id_pengunjung
        ];

        if ($this->dataHandle->get('m_pengunjung', $where_nama)->num_rows() == 0) {
            if ($this->dataHandle->edit('m_pengunjung', $data, $where) > 0) {
                $response['status'] = 1;
                $response['title'] = 'Pengunjung';
                $response['msg'] = 'Data Berhasil Diubah';
                $response['page'] = 'Pengunjung';
            } else {
                $response['status'] = 2;
                $response['title'] = 'Pengunjung';
                $response['msg'] = 'Data Gagal Diubah';
            }
        } else {
            $response['status'] = 2;
            $response['title'] = 'Pengunjung';
            $response['msg'] = 'Nama sudah terdaftar';
        }

        echo json_encode($response);
    }
    public function hapusPengunjung()
    {
        $id_pengunjung = dec($this->input->post('id', TRUE));
        $hapus = $this->dataHandle->delete('m_pengunjung', ['id_pengunjung' => $id_pengunjung]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "pengunjung";
        } else {
            $response['status'] = 2;
            $response['page'] = "pengunjung";
        }
        echo json_encode($response);
    }
    // end of pengunjung
}
