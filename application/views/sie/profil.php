<div class="page-header">
    <h4 class="page-title">Profil</h4>
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
            <a href="<?= base_url('profil') ?>">Pengguna</a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Ubah Profil</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-4">
        <div class="card card-post card-round">
            <div class="card-header">
                <div class="card-title">Paraf Petugas</div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <span class="text-info">*Paraf Petugas sebelumnya</span>
                    <img class="card-img-top" src="<?= base_url() ?>assets/images/paraf/<?= $petugas->paraf; ?>" alt="Logo Aplikasi" style="width: 220px; margin: auto; padding-top: 20px;">
                    <div id="defaultSignature" class="col-md-12 kbw-signature">
                    </div>
                    <button id="clearSignature" class="btn btn-sm btn-danger">Bersihkan</button><br>
                    <span class="text-danger">*Kosongkan jika tidak mengubah paraf</span>
                </div>
                <div class="separator-solid"></div>
            </div>
        </div>

    </div>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Data Petugas</div>
            </div>
            <form method="post" autocomplete="off" id="submit">
                <textarea id="signatureJSON" rows="5" cols="30" readonly class="ui-state-active" style="display:none;" name="paraf"></textarea>
                <div class="card-body">
                    <div class="form-group">
                        <label for="nip">NIP</label>
                        <input type="text" class="form-control input-pill" id="nip" placeholder="NIP" name="nip" value="<?= $petugas->nip ?>" readonly>
                    </div>
                    <div class="form-group">
                        <label for="nama">Nama Lengkap</label>
                        <input type="text" class="form-control input-pill" id="nama" placeholder="Nama Lengkap" name="nama" value="<?= $petugas->nama ?>" required>
                    </div>
                    <div class="form-group">
                        <label for="no_sap">Nomor SAP</label>
                        <input type="text" class="form-control input-pill" id="no_sap" placeholder="NO SAP" name="no_sap" value="<?= $petugas->no_sap ?>" required>
                    </div>
                    <div class="form-group">
                        <label>Jenis Kelamin</label><br>
                        <label class="form-radio-label">
                            <input class="form-radio-input" type="radio" name="jenis_kelamin" value="L" <?= ($petugas->jenis_kelamin == 'L' ? 'checked' : null) ?>>
                            <span class="form-radio-sign"> Laki - laki</span>
                        </label>
                        <label class="form-radio-label ml-3">
                            <input class="form-radio-input" type="radio" name="jenis_kelamin" value="P" <?= ($petugas->jenis_kelamin == 'P' ? 'checked' : null) ?>>
                            <span class="form-radio-sign"> Perempuan</span>
                        </label>
                    </div>

                    <div class="form-group">
                        <label for="bagian">Jabatan</label>
                        <input type="text" class="form-control input-pill" id="bagian" placeholder="Bagian" name="bagian" readonly value="<?= $petugas->jabatan ?>" disabled>
                    </div>
                    <div class="form-group">
                        <label for="bagian">Bagian</label>
                        <input type="text" class="form-control input-pill" id="bagian" placeholder="Bagian" name="bagian" readonly value="<?= $petugas->bagian ?>" disabled>
                    </div>
                    <div class="form-group">
                        <label for="katasandi">Kata Sandi</label>
                        <input type="password" class="form-control input-pill" id="katasandi" placeholder="katasandi" name="katasandi">
                        <span class="text-danger">*Kosongkan jika tidak mengubah katasandi</span>
                    </div>
                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit" id="simpan">
                        Simpan
                    </button>
                    <a href="<?= base_url('user') ?>" class="btn btn-danger">Kembali</a>
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
                url: '<?= site_url(); ?>user/prosesEditProfil',
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