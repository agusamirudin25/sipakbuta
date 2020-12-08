<div class="page-header">
    <h4 class="page-title">Tambah Data Bukutamu</h4>
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
            <a href="<?= base_url('bukutamu') ?>">Bukutamu</a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Tambah Data Bukutamu</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Data Bukutamu</div>
            </div>
            <form method="post" autocomplete="off" id="submit" enctype="multipart/form-data">
                <div class="card-body">
                    <div class="form-group">
                        <label for="agenda">Nama Kegiatan</label>
                        <select class="form-control input-pill" id="agenda" name="agenda">
                            <option value="">- Pilih Agenda -</option>
                            <?php foreach ($agenda as $row) : ?>
                                <option value="<?= $row->id_agenda ?>"><?= $row->nama_kegiatan ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="id_pengunjung">Pengunjung</label>
                        <select class="form-control input-pill" id="pengunjung" name="pengunjung[]" required multiple="multiple">
                            <?php foreach ($pengunjung as $row) : ?>
                                <option value="<?= $row->id_pengunjung ?>"><?= $row->nama ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="pembahasan">Pembahasan</label>
                        <textarea name="pembahasan" class="form-control input-pill" id="pembahasan" cols="30" rows="10"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="dokumentasi">Dokumentasi <span class="text-warning"> (boleh lebih dari 1 dokumentasi)</span></label>
                        <input type="file" name="dokumentasi[]" class="dropify" data-height="200" accept="image/*" data-allowed-file-extensions="jpg png jpeg" multiple="multiple">
                    </div>
                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit" id="simpan">
                        Simpan
                    </button>
                    <a href="<?= base_url('bukutamu') ?>" class="btn btn-danger">Kembali</a>
                </div>

        </div>
        </form>
    </div>
</div>
<script src="<?= base_url() ?>assets/js/core/jquery.3.2.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
<script>
    $(document).ready(function() {
        $('#agenda').select2();
        $('#pengunjung').select2();
        $('#submit').submit(function(e) {
            e.preventDefault();
            $.ajax({
                url: '<?= site_url(); ?>bukutamu/simpanBukutamu',
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