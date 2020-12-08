<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Beranda extends CI_Controller
{
    public $nama_aplikasi;
    public $deskripsi_aplikasi;

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
        $this->template->guest('front-end/bukutamu', $data);
    }
}
