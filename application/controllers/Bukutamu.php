<?php defined('BASEPATH') or exit('No direct script access allowed');

class Bukutamu extends CI_Controller
{

    private $id_bukutamu;
    private $id_agenda;
    private $id_pengunjung;
    private $pembahasan;
    private $dokumentasi;
    private $tanggal_dibuat;
    private $dibuat_oleh;

    public function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('id_pengguna')) {
            redirect(base_url("login"));
        }
    }

    // Bukutamu
    public function lihatBukutamu()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-bukutamu';
        $data['bukutamu'] = $this->dataHandle->other_query('SELECT tr_bukutamu.*, m_agenda.nama_kegiatan, m_agenda.jam, m_agenda.hari, m_lokasi.nama_lokasi, m_agenda.tanggal
        FROM tr_bukutamu JOIN m_agenda ON tr_bukutamu.id_agenda = m_agenda.id_agenda
        JOIN m_lokasi ON m_agenda.lokasi = m_lokasi.id_lokasi')->result();
        $this->template->admin('bukutamu/index.php', $data);
    }

    public function tambahBukutamu()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-bukutamu';
        $data['agenda'] = $this->dataHandle->getAllOrder('id_agenda', 'm_agenda', 'DESC')->result();
        $data['pengunjung'] = $this->dataHandle->getAllOrder('id_pengunjung', 'm_pengunjung', 'DESC')->result();
        $this->template->admin('bukutamu/tambah_bukutamu', $data);
    }

    public function simpanBukutamu()
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
            $nilai_kode = substr($id_bukutamu_terakhir['id_bukutamu'], 2);
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
        if ($this->dataHandle->get('tr_bukutamu', ['id_agenda' => $input['agenda']])->num_rows() == 0) {
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
        } else {
            $response['status'] = 2;
            $response['title'] = 'BUKU TAMU';
            $response['msg'] = 'Agenda sudah ada';
        }
        echo json_encode($response);
    }

    public function editBukutamu($id_bukutamu)
    {
        $id_bukutamu = dec($id_bukutamu);
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-bukutamu';
        $where = ['id_bukutamu' => $id_bukutamu];
        $field = '*';
        $data['agenda'] = $this->dataHandle->getAllOrder('id_agenda', 'm_agenda', 'DESC')->result();
        $data['pengunjung'] = $this->dataHandle->getAllOrder('id_pengunjung', 'm_pengunjung', 'DESC')->result();
        $data['bukutamu'] = $this->dataHandle->getAllWhere('tr_bukutamu', $field, $where)->row();
        if ($data['bukutamu']->id_bukutamu) {
            $this->template->admin('bukutamu/edit_bukutamu', $data);
        } else {
            redirect('404_override');
        }
    }

    public function prosesEditBukutamu()
    {
        $response = [];
        $input = $this->input->post();
        if ($input['type'] == 'foto') {
            $input = explode(",", $input['id']);
            $id_foto = $input[0];
            $id_bukutamu = dec($input[1]);
            $this->session->set_userdata(['id_bukutamu' => $id_bukutamu]);
            // ["12a1a9bb309d476c41ccccc9bc1fab2b.png","5a4be7c6ed4099014c72ed307de27375.png","76b8f460ce1cd7800009eff8384865c3.jpg"]
            $where = [
                'id_bukutamu' => $id_bukutamu
            ];
            $dokumentasi = $this->dataHandle->getAllWhere('tr_bukutamu', 'dokumentasi', $where)->row();
            $arr_dokumentasi = (array) json_decode($dokumentasi->dokumentasi);

            if (in_array($id_foto, $arr_dokumentasi)) {
                unset($arr_dokumentasi[array_search($id_foto, $arr_dokumentasi)]);
            }
            $data = [
                'dokumentasi' => json_encode($arr_dokumentasi)
            ];
            $html = "";
            if ($this->dataHandle->edit('tr_bukutamu', $data, $where) > 0) {
                $bukutamu = $this->dataHandle->getAllWhere('tr_bukutamu', "dokumentasi", $where)->row();
                foreach (json_decode($bukutamu->dokumentasi) as $dok) :
                    $html .= "<div class='card col-md-4 card-post card-round'>
                    <img class='card-img-top' src='" . base_url('assets/images/foto/') . $dok . "' alt='Card image cap'>
                    <div class='card-body'>
                    </div>
                    <div class='card-footer'>
                        <a href='#' onclick=delete_foto('" . $dok . ',' . enc($this->session->userdata('id_bukutamu')) . "','hapusfoto','#foto') class='btn btn-primary btn-rounded btn-sm'>Hapus</a>
                    </div>
                </div>";
                endforeach;
            };
            $this->session->unset_userdata('id_bukutamu');
            echo $html;
        } else {
            $id_bukutamu = dec($this->uri->segment(3));
            $where = [
                'id_bukutamu' => $id_bukutamu
            ];
            $dokumentasi = $this->dataHandle->getAllWhere('tr_bukutamu', 'id_agenda, dokumentasi', $where)->row();
            $arr_dokumentasi = (array) json_decode($dokumentasi->dokumentasi);

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
                        $config['new_image'] = FCPATH . '/assets/images/foto/' . $nama_foto;
                        $this->load->library('image_lib', $config);
                        $this->image_lib->resize();
                    }
                    array_push($nama_fotos, $nama_foto);
                    array_push($arr_dokumentasi, $nama_fotos);
                }
            }
            $data = [
                'id_agenda' => $input['agenda'],
                'id_pengunjung' => json_encode($input['pengunjung']),
                'pembahasan' => $input['pembahasan'],
                'dokumentasi' => json_encode($arr_dokumentasi)
            ];

            if ($this->dataHandle->get('tr_bukutamu', ['id_agenda' => $input['agenda'], ($dokumentasi->id_agenda == $input['agenda'])])->num_rows() == 0) {
                if ($this->dataHandle->edit('tr_bukutamu', $data, $where) > 0) {
                    $response['status'] = 1;
                    $response['title'] = 'BUKU TAMU';
                    $response['msg'] = 'Data Berhasil Diubah';
                    $response['page'] = 'bukutamu';
                } else {
                    $response['status'] = 2;
                    $response['title'] = 'BUKU TAMU';
                    $response['msg'] = 'Data Gagal Diubah';
                }
            } else {
                $response['status'] = 2;
                $response['title'] = 'BUKU TAMU';
                $response['msg'] = 'Agenda sudah ada';
            }
            echo json_encode($response);
        }
    }
    public function hapusBukutamu()
    {
        $id_bukutamu = dec($this->input->post('id', TRUE));
        $hapus = $this->dataHandle->delete('tr_bukutamu', ['id_bukutamu' => $id_bukutamu]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "bukutamu";
        } else {
            $response['status'] = 2;
            $response['page'] = "bukutamu";
        }
        echo json_encode($response);
    }
}
