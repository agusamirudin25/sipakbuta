<div class="page-header">
    <h4 class="page-title">Konfigurasi</h4>
</div>
<div class="row">
    <div class="col-md-4">
        <form method="post" autocomplete="off" id="submit" enctype="multipart/form-data">
            <div class="card card-post card-round">
                <img class="card-img-top" src="<?= base_url() ?>assets/images/logo/<?= $logo; ?>" alt="Logo Aplikasi" style="width: 220px; margin: auto; padding-top: 20px;">
                <div class="card-body">
                    <div class="form-group">
                        <input type="file" name="logo" class="dropify" data-height="200" accept="image/*" data-allowed-file-extensions="jpg png jpeg">
                        <span class="text-danger">*Kosongkan jika tidak mengubah logo</span>
                    </div>
                    <div class="separator-solid"></div>
                </div>
            </div>
    </div>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Konfigurasi Aplikasi</div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="nama_perusahaan">Nama Perusahaan</label>
                    <input type="text" class="form-control input-pill" id="nama_perusahaan" placeholder="Nama Perusahaan" name="nama_perusahaan" value="<?= $konfigurasi[0]; ?>" required>
                </div>
                <div class="form-group">
                    <label for="nama_aplikasi">Nama Aplikasi</label>
                    <input type="text" class="form-control input-pill" id="nama_aplikasi" placeholder="Nama Aplikasi" name="nama_aplikasi" value="<?= $konfigurasi[1]; ?>" required>
                </div>
                <div class="form-group">
                    <label for="deskripsi">Deskripsi Aplikasi</label>
                    <textarea class="form-control" id="deskripsi" rows="2" name="deskripsi"><?= $konfigurasi[2]; ?></textarea>
                </div>
                <div class="form-group">
                    <label for="alamat">Alamat</label>
                    <textarea class="form-control" id="alamat" rows="3" name="alamat"><?= $konfigurasi[4]; ?></textarea>
                </div>
            </div>
            <div class="card-action">
                <button class="btn btn-success" type="submit" id="simpan">
                    Simpan
                </button>
                <a href="<?= base_url('main') ?>" class="btn btn-danger">Kembali</a>
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
                url: '<?= site_url(); ?>main/ubahKonfigurasi',
                type: "post",
                data: new FormData(this),
                processData: false,
                contentType: false,
                cache: false,
                async: false,
                dataType: "json",
                success: function(response) {
                    if (response.status_konfigurasi == 1) {
                        success_alert(response.title, response.msg, response.page);
                    } else {
                        error_alert(response.title, response.msg);
                    }
                }
            });
        });
    });
</script>