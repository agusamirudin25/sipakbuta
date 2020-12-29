<?php
defined('BASEPATH') or exit('No direct script access allowed');

$route['default_controller'] = 'Beranda';
$route['404_override'] = 'Login/blankPage';
$route['translate_uri_dashes'] = FALSE;

// Menu
$route['buku-tamu'] = 'Beranda/lihatAgenda';
$route['tambah-buku-tamu/(:any)'] = 'Beranda/tambahBukutamu/$1';


$route['login'] = 'Login';
$route['konfigurasi'] = 'Main/setKonfigurasi';
// pengguna
$route['pengguna'] = 'Pengguna/lihatPengguna';
$route['tambah-pengguna'] = 'Pengguna/tambahPengguna';
$route['edit-pengguna/(:any)'] = 'Pengguna/editPengguna/$1';
$route['hp'] = 'Pengguna/hapusPengguna';
// pengunjung
$route['pengunjung'] = 'pengunjung/lihatPengunjung';
$route['tambah-pengunjung'] = 'pengunjung/tambahPengunjung';
$route['edit-pengunjung/(:any)'] = 'pengunjung/editPengunjung/$1';
$route['hpg'] = 'pengunjung/hapusPengunjung';
// lokasi
$route['lokasi'] = 'lokasi/lihatLokasi';
$route['tambah-lokasi'] = 'lokasi/tambahLokasi';
$route['edit-lokasi/(:any)'] = 'lokasi/editLokasi/$1';
$route['hl'] = 'lokasi/hapusLokasi';
// bukutamu
$route['bukutamu'] = 'Bukutamu/lihatBukutamu';
$route['tambah-bukutamu'] = 'Bukutamu/tambahBukutamu';
$route['edit-bukutamu/(:any)'] = 'Bukutamu/editBukutamu/$1';
$route['hb'] = 'Bukutamu/hapusBukutamu';
$route['hapusfoto'] = 'Bukutamu/prosesEditBukutamu';

// laporan
$route['laporan'] = 'Laporan/lihatLaporan';
$route['tambah-laporan'] = 'Laporan/tambahLaporan';
$route['lihat-laporan/(:any)'] = 'Laporan/editLaporan/$1';
$route['hlpr'] = 'Laporan/hapusLaporan';

$route['rekap-apar'] = 'Admin/rekapBulananApar';
$route['rekap-firealarm'] = 'Admin/rekapBulananFirealarm';
$route['excel/(:num)/(:num)/(:num)'] = 'Admin/eksporExcel/$1/$2/$3';
$route['pdf/(:num)/(:num)/(:num)'] = 'Admin/eksporPdf/$1/$2/$3';
