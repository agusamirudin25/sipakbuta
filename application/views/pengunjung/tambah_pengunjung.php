<div class="page-header">
    <h4 class="page-title">Tambah Data Pengunjung</h4>
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
            <a href="<?= base_url('pengunjung') ?>">Pengunjung</a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Tambah Data Pengunjung</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-4">
        <div class="card card-post card-round">
            <div class="card-header">
                <div class="card-title">Paraf Pengunjung</div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <div id="defaultSignature" class="col-md-12 kbw-signature">
                    </div>
                    <button id="clearSignature" class="btn btn-sm btn-danger">Bersihkan</button>
                </div>
                <div class="separator-solid"></div>
            </div>
        </div>

    </div>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Data Pengunjung</div>
            </div>
            <form method="post" autocomplete="off" id="submit">
                <textarea id="signatureJSON" rows="5" cols="30" readonly class="ui-state-active" style="display:none;" name="paraf"></textarea>
                <div class="card-body">
                    <div class="form-group">
                        <label for="nama">Nama Lengkap</label>
                        <input type="text" class="form-control input-pill" id="nama" placeholder="Nama Lengkap" name="nama" required>
                    </div>
                    <div class="form-group">
                        <label for="jabatan">Jabatan</label>
                        <input type="text" class="form-control input-pill" id="jabatan" placeholder="Jabatan" name="jabatan" required>
                    </div>
                    <div class="form-group">
                        <label for="instansi">Instansi</label>
                        <input type="text" class="form-control input-pill" id="instansi" placeholder="Instansi" name="instansi" required>
                    </div>
                    <div class="form-group">
                        <label for="no_hp">No. HP</label>
                        <input type="text" class="form-control input-pill" id="no_hp" placeholder="08xxxxxxxx" name="no_hp" required>
                    </div>

                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit" id="simpan">
                        Simpan
                    </button>
                    <a href="<?= base_url('pengunjung') ?>" class="btn btn-danger">Kembali</a>
                </div>

        </div>
        </form>
    </div>
</div>
<script src="<?= base_url() ?>assets/js/core/jquery.3.2.1.min.js"></script>
<script>
    $(document).ready(function() {
        $("#no_hp").keypress(function(e) {
            var keyCode = e.keyCode || e.which;
            var regex = /^[0-9\s]+$/;
            var isValid = regex.test(String.fromCharCode(keyCode));
            return isValid;
        });
        $('#submit').submit(function(e) {
            e.preventDefault();
            $.ajax({
                url: '<?= site_url(); ?>pengunjung/prosesTambahPengunjung',
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