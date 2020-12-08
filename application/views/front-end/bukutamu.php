<div class="site-section bg-primary-light">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-7 mx-auto text-center">
                <h2 class="section-heading">BUKU TAMU</h2>
                <h6 class="mb-4"><?= $hari . ', ' . $tanggal ?></h6>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Form Tambah Tamu</div>
                    </div>
                    <form action="" method="post">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="nama">Nama Lengkap</label>
                                <input type="text" class="form-control input-pill" id="nama" placeholder="Nama Lengkap" name="nama" required>
                            </div>
                        </div>
                    </form>
                    <div class="card-action">
                        <button class="btn btn-success" type="submit" id="simpan">
                            Simpan
                        </button>
                        <a href="<?= base_url('buku-tamu') ?>" class="btn btn-danger">Kembali</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Data Tamu</div>
                    </div>
                    <div class="card-body">
                        Hai
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>