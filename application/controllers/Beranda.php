<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Beranda extends CI_Controller
{
    private $nama_aplikasi;
    private $deskripsi_aplikasi;

    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
    }

    function index()
    {
        $this->template->guest('front-end/index');
    }

    public function lihatAgenda()
    {
        $data['hari'] = hari_indo(date('l'));
        $data['tanggal'] = tgl_indo(date('Y-m-d'));
        $tgl = date('Y-m-d');
        $data['agenda'] = $this->dataHandle->get('m_agenda', ['tanggal' => $tgl])->result();
        $this->template->guest('front-end/lihat_agenda', $data);
    }
    public function tambahBukutamu($_id_agenda)
    {
        $id_agenda = dec($_id_agenda);
        $data['hari'] = hari_indo(date('l'));
        $data['tanggal'] = tgl_indo(date('Y-m-d'));
        $data['agenda'] = $this->dataHandle->get('m_agenda', ['id_agenda' => $id_agenda]);
        $data['pengunjung'] = $this->dataHandle->getAll('m_pengunjung')->result();
        $this->template->guest('front-end/bukutamu', $data);
    }
    public function prosesTambahTamu()
    {
        $post = $this->input->post(NULL, TRUE);
        $id_agenda = dec($post['id_agenda']);
        $_pengunjung = '';
        $dokumentasi = [];
        if ($post['pengunjung'] == '-') {
            // jika pengunjung nya baru, start
            // get last id pengunjung
            $id_pengunjung_terakhir = $this->dataHandle->get_last_id('id_pengunjung', 'm_pengunjung');
            if ($id_pengunjung_terakhir) {
                $nilai_kode = substr($id_pengunjung_terakhir['id_pengunjung'], 2);
                $id_pengunjung = (int) $nilai_kode;
                $id_pengunjung = $id_pengunjung + 1;
                $id_pengunjung_otomatis = "PG" . str_pad($id_pengunjung, 3, "0", STR_PAD_LEFT);
            } else {
                $id_pengunjung_otomatis = "PG001";
            }
            $base64_default = "iVBORw0KGgoAAAANSUhEUgAAAOwAAACaCAYAAACqqKTIAAADxElEQVR4Xu3TgQkAMAwCwXb/oS10i4fLBHLGu23HESCQELgGm+hJSAJfwGA9AoGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBAzWDxAICRhsqCxRCRisHyAQEjDYUFmiEjBYP0AgJGCwobJEJWCwfoBASMBgQ2WJSsBg/QCBkIDBhsoSlYDB+gECIQGDDZUlKgGD9QMEQgIGGypLVAIG6wcIhAQMNlSWqAQM1g8QCAkYbKgsUQkYrB8gEBIw2FBZohIwWD9AICRgsKGyRCVgsH6AQEjAYENliUrAYP0AgZCAwYbKEpWAwfoBAiEBgw2VJSoBg/UDBEICBhsqS1QCBusHCIQEDDZUlqgEDNYPEAgJGGyoLFEJGKwfIBASMNhQWaISMFg/QCAkYLChskQlYLB+gEBIwGBDZYlKwGD9AIGQgMGGyhKVgMH6AQIhAYMNlSUqAYP1AwRCAgYbKktUAgbrBwiEBAw2VJaoBB7lXmZRz/obHAAAAABJRU5ErkJggg==";
            $paraf = str_replace("[removed]", '', $post['paraf']);

            if ($paraf != $base64_default) {
                $b64 = $paraf;
                $bin = base64_decode($b64);
                $im = imageCreateFromString($bin);
                if (!$im) {
                    $response['status'] = 3;
                    $response['title'] = 'pengunjung';
                    $response['msg'] = 'Paraf tidak valid';
                }
                $paraf_file = $post['nama_pengunjung'] . '.png';
                $img_file = FCPATH . 'assets/images/paraf/' . $paraf_file;
                imagepng($im, $img_file, 0);
            } else {
                $paraf_file = 'default.png';
            }
            $data = [
                'id_pengunjung' => $id_pengunjung_otomatis,
                'nama' => $post['nama_pengunjung'],
                'jabatan' => $post['jabatan'],
                'instansi' => $post['instansi'],
                'no_hp' => $post['no_hp'],
                'status' => 1,
                'tanda_tangan' => $paraf_file
            ];
            $this->dataHandle->insert('m_pengunjung', $data);
            $_pengunjung = $id_pengunjung_otomatis;
        } else {
            $_pengunjung = $post['pengunjung'];
        }

        $cek_id_agenda = $this->dataHandle->get('tr_bukutamu', ['id_agenda' => $id_agenda]);
        if ($cek_id_agenda->row()) {
            // jika ada maka update pengunjung
            $bukutamu = $cek_id_agenda->row();
            $id_bukutamu = $bukutamu->id_bukutamu;
            $data_pengunjung = json_decode($bukutamu->id_pengunjung);
            $data_pengunjung[] = $_pengunjung;
            $id_pengunjung = json_encode($data_pengunjung);
            if ($this->dataHandle->edit('tr_bukutamu', ['id_pengunjung' => $id_pengunjung], ['id_bukutamu' => $id_bukutamu]) > 0) {
                $response['status'] = 1;
                $response['title'] = 'Bukutamu';
                $response['msg'] = 'Data Berhasil Ditambahkan';
            } else {
                $response['status'] = 2;
                $response['title'] = 'Bukutamu';
                $response['msg'] = 'Data Gagal Ditambahkan';
            }
        } else {
            // jika ga ada, tambah di transaksi bukutamu dan insert pengunjung baru
            // get last id bukutamu
            $id_bukutamu_terakhir = $this->dataHandle->get_last_id('id_bukutamu', 'tr_bukutamu');
            if ($id_bukutamu_terakhir) {
                $nilai_kode = substr($id_bukutamu_terakhir['id_bukutamu'], 2);
                $id_bukutamu = (int) $nilai_kode;
                $id_bukutamu = $id_bukutamu + 1;
                $id_bukutamu_otomatis = "B" . str_pad($id_bukutamu, 3, "0", STR_PAD_LEFT);
            } else {
                $id_bukutamu_otomatis = "B001";
            }
            // get last id bukutamu end
            $pengunjung = [];
            $pengunjung[] = $_pengunjung;
            $id_pengunjung = json_encode($pengunjung);
            $dokumentasi = json_encode($dokumentasi);
            $data_bukutamu = [
                'id_bukutamu' => $id_bukutamu_otomatis,
                'id_agenda' => $id_agenda,
                'id_pengunjung' => $id_pengunjung,
                'pembahasan' => '',
                'dokumentasi' => $dokumentasi,
                'dibuat_oleh' => 0
            ];
            if ($this->dataHandle->insert('tr_bukutamu', $data_bukutamu) > 0) {
                $response['status'] = 1;
                $response['title'] = 'Bukutamu';
                $response['msg'] = 'Data Berhasil Ditambahkan';
            } else {
                $response['status'] = 2;
                $response['title'] = 'Bukutamu';
                $response['msg'] = 'Data Gagal Ditambahkan';
            }
        }

        echo json_encode($response);
    }

    public function getTamu()
    {
        $id = dec($this->input->post('id'));
        $dt = $this->dataHandle->get('tr_bukutamu', ['id_agenda' => $id])->result();

        $nama_pengunjung = [];
        $id_pengunjung = [];
        $html = '';
        if ($dt) {
            $pengunjung = json_decode($dt[0]->id_pengunjung);

            foreach ($pengunjung as $row) {
                $br = $this->dataHandle->getAllWhere('m_pengunjung', 'nama',  ['id_pengunjung' => $row])->row_array();
                $nama_pengunjung[] = $br;
                $id_pengunjung[] = $row;
            }
            $array = implode("','", $id_pengunjung);
            $id_pengunjung = $this->dataHandle->other_query("SELECT nama, id_pengunjung FROM m_pengunjung WHERE id_pengunjung not in('" . $array . "')")->result();
            $html = "<option value=''>-Pilih Pengunjung-</option>";
            foreach ($id_pengunjung as $brs) :
                $html .= "<option value='{$brs->id_pengunjung}'>{$brs->nama}</option>";
            endforeach;
            $html .= "<option value='-'>Lainnya</option>";
        }

        if ($id == FALSE) {
            $response['data'] = '-';
            $response['total'] = 0;
        } else {
            $response['data'] = $nama_pengunjung;
            $response['html'] = $html;
            $response['total'] = count($nama_pengunjung);
        }
        echo json_encode($response);
    }
}
