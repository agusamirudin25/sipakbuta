<?php defined('BASEPATH') or exit('No direct script access allowed');

class Laporan extends CI_Controller
{

    private $id_laporan;
    private $nama;
    private $tanggal_dibuat;
    private $dibuat_oleh;

    public function __construct()
    {
        parent::__construct();
        if (!$this->session->has_userdata('id_pengguna')) {
            redirect(base_url("login"));
        }
        $this->load->library('Pdf');
    }

    // Laporan
    public function lihatLaporan()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-laporan';
        $data['laporan'] = $this->dataHandle->other_query('SELECT tr_laporan.*, m_pengguna.nama_lengkap
        FROM tr_laporan JOIN m_pengguna ON tr_laporan.dibuat_oleh = m_pengguna.id_pengguna')->result();
        $this->template->admin('laporan/index.php', $data);
    }

    public function tambahLaporan()
    {
        $data['title'] = $this->dataHandle->cek_konfigurasi('nama_aplikasi');
        $data['logo'] = $this->dataHandle->cek_konfigurasi('logo');
        $data['nama_tim'] = $this->dataHandle->cek_konfigurasi('nama_perusahaan');
        $data['deskripsi'] = $this->dataHandle->cek_konfigurasi('deskripsi_aplikasi');
        $data['page'] = 'tambah-laporan';
        $this->template->admin('laporan/tambah_laporan', $data);
    }

