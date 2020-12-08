<?php defined('BASEPATH') or exit('No direct script access allowed');

class Agenda extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->table         = 'm_agenda';
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
        $data['lokasi'] = $this->dataHandle->getAll('m_lokasi')->result();
        $data['page'] = 'tambah-agenda';
        $agenda = $this->dataHandle->getAll($this->table)->result();
        $calendar = array();
        foreach ($agenda as $val) {
            $calendar[] = array(
                'id_agenda'     => $val->id_agenda,
                'title' => date('H:m', strtotime($val->jam)) . ' ' . $val->nama_kegiatan,
                'hari' => $val->hari,
                'start' => date_format(date_create($val->tanggal), "Y-m-d H:i:s"),
                'end' => date_format(date_create($val->tanggal), "Y-m-d H:i:s"),
                'color' => $val->warna,
                'lokasi' => $val->lokasi,
                'jam' => date('H:m', strtotime($val->jam))
            );
        }
        $data['get_data']   = json_encode($calendar);
        $this->template->admin('agenda/index.php', $data);
    }

    public function simpanAgenda()
    {
        $response = array();
        // get data id terakhir
        $id_agenda_terakhir = $this->dataHandle->get_last_id('id_agenda', 'm_agenda');

        if ($id_agenda_terakhir) {
            $nilai_kode = substr($id_agenda_terakhir['id_agenda'], 2);
            $id_agenda = (int) $nilai_kode;
            $id_agenda = $id_agenda + 1;
            $id_agenda_otomatis = "A" . str_pad($id_agenda, 3, "0", STR_PAD_LEFT);
        } else {
            $id_agenda_otomatis = "A001";
        }

        $param = $this->input->post();
        $timestamp = strtotime($this->input->post('tanggal'));
        $hari = hari_indo(date('l', $timestamp));
        $data = [
            'id_agenda' => $id_agenda_otomatis,
            'nama_kegiatan' => $param['nama'],
            'hari' => $hari,
            'tanggal' => $param['tanggal'],
            'jam' => $param['jam'],
            'lokasi' => $param['lokasi'],
            'warna' => $param['warna'],
            'dibuat_oleh' => $this->session->userdata('id_pengguna'),
            'status' => 1,
        ];

        $insert = $this->dataHandle->insert($this->table, $data);
        if ($insert > 0) {
            $response['status'] = TRUE;
            $response['notif']  = 'Sukses';
            $response['id']     = $id_agenda_otomatis;
        } else {
            $response['status'] = FALSE;
            $response['notif']  = 'Gagal, coba ulangi';
        }

        echo json_encode($response);
    }

    public function ubahAgenda()
    {
        $response = array();
        $param = $this->input->post();

        $id_agenda = $param['id_agenda'];
        $timestamp = strtotime($this->input->post('tanggal'));
        $hari = hari_indo(date('l', $timestamp));
        $data = [
            'nama_kegiatan' => $param['nama'],
            'hari' => $hari,
            'tanggal' => $param['tanggal'],
            'jam' => $param['jam'],
            'lokasi' => $param['lokasi'],
            'warna' => $param['warna'],
            'dibuat_oleh' => $this->session->userdata('id_pengguna'),
            'status' => 1,
        ];

        $where         = ['id_agenda'  => $id_agenda];

        $update = $this->dataHandle->edit($this->table, $data, $where);

        if ($update > 0) {
            $response['status'] = TRUE;
            $response['notif']    = 'Sukses Update data';
            $response['id']        = $id_agenda;
        } else {
            $response['status'] = FALSE;
            $response['notif']    = 'Gagal update, silakan coba lagi';
        }

        echo json_encode($response);
    }
    public function hapusAgenda()
    {
        $response        = array();
        $id_agenda     = $this->input->post('id_agenda');
        if (!empty($id_agenda)) {
            $where = ['id_agenda' => $id_agenda];
            $delete = $this->dataHandle->delete($this->table, $where);

            if ($delete > 0) {
                $response['status'] = TRUE;
                $response['notif']    = 'Sukses menghapus data';
            } else {
                $response['status'] = FALSE;
                $response['notif']    = 'Gagal Menghapus. Coba lagi';
            }
        } else {
            $response['status'] = FALSE;
            $response['notif']    = 'Data not found';
        }

        echo json_encode($response);
    }
}
