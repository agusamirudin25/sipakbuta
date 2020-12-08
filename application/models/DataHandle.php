<?php

class DataHandle extends CI_Model
{

	function getAll($tabel)
	{
		return $this->db->get($tabel);
	}
	function getAllOrder($field, $tabel, $format)
	{
		$this->db->order_by($field, $format);
		return $this->db->get($tabel);
	}

	function getAllWhere($tabel, $field, $where)
	{
		$this->db->select($field);
		$this->db->from($tabel);
		$this->db->where($where);
		return $this->db->get();
	}
	public function cek_konfigurasi($key)
	{
		$t = "SELECT * FROM m_konfigurasi WHERE id_konfigurasi = 1";
		$d = $this->db->query($t);
		$r = $d->num_rows();
		if ($r > 0) {
			foreach ($d->result() as $h) {
				$result = $h->nama_perusahaan . '^' . $h->nama_aplikasi . '^' . $h->deskripsi_aplikasi . '^' . $h->logo . '^' . $h->alamat;
			}
		} else {
			$result = '0^1^2^3^4^5';
		}
		$company_profile_array = explode("^", $result);
		$result_all = explode("^", $result);
		$company_profile = '';
		if ($key == 'nama_perusahaan') {
			$company_profile = $company_profile_array[0];
		}
		if ($key == 'nama_aplikasi') {
			$company_profile = $company_profile_array[1];
		}
		if ($key == 'deskripsi_aplikasi') {
			$company_profile = $company_profile_array[2];
		}
		if ($key == 'logo') {
			$company_profile = $company_profile_array[3];
		}
		if ($key == 'alamat') {
			$company_profile = $company_profile_array[4];
		}
		if ($key == 'all') {
			$company_profile = $result_all;
		}
		return  $company_profile;
	}
	function get_like($tabel1, $field, $field2, $value, $where, $order)
	{
		$this->db->select($field);
		$this->db->from($tabel1);
		$this->db->where($where);
		$this->db->like($field2, $value, 'after');
		$this->db->order_by($order);
		return $this->db->get();
	}

	function get($tabel, $where = [])
	{
		return $this->db->get_where($tabel, $where);
	}

	function sum($tabel, $field)
	{
		$this->db->select_sum($field);
		return $this->db->get($tabel)->result();
	}

	function insert($tabel, $insert)
	{
		$this->db->insert($tabel, $insert);
		return $this->db->affected_rows();
	}

	function count($tabel, $field, $value)
	{
		$this->db->like($field, $value, 'after');
		$this->db->from($tabel);
		return $this->db->count_all_results();
	}

	function edit($tabel, $data, $where)
	{
		$this->db->where($where);
		$this->db->update($tabel, $data);
		return $this->db->affected_rows();
	}

	function delete($tabel, $where)
	{
		$this->db->delete($tabel, $where);
		return $this->db->affected_rows();
	}

	function get_last_id($field, $tabel)
	{
		$this->db->select_max($field);
		return $this->db->get($tabel)->row_array();
	}

	function other_query($query)
	{
		return $this->db->query($query);
	}
}