    public function prosesTambahLaporan()
    {
        $response = [];
        $input = $this->input->post();
        $bulan = $input['bulan'];
        $tahun = $input['tahun'];
        $bukutamu = $this->dataHandle->other_query("SELECT tr_bukutamu.*, m_agenda.nama_kegiatan, m_agenda.jam, m_agenda.hari, m_lokasi.nama_lokasi, m_agenda.tanggal
        FROM tr_bukutamu JOIN m_agenda ON tr_bukutamu.id_agenda = m_agenda.id_agenda
        JOIN m_lokasi ON m_agenda.lokasi = m_lokasi.id_lokasi WHERE MONTH(tr_bukutamu.tanggal_dibuat) = '$bulan' AND YEAR(tr_bukutamu.tanggal_dibuat) = '$tahun'")->result();
        $html = '';
        $status = 0;
        if ($bukutamu) {
            // jika ada
            $html .= "
            <table cellpadding='0' cellspacing='0' class='table table-head-bg-success'' width=' 100%'>
                <thead>
                    <tr class='text-center'>
                        <th>No</th>
                        <th>Nama Kegiatan</th>
                        <th>Waktu</th>
                        <th>Lokasi</th>
                        <th>Pembahasan</th>
                    </tr>
                </thead>
                <tbody>";
            $i = 1;
            foreach ($bukutamu as $row) :
                $html .= "<tr class='odd gradeX'>
                        <td>" . $i++ . "</td>
                        <td>" . $row->nama_kegiatan . "</td>
                        <td>" . $row->hari . ', ' . tgl_indo($row->tanggal) . ' ' . $row->jam . "</td>
                        <td>" . $row->nama_lokasi . "</td>
                        <td>" . $row->pembahasan . "</td>
                    </tr>
                </tbody>";
            endforeach;
            $html .= "</table>";
            $status = 1;
        } else {
            // jika ga ada
            $html .= "
            <table cellpadding='0' cellspacing='0' class='table table-head-bg-success'' width=' 100%'>
                <thead>
                    <tr class='text-center'>
                        <th>No</th>
                        <th>Nama Kegiatan</th>
                        <th>Waktu</th>
                        <th>Lokasi</th>
                        <th>Pembahasan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class='odd gradeX'>
                        <td colspan=5 class='text-center'>Data tidak ditemukan</td>
                    </tr>
                </tbody>
            </table>";
            $status = 0;
        }
        $response['html'] = $html;
        $response['status'] = $status;
        echo json_encode($response);
    }

    public function exportPdf($bulan, $tahun)
    {
        $bukutamu = $this->dataHandle->other_query("SELECT tr_bukutamu.*, m_agenda.nama_kegiatan, m_agenda.jam, m_agenda.hari, m_lokasi.nama_lokasi, m_agenda.tanggal
        FROM tr_bukutamu JOIN m_agenda ON tr_bukutamu.id_agenda = m_agenda.id_agenda
        JOIN m_lokasi ON m_agenda.lokasi = m_lokasi.id_lokasi WHERE MONTH(tr_bukutamu.tanggal_dibuat) = '$bulan' AND YEAR(tr_bukutamu.tanggal_dibuat) = '$tahun'")->result();
        // var_dump($bukutamu);
        // die;
        $id_laporan_terakhir = $this->dataHandle->get_last_id('id_laporan', 'tr_laporan');
        if ($id_laporan_terakhir) {
            $nilai_kode = substr($id_laporan_terakhir['id_laporan'], 3);
            $id_laporan = (int) $nilai_kode;
            $id_laporan = $id_laporan + 1;
            $id_laporan_otomatis = "LAP" . str_pad($id_laporan, 3, "0", STR_PAD_LEFT);
        } else {
            $id_laporan_otomatis = "LAP001";
        }
        $nama_file = "Laporan-Agenda-" . bulan($bulan) . '-' . $tahun;
        $data = [
            'id_laporan' => $id_laporan_otomatis,
            'nama' => $nama_file,
            'dibuat_oleh' => $this->session->userdata('id_pengguna')
        ];
        $this->dataHandle->insert('tr_laporan', $data);
        $this->load->library('ciqrcode');
        $params['data'] =  base_url() . "assets/images/laporan/" . $nama_file . ".pdf";
        $params['level'] = 'H';
        $params['size'] = 10;
        $params['savename'] = FCPATH . "/assets/images/qrcode/" . $nama_file . ".png";
        $this->ciqrcode->generate($params);

        // load fpdf
        $this->load->library('pdf');
        $pdf = new PDF('P', 'mm', 'Legal');
        $pdf->SetTitle('Laporan Agenda Kegiatan');
        foreach ($bukutamu as $bt) {
            // membuat halaman baru
            $pdf->AddPage();
            // setting jenis font yang akan digunakan
            $pdf->SetFont('Times', 'B', 14);
            // Logo
            $pdf->Image(FCPATH . 'assets/images/kop-surat.png', -2, -3, 220);
            // mencetak string 
            $pdf->setY(52);
            // $pdf->SetLeftMargin(1);
            $pdf->Cell(200, 10, 'LAPORAN KEGIATAN BALE PRASUTI SINGAPERBANGSA', 0, 1, 'C');
            $pdf->setX(30);
            $pdf->SetFont('Times', '', 12);
            $pdf->Cell(120, 8, "Hari dan Tanggal               : " . $bt->hari . ", " . tgl_indo($bt->tanggal), 0, 1, 'L');
            $pdf->setX(30);
            $pdf->Cell(120, 8, "Tempat                               : " . $bt->nama_lokasi, 0, 1, 'L');
            $pdf->setX(30);
            $pdf->Cell(120, 5, "Nama Kegiatan                  : " . $bt->nama_kegiatan, 0, 1, 'L');
            $pdf->SetLineWidth(0.6);
            $pdf->Line(16, 85, 210 - 10, 85);
            $pdf->setXY(30, 88);
            $pdf->Cell(100, 8, "A. Daftar Tamu", 0, 1, "L");
            $pdf->SetLeftMargin(32);
            $pdf->Cell(10, 5, '', 0, 1);
            $pdf->SetFont('Times', 'B', 12);
            $pdf->Cell(10, 10, 'No', 1, 0, 'C');
            $pdf->Cell(50, 10, 'Nama', 1, 0, 'C');
            $pdf->Cell(60, 10, 'Instansi/Jabatan', 1, 0, 'C');
            $pdf->Cell(48, 10, 'No. Handphone', 1, 0, 'C');
            // $pdf->Cell(50, 10, 'Tanda Tangan', 1, 0, 'C');
            $pdf->Ln();
            $i = 1;
            $pdf->SetFont('Times', '', 10);
            foreach (json_decode($bt->id_pengunjung) as $pengunjung) {
                $tamu = $this->dataHandle->get('m_pengunjung', ['id_pengunjung' => $pengunjung])->row();
                $pdf->Cell(10, 10, $i++, 1, 0, 'C');
                $pdf->Cell(50, 10, $tamu->nama, 1, 0, 'L');
                $pdf->Cell(60, 10, $tamu->instansi . "/" . $tamu->jabatan, 1, 0, 'L');
                $pdf->Cell(48, 10, $tamu->no_hp, 1, 0, 'L');
                // $pdf->Cell(40, 10, 'Tanda Tangan', 1, 0, 'C');
                $pdf->Ln();
            }
            $pdf->setX(30);
            $pdf->SetFont('Times', '', 12);
            $pdf->Cell(100, 8, "B. Materi Bahasan", 0, 1, "L");
            $pdf->Ln();
            // $pdf->setXY(35, 138);
            $pdf->setY($pdf->GetY() - 8);
            $pdf->WriteHTML($bt->pembahasan);
            $pdf->Ln();
            $pdf->setX(30);
            $pdf->SetFont('Times', '', 12);
            $pdf->Cell(100, 8, "C. Dokumentasi", 0, 1, "L");
            foreach (json_decode($bt->dokumentasi) as $dokumentasi) {
                $pdf->Image(FCPATH . 'assets/images/foto/' . $dokumentasi, null, null, 120);
                $pdf->Ln();
            }

            $pdf->Image(FCPATH . "/assets/images/qrcode/" . $nama_file . '.png', 7, 325, 20);
            $pdf->SetLeftMargin(15);
        }
        $pdfname = FCPATH . "assets/images/laporan/" . $nama_file;
        $pdf->Output('F', $pdfname . '.pdf', true);
        $pdf->Output('', $pdfname . '.pdf', false);
    }
}
