<div class="page-header">
    <h4 class="page-title">Tambah Laporan</h4>
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
            <a href="<?= base_url('laporan') ?>">Laporan</a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Tambah Laporan</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Laporan</div>
            </div>
            <form method="post" autocomplete="off" id="submit">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="bulan">Bulan</label>
                            <select class="form-control input-pill" id="bulan" name="bulan" required>
                                <option value="">- Pilih Bulan -</option>
                                <option value="01">Januari</option>
                                <option value="02">Februari</option>
                                <option value="03">Maret</option>
                                <option value="04">April</option>
                                <option value="05">Mei</option>
                                <option value="06">Juni</option>
                                <option value="07">Juli</option>
                                <option value="08">Agustus</option>
                                <option value="09">September</option>
                                <option value="10">Oktober</option>
                                <option value="11">November</option>
                                <option value="12">Desember</option>
                            </select>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="tahun">Tahun</label>
                            <select class="form-control input-pill" id="tahun" name="tahun" required>
                                <option value="">- Pilih Tahun -</option>
                                <?php $tahun_ini = date("Y");
                                $akhir = 1990;
                                for ($i = $tahun_ini; $i >= $akhir; $i--) : ?>
                                    <option value="<?= $i; ?>"><?= $i; ?></option>
                                <?php endfor; ?>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit" id="cari">
                        Cari
                    </button>
                    <a href="<?= base_url('laporan') ?>" class="btn btn-danger">Kembali</a>
                    <a href="#" id="link-pdf" class="btn btn-primary" title="pdf" target="_blank"><i class="fas fa-file-pdf"></i> Export Pdf</a>
                    <div class=" row mt-3">
                        <div class="col-md-12" id="isi">

                        </div>
                    </div>
                </div>

        </div>
        </form>
    </div>
</div>
<script src="<?= base_url() ?>assets/js/core/jquery.3.2.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
<script src="https://cdn.ckeditor.com/4.15.1/basic/ckeditor.js"></script>
<script>
    $(document).ready(function() {
        $('#bulan').select2();
        $('#tahun').select2();
        $('#link-pdf').hide();
        $('#submit').submit(function(e) {
            let month = $('#bulan').val();
            let year = $('#tahun').val();
            e.preventDefault();
            var data = new FormData(this);
            $.ajax({
                url: '<?= site_url(); ?>laporan/prosesTambahLaporan',
                type: "post",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                async: false,
                dataType: "json",
                success: function(response) {
                    if (response.status == 1) {
                        $('#link-pdf').show();
                        $('#isi').html(response.html);
                        console.log(month);
                        $('#link-pdf').attr("href", "<?= base_url() ?>pdf/" + month + "/" + year);
                    } else {
                        $('#link-pdf').hide();
                        $('#isi').html(response.html);
                    }
                }
            });
        });
    });
</script>