<div class="page-header">
    <h4 class="page-title">Rekapitulasi Firealarm</h4>
    <ul class="breadcrumbs">
        <li class="nav-home">
            <a href="<?= base_url() ?>">
                <i class="flaticon-home"></i>
            </a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Rekap Bulanan Firealarm</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        <form method="post" id="submit">
            <div class="card card-post card-round">
                <div class="card-header">
                    <div class="card-title">Lihat Rekapitulasi Firealarm</div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="bulan">Bulan</label>
                                <select class="form-control input-pill" id="bulan" name="bulan" required>
                                    <option value="">- Pilih Bulan -</option>
                                    <option value="1">Januari</option>
                                    <option value="2">Februari</option>
                                    <option value="3">Maret</option>
                                    <option value="4">April</option>
                                    <option value="5">Mei</option>
                                    <option value="6">Juni</option>
                                    <option value="7">Juli</option>
                                    <option value="8">Agustus</option>
                                    <option value="9">September</option>
                                    <option value="10">Oktober</option>
                                    <option value="11">November</option>
                                    <option value="12">Desember</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="tahun">Tahun</label>
                                <select class="form-control input-pill" id="tahun" name="tahun" required>
                                    <option value="">- Pilih Bulan -</option>
                                    <?php $tahun_ini = date("Y");
                                    $akhir = 1990;
                                    for ($i = $tahun_ini; $i >= $akhir; $i--) : ?>
                                        <option value="<?= $i; ?>"><?= $i; ?></option>
                                    <?php endfor; ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4">
                            <button class="btn btn-success btn-lg" type="button" id="cari">
                                <i class="fa fa-search"></i>
                                Cari
                            </button>
                            <a href="#" id="link-excel">
                                <button type="button" class="btn btn-success btn-lg" id="excel" disabled> <i class="fa fa-file-excel"></i> Excel</button>
                            </a>
                            <a href="#" id="link-pdf">
                                <button type="button" class="btn btn-warning btn-lg" id="pdf" disabled> <i class="fa fa-file-pdf"></i> Pdf</button>
                            </a>
                        </div>
                    </div>
                </div>
        </form>
    </div>
</div>
<div class="col-md-12">
    <div class="card card-post card-round">
        <div class="card" id="isi" hidden>
            <h2 id="judul" class="text-center mt-3">DATA REKAPITULASI MONITORING FIREALARM BULAN </h2>
            <table class="table mt-2">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">No Firealarm</th>
                        <th scope="col">Zona/Titik (Penempatan)</th>
                        <th scope="col">Type (Merk)</th>
                        <th scope="col">Jenis</th>
                        <th scope="col">Kondisi</th>
                        <th scope="col">Keterangan</th>
                        <th scope="col">Petugas Pelaksana</th>
                        <th scope="col">Tanggal Periksa</th>
                    </tr>
                </thead>
                <tbody id="target">

                </tbody>
            </table>
        </div>
    </div>
</div>
<script>
    $(document).ready(function() {
        $('#cari').click(function() {
            let month = $('#bulan').val();
            let year = $('#tahun').val();
            if (month == 0) {
                error_alert("<?= $title ?>", "Bulan tidak boleh kosong");
                return false;
            }
            if (year == 0) {
                error_alert("<?= $title ?>", "Tahun tidak boleh kosong");
                return false;
            }
            let bulan = '';
            if (month == 1) {
                bulan = 'JANUARI';
            } else if (month == 2) {
                bulan = 'FEBRUARI';
            } else if (month == 3) {
                bulan = 'MARET';
            } else if (month == 4) {
                bulan = 'APRIL';
            } else if (month == 5) {
                bulan = 'MEI';
            } else if (month == 6) {
                bulan = 'JUNI';
            } else if (month == 7) {
                bulan = 'JULI';
            } else if (month == 8) {
                bulan = 'AGUSTUS';
            } else if (month == 9) {
                bulan = 'SEPTEMBER';
            } else if (month == 10) {
                bulan = 'OKTOBER';
            } else if (month == 11) {
                bulan = 'NOVEMBER';
            } else if (month == 12) {
                bulan = 'DESEMBER';
            }

            $.ajax({
                type: 'post',
                url: "<?= site_url() ?>Admin/rekapBulan",
                data: "bulan=" + month + "&tahun=" + year + "&code=2",
                cache: false,
                dataType: "json",
                success: function(data) {
                    $('#target').html(data.html);
                    if (data.kondisi == 1) {
                        $('#pdf').removeAttr('disabled');
                        $('#excel').removeAttr('disabled');
                        $('#link-pdf').attr("href", "<?= base_url() ?>pdf/" + month + "/" + year + "/2");
                        $('#link-excel').attr("href", "<?= base_url() ?>excel/" + month + "/" + year + "/2");
                        $('#link-pdf').attr("target", "_blank");
                        $('#link-excel').attr("target", "_blank");
                    }
                }
            });
            $('#judul').html('<b>DATA REKAPITULASI MONITORING FIREALARM' + '<br>' + 'BULAN ' + bulan + ' TAHUN ' + year + '</b>');
            $('#isi').removeAttr('hidden');
        });
    });
</script>