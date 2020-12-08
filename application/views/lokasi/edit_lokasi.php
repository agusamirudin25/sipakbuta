<div class="page-header">
    <h4 class="page-title">Ubah Data Lokasi</h4>
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
            <a href="<?= base_url('lokasi') ?>">Lokasi</a>
        </li>
        <li class="separator">
            <i class="flaticon-right-arrow"></i>
        </li>
        <li class="nav-item">
            <a href="#">Ubah Data Lokasi</a>
        </li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Data Lokasi</div>
            </div>
            <form method="post" autocomplete="off" id="submit">
                <div class="card-body">
                    <div class="form-group">
                        <label for="nama">Nama Lokasi</label>
                        <input type="text" class="form-control input-pill" id="nama" placeholder="Nama Lokasi" name="nama_lokasi" value="<?= $lokasi->nama_lokasi ?>" required>
                    </div>

                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit" id="simpan">
                        Simpan
                    </button>
                    <a href="<?= base_url('lokasi') ?>" class="btn btn-danger">Kembali</a>
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
                url: '<?= site_url('lokasi/prosesEditLokasi/' . enc($lokasi->id_lokasi)); ?>',
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