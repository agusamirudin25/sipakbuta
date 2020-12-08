<div class="page-header">
    <h4 class="page-title">Ubah Data Ketersediaan firealarm</h4>
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
            <a href="<?= base_url('firealarm') ?>">Ketersediaan firealarm</a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Ubah Data</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Data Ketersediaan firealarm</div>
            </div>
            <form method="post" autocomplete="off" id="submit">
                <div class="card-body">
                    <div class="form-group">
                        <label for="zona">Zona</label>
                        <input type="hidden" class="form-control input-pill" id="no_firealarm" name="no_firealarm" value="<?= $firealarm->no_firealarm ?>">
                        <input type="number" class="form-control input-pill" id="zona" placeholder="masukkan zona" name="zona" required value="<?= $firealarm->zona ?>">
                    </div>
                    <div class="form-group">
                        <label for="penempatan">Penempatan</label>
                        <input type="text" class="form-control input-pill" id="penempatan" placeholder="penempatan" name="penempatan" required value="<?= $firealarm->penempatan ?>">
                    </div>
                    <div class="form-group">
                        <label for="titik">Titik</label>
                        <input type="number" class="form-control input-pill" id="titik" placeholder="Titik ke-" name="titik" required value="<?= $firealarm->titik ?>">
                    </div>
                    <div class="form-group">
                        <label for="type">Type</label>
                        <input type="text" class="form-control input-pill" id="type" placeholder="Type" name="type" required value="<?= $firealarm->type ?>">
                    </div>
                    <div class="form-group">
                        <label for="merk">Merk</label>
                        <input type="text" class="form-control input-pill" id="merk" placeholder="Merk" name="merk" required value="<?= $firealarm->merk ?>">
                    </div>
                    <div class="form-group">
                        <label for="jabatan">Jenis Sensor</label>
                        <select class="form-control input-pill" id="jenis_sensor" name="jenis_sensor" required>
                            <option value="">- Pilih Jenis -</option>
                            <option value="RATE OF RISE HEAT DETECTOR" <?= ($firealarm->jenis_sensor == "RATE OF RISE HEAT DETECTOR") ? 'selected' : '' ?>>Rate of Rise Heat Detector</option>
                            <option value="FIX TEMPERATURE" <?= ($firealarm->jenis_sensor == "FIX TEMPERATURE") ? 'selected' : '' ?>>Fix Temperature</option>
                            <option value="SMOKE DETECTOR" <?= ($firealarm->jenis_sensor == "SMOKE DETECTOR") ? 'selected' : '' ?>>Smoke Detector</option>
                            <option value="FLAME DETECTOR" <?= ($firealarm->jenis_sensor == "FLAME DETECTOR") ? 'selected' : '' ?>>Flame Detector</option>
                            <option value="GAS DETECTOR" <?= ($firealarm->jenis_sensor == "GAS DETECTOR") ? 'selected' : '' ?>>Gas Detector</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="tanggal_pasang">Tanggal Pasang</label>
                        <input type="date" class="form-control input-pill" id="tanggal_pasang" name="tanggal_pasang" required value="<?= $firealarm->tanggal_pasang ?>">
                    </div>
                    <div class="form-group">
                        <label for="dibuat_oleh">Dibuat Oleh</label>
                        <input type="text" class="form-control input-pill" id="dibuat_oleh" placeholder="dibuat_oleh" name="dibuat_oleh" readonly value="<?= $firealarm->nama ?>">
                    </div>
                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit" id="simpan">
                        Simpan
                    </button>
                    <a href="<?= base_url('firealarm') ?>" class="btn btn-danger">Kembali</a>
                </div>

        </div>
        </form>
    </div>
</div>
<script src="<?= base_url() ?>assets/js/core/jquery.3.2.1.min.js"></script>
<script>
    $(document).ready(function() {
        $('#submit').submit(function(e) {
            e.preventDefault();

            $.ajax({
                url: '<?= site_url(); ?>main/prosesEditFirealarm',
                type: "post",
                data: new FormData(this),
                processData: false,
                contentType: false,
                cache: false,
                async: false,
                dataType: "json",
                success: function(response) {
                    if (response.status == 1) {
                        success_alert(response.title, response.msg, response.page);
                    } else {
                        error_alert(response.title, response.msg);
                    }
                }
            });
        });

        $('#tanggal_perolehan').change(function(e) {
            e.preventDefault();
            let input = $('#tanggal_perolehan').val();
            let tahun = new Date(input).getFullYear();
            let hasil = (tahun + 5) + '-' + (new Date(input).getMonth() + 1) + '-' +
                new Date(input).getDate();
            $('#tanggal_kadaluwarsa').val(hasil);
        });
    });
</script>