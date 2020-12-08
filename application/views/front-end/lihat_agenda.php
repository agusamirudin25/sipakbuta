<div class="site-section bg-primary-light">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-7 mx-auto text-center">
                <h2 class="section-heading">AGENDA KEGIATAN</h2>
                <h6 class="mb-4"><?= $hari . ', ' . $tanggal ?></h6>
            </div>
        </div>
        <div class="row">
            <?php foreach ($agenda as $data) : ?>
                <div class="col-lg-12 mb-4">
                    <a href="<?= base_url('tambah-buku-tamu/' . enc($data->id_agenda)) ?>" class=" symptom d-flex">
                        <div class="d-flex">
                            <div class="img">
                                <img src="<?= base_url() ?>assets/front-end/images/e-sign.png" alt="Image" class="img-fluid">
                            </div>
                            <div class="text">
                                <h3><?= $data->hari . ', ' . tgl_indo($data->tanggal) ?></h3>
                                <p> <?= $data->nama_kegiatan ?>. </p>
                            </div>
                        </div>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</div>