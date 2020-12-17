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
        var_dump($this->input->post());
        die;
    }

    public function getTamu()
    {
        $id = dec($this->input->post('id'));
        $dt = $this->dataHandle->get('tr_bukutamu', ['id_agenda' => $id])->result();
        $nama_pengunjung = [];
        if ($dt) {
            $pengunjung = json_decode($dt[0]->id_pengunjung);

            foreach ($pengunjung as $dt) {
                $br = $this->dataHandle->getAllWhere('m_pengunjung', 'nama',  ['id_pengunjung' => $dt])->row_array();
                $nama_pengunjung[] = $br;
            }
        }

        $response['data'] = $nama_pengunjung;
        $response['total'] = count($nama_pengunjung);
        echo json_encode($response);
    }
}
