<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Pengguna extends CI_Controller
{

    protected $nama_pengguna;
    protected $nama_lengkap;
    protected $jenis_kelamin;
    protected $email;
    protected $no_hp;
    protected $jabatan;
    protected $paraf = 'default.png';
    protected $status;
    protected $katasandi;

    function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('id_pengguna')) {
            redirect(base_url("login"));
        }
    }


    // Pengguna
    public function lihatPengguna()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-pengguna';
        $data['pengguna'] = $this->dataHandle->getAllOrder('id_pengguna', 'm_pengguna', 'DESC')->result();
        $this->template->admin('pengguna/index.php', $data);
    }

    public function tambahPengguna()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-pengguna';
        $this->template->admin('pengguna/tambah_pengguna', $data);
    }

    public function prosesTambahPengguna()
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
                $response['title'] = 'Pengguna';
                $response['msg'] = 'Paraf tidak valid';
            }
            $paraf_file = $input['nama'] . '.png';
            $img_file = FCPATH . 'assets/images/paraf/' . $paraf_file;
            imagepng($im, $img_file, 0);
        } else {
            $paraf_file = 'default.png';
        }
        $data = [
            'nama_pengguna' => $input['username'],
            'nama_lengkap' => $input['nama'],
            'jenis_kelamin' => $input['jenis_kelamin'],
            'email' => $input['email'],
            'no_hp' => $input['no_hp'],
            'jabatan' => $input['jabatan'],
            'katasandi' => md5($input['katasandi']),
            'status' => 1,
            'paraf' => $paraf_file
        ];
        $where_username = [
            'nama_pengguna' => $input['username']
        ];
        $where_email = [
            'email' => $input['email']
        ];
        if ($this->dataHandle->get('m_pengguna', $where_username)->num_rows() == 0) {
            if ($this->dataHandle->get('m_pengguna', $where_email)->num_rows() == 0) {
                if ($this->dataHandle->insert('m_pengguna', $data) > 0) {
                    $response['status'] = 1;
                    $response['title'] = 'Pengguna';
                    $response['msg'] = 'Data Berhasil Ditambahkan';
                    $response['page'] = 'pengguna';
                } else {
                    $response['status'] = 2;
                    $response['title'] = 'Pengguna';
                    $response['msg'] = 'Data Gagal Ditambahkan';
                }
            } else {
                $response['status'] = 2;
                $response['title'] = 'Pengguna';
                $response['msg'] = 'Alamat email sudah terdaftar';
            }
        } else {
            $response['status'] = 2;
            $response['title'] = 'Pengguna';
            $response['msg'] = 'Username sudah terdaftar';
        }
        echo json_encode($response);
    }

    public function editPengguna($id_pengguna)
    {
        $id_pengguna = dec($id_pengguna);
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-pengguna';
        $where = ['id_pengguna' => $id_pengguna];
        $field = ['id_pengguna', 'nama_pengguna', 'nama_lengkap', 'email', 'jabatan', 'no_hp', 'jenis_kelamin', 'paraf'];
        $data['petugas'] = $this->dataHandle->getAllWhere('m_pengguna', $field, $where)->row();
        if ($data['petugas']->id_pengguna) {
            $this->template->admin('pengguna/edit_pengguna', $data);
        } else {
            redirect('404_override');
        }
    }

    public function prosesEditPengguna()
    {
        $id_pengguna = dec($this->uri->segment(3));
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
            if ($input['katasandi'] != '') {
                // katasandi baru :
                $data = [
                    'nama_pengguna' => $input['username'],
                    'nama_lengkap' => $input['nama'],
                    'jenis_kelamin' => $input['jenis_kelamin'],
                    'email' => $input['email'],
                    'no_hp' => $input['no_hp'],
                    'jabatan' => $input['jabatan'],
                    'katasandi' => md5($input['katasandi'])
                ];
            } else {
                // katasandi lama :
                $data = [
                    'nama_pengguna' => $input['username'],
                    'nama_lengkap' => $input['nama'],
                    'jenis_kelamin' => $input['jenis_kelamin'],
                    'email' => $input['email'],
                    'no_hp' => $input['no_hp'],
                    'jabatan' => $input['jabatan']
                ];
            }
        } else {
            if ($input['katasandi'] != '') {
                // katasandi baru :
                $data += [
                    'nama_pengguna' => $input['username'],
                    'nama_lengkap' => $input['nama'],
                    'jenis_kelamin' => $input['jenis_kelamin'],
                    'email' => $input['email'],
                    'no_hp' => $input['no_hp'],
                    'jabatan' => $input['jabatan'],
                    'paraf' => $paraf_file,
                    'katasandi' => md5($input['katasandi'])
                ];
            } else {
                // katasandi lama :
                $data = [
                    'nama_pengguna' => $input['username'],
                    'nama_lengkap' => $input['nama'],
                    'jenis_kelamin' => $input['jenis_kelamin'],
                    'email' => $input['email'],
                    'no_hp' => $input['no_hp'],
                    'jabatan' => $input['jabatan'],
                    'paraf' => $paraf_file
                ];
            }
        }

        $where = [
            'id_pengguna' => $id_pengguna
        ];
        $where_username = [
            'nama_pengguna' => $input['username'],
            'id_pengguna !=' => $id_pengguna
        ];
        $where_email = [
            'email' => $input['email'],
            'id_pengguna !=' => $id_pengguna
        ];
        if ($this->dataHandle->get('m_pengguna', $where_username)->num_rows() == 0) {
            if ($this->dataHandle->get('m_pengguna', $where_email)->num_rows() == 0) {
                if ($this->dataHandle->edit('m_pengguna', $data, $where) > 0) {
                    $response['status'] = 1;
                    $response['title'] = 'Pengguna';
                    $response['msg'] = 'Data Berhasil Diubah';
                    $response['page'] = 'pengguna';
                } else {
                    $response['status'] = 2;
                    $response['title'] = 'Pengguna';
                    $response['msg'] = 'Data Gagal Diubah';
                }
            } else {
                $response['status'] = 2;
                $response['title'] = 'Pengguna';
                $response['msg'] = 'Alamat email sudah terdaftar';
            }
        } else {
            $response['status'] = 2;
            $response['title'] = 'Pengguna';
            $response['msg'] = 'Username sudah terdaftar';
        }
        echo json_encode($response);
    }
    public function hapusPengguna()
    {
        $id_pengguna = dec($this->input->post('id', TRUE));
        $hapus = $this->dataHandle->delete('m_pengguna', ['id_pengguna' => $id_pengguna]);
        if ($hapus > 0) {
            $response['status'] = 1;
            $response['page'] = "pengguna";
        } else {
            $response['status'] = 2;
            $response['page'] = "pengguna";
        }
        echo json_encode($response);
    }
    // end of pengguna
}
