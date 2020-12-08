<div class="page-header">
    <h4 class="page-title">Ubah Data Ketersediaan APAR</h4>
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
            <a href="<?= base_url('apar') ?>">Ketersediaan APAR</a>
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
                <div class="card-title">Data Ketersediaan APAR</div>
            </div>
            <form method="post" autocomplete="off" id="submit">
                <div class="card-body">
                    <div class="form-group">
                        <label for="zona">Zona</label>
                        <input type="hidden" class="form-control input-pill" id="nomor_apar" name="nomor_apar" value="<?= $apar->nomor_apar ?>">
                        <input type="number" class="form-control input-pill" id="zona" placeholder="masukkan zona" name="zona" required value="<?= $apar->zona ?>">
                    </div>
                    <div class="form-group">
                        <label for="penempatan">Penempatan</label>
                        <input type="text" class="form-control input-pill" id="penempatan" placeholder="penempatan" name="penempatan" required value="<?= $apar->penempatan ?>">
                    </div>
                    <div class="form-group">
                        <label for="type">Type</label>
                        <input type="text" class="form-control input-pill" id="type" placeholder="Type" name="type" required value="<?= $apar->type ?>">
                    </div>
                    <div class="form-group">
                        <label for="merk">Merk</label>
                        <input type="text" class="form-control input-pill" id="merk" placeholder="Merk" name="merk" required value="<?= $apar->merk ?>">
                    </div>
                    <div class="form-group">
                        <label for="jabatan">Jenis Isi</label>
                        <select class="form-control input-pill" id="jenis_isi" name="jenis_isi" required>
                            <option value="">- Pilih Jenis -</option>
                            <option value="DRY CHEMICAL POWDER" <?= ($apar->jenis_isi == 'DRY CHEMICAL POWDER') ? 'selected' : '' ?>>Dry Chemical Powder</option>
                            <option value="CARBON DIOXIDE" <?= ($apar->jenis_isi == 'CARBON DIOXIDE') ? 'selected' : '' ?>>Carbon Dioxide (CO2)</option>
                            <option value="GAS CAIR NON HALLON" <?= ($apar->jenis_isi == 'GAS CAIR NON HALLON') ? 'selected' : '' ?>>Gas cair non hallon</option>
                            <option value="FOAM" <?= ($apar->jenis_isi == 'FOAM') ? 'selected' : '' ?>>Foam</option>
                            <option value="WATER" <?= ($apar->jenis_isi == 'WATER') ? 'selected' : '' ?>>Water</option>
                            <option value="WET CHEMICALS" <?= ($apar->jenis_isi == 'WET CHEMICALS') ? 'selected' : '' ?>>Wet Chemicals</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="berat">Berat</label>
                        <input type="number" class="form-control input-pill" id="berat" placeholder="Kg" name="berat" required value="<?= $apar->berat ?>">
                    </div>
                    <div class="form-group">
                        <label for="tanggal_perolehan">Tanggal Perolehan</label>
                        <input type="date" class="form-control input-pill" id="tanggal_perolehan" name="tanggal_perolehan" required value="<?= $apar->tanggal_perolehan ?>">
                    </div>
                    <div class="form-group">
                        <label for="tanggal_kadaluwarsa">Tanggal Kadaluarsa</label>
                        <input type="text" class="form-control input-pill" id="tanggal_kadaluwarsa" placeholder="5 tahun setelah tanggal perolehan" name="tanggal_kadaluwarsa" readonly value="<?= $apar->tanggal_kadaluwarsa ?>">
                    </div>
                    <div class="form-group">
                        <label for="dibuat_oleh">Dibuat Oleh</label>
                        <input type="text" class="form-control input-pill" id="dibuat_oleh" placeholder="dibuat_oleh" name="dibuat_oleh" readonly value="<?= $apar->nama ?>">
                    </div>
                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit" id="simpan">
                        Simpan
                    </button>
                    <a href="<?= base_url('apar') ?>" class="btn btn-danger">Kembali</a>
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
                url: '<?= site_url(); ?>main/prosesEditApar',
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