<div class="page-header">
    <h4 class="page-title">Tambah Data Ketersediaan Firealarm</h4>
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
            <a href="<?= base_url('firealarm') ?>">Ketersediaan Filealarm</a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Tambah Data</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Data Ketersediaan Filealarm</div>
            </div>
            <form method="post" autocomplete="off" id="submit">
                <div class="card-body">
                    <div class="form-group">
                        <label for="zona">Zona</label>
                        <input type="number" class="form-control input-pill" id="zona" placeholder="masukkan zona" name="zona" required>
                    </div>
                    <div class="form-group">
                        <label for="penempatan">Penempatan</label>
                        <input type="text" class="form-control input-pill" id="penempatan" placeholder="penempatan" name="penempatan" required>
                    </div>
                    <div class="form-group">
                        <label for="titik">Titik</label>
                        <input type="number" class="form-control input-pill" id="titik" placeholder="Titik ke-" name="titik" required>
                    </div>
                    <div class="form-group">
                        <label for="type">Type</label>
                        <input type="text" class="form-control input-pill" id="type" placeholder="Type" name="type" required>
                    </div>
                    <div class="form-group">
                        <label for="merk">Merk</label>
                        <input type="text" class="form-control input-pill" id="merk" placeholder="Merk" name="merk" required>
                    </div>
                    <div class="form-group">
                        <label for="jabatan">Jenis Sensor</label>
                        <select class="form-control input-pill" id="jenis_sensor" name="jenis_sensor" required>
                            <option value="">- Pilih Jenis -</option>
                            <option value="RATE OF RISE HEAT DETECTOR">Rate of Rise Heat Detector</option>
                            <option value="FIX TEMPERATURE">Fix Temperature</option>
                            <option value="SMOKE DETECTOR">Smoke Detector</option>
                            <option value="FLAME DETECTOR">Flame Detector</option>
                            <option value="GAS DETECTOR">Gas Detector</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tanggal_pasang">Tanggal Pasang</label>
                        <input type="date" class="form-control input-pill" id="tanggal_pasang" name="tanggal_pasang" required>
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
                url: '<?= site_url(); ?>main/prosesTambahFirealarm',
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

    });
</script>