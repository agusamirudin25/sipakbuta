<div class="page-header">
    <h4 class="page-title">Ubah Monitoring APAR</h4>
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
            <a href="<?= base_url('monitoring-apar') ?>">Monitoring APAR</a>
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
    <div class="col-md-4">
        <form method="post" autocomplete="off" id="submit" enctype="multipart/form-data">
            <div class="card card-post card-round">
                <div class="card-header">
                    <div class="card-title">Data APAR</div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="nomor_apar">Nomor APAR</label>
                        <select class="form-control input-pill" id="nomor_apar" name="nomor_apar" required>
                            <option value="">- Pilih Nomor APAR -</option>
                            <?php foreach ($apar as $row) : ?>
                                <option value="<?= $row->nomor_apar; ?>" <?= ($row->nomor_apar == $mon_apar->nomor_apar) ? 'selected' : null ?>><?= $row->nomor_apar; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="zona">Zona (Penempatan)</label>
                        <input type="hidden" class="form-control input-pill" id="id_pengecekan" placeholder="-" name="id_pengecekan" readonly value="<?= $mon_apar->id_pengecekan ?>">
                        <input type="text" class="form-control input-pill" id="zona" placeholder="-" name="zona" readonly value="<?= $info->zona . ' (' . $info->penempatan . ')' ?>">
                    </div>
                    <div class="form-group">
                        <label for="penempatan">Type (Merk)</label>
                        <input type="text" class="form-control input-pill" id="type" placeholder="-" name="penempatan" readonly value="<?= $info->type . ' (' . $info->merk . ')' ?>">
                    </div>
                    <div class=" form-group">
                        <label for="penempatan">Jenis (Berat)</label>
                        <input type="text" class="form-control input-pill" id="jenis" placeholder="-" name="penempatan" readonly value="<?= $info->jenis_isi . ' (' . $info->berat . 'Kg)' ?>">
                    </div>
                    <div class=" form-group">
                        <label for="refill">Tanggal Refill Sebelumnya</label>
                        <input type="date" class="form-control input-pill" id="refill" placeholder="Kg" name="refill" required value="<?= $mon_apar->tanggal_refill_sebelumnya ?>">
                    </div>
                    <div class=" form-group">
                        <label for="timbangan">Berat Sekarang</label>
                        <input type="number" class="form-control input-pill" id="timbangan" placeholder="Kg" name="timbangan" required value="<?= $mon_apar->timbangan ?>">
                    </div>
                    <div class=" form-group ">
                        <label for=" foto">Foto</label>
                        <input type="file" class="form-control dropify" data-height="200" accept="image/*" data-allowed-file-extensions="jpg png jpeg" id="foto" name="foto[]" multiple>
                        <span class="text-danger">*Kosongkan apabila tidak mengganti foto</span>
                    </div>
                    <div class="separator-solid"></div>
                </div>
            </div>
    </div>
    <div class="col-md-8 pl-md-0">
        <div class="card card-pricing">
            <div class="card-header">
                <div class="card-title">Monitoring APAR</div>
                <div class="row">
                    <div class="col-md-6">
                        <table class="table mt-3 text-left">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="rating">
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <input type="radio" id="c1" disabled checked>
                                            <label class="stario">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <p style="margin: auto;">sangat tidak baik/rusak</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="rating">
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <input type="radio" id="c2" disabled checked>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <p style="margin: auto;">tidak baik</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="rating">
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <input type="radio" id="c3" disabled checked>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <p style="margin: auto;">cukup</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="rating">
                                            <label class="stario">☆</label>
                                            <input type="radio" id="c4" disabled checked>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <p style="margin: auto;">baik</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="rating">
                                            <input type="radio" id="c5" disabled checked>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                            <label class="stario">☆</label>
                                        </div>
                                    </td>
                                    <td>
                                        <p style="margin: auto;">sangat baik</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <ul class="specification-list">
                    <?php
                    $i = 0;
                    foreach ($mon_apar->pertanyaan as $kuesioner) : ?>
                        <li>
                            <span class="name-specification" style="font-size: 13px;"><?= $i + 1 . '. ' . $kuesioner ?></span>
                            <span class="status-specification">
                                <div class="rating">
                                    <input type="radio" name="r<?= $i + 1 ?>" value="5" id="r5<?= $i + 1 ?>" onclick="proses(<?= $i + 1 ?>,this);" <?= (json_decode($mon_apar->data)[$i] == 5) ? 'checked' : null ?>>
                                    <label class="star" for="r5<?= $i + 1 ?>">☆</label>
                                    <input type="radio" name="r<?= $i + 1 ?>" value="4" id="r4<?= $i + 1 ?>" onclick="proses(<?= $i + 1 ?>,this);" <?= (json_decode($mon_apar->data)[$i] == 4) ? 'checked' : null ?>>
                                    <label class="star" for="r4<?= $i + 1 ?>">☆</label>
                                    <input type="radio" name="r<?= $i + 1 ?>" value="3" id="r3<?= $i + 1 ?>" onclick="proses(<?= $i + 1 ?>,this);" <?= (json_decode($mon_apar->data)[$i] == 3) ? 'checked' : null ?>>
                                    <label class="star" for="r3<?= $i + 1 ?>">☆</label>
                                    <input type="radio" name="r<?= $i + 1 ?>" value="2" id="r2<?= $i + 1 ?>" onclick="proses(<?= $i + 1 ?>,this);" <?= (json_decode($mon_apar->data)[$i] == 2) ? 'checked' : null ?>>
                                    <label class="star" for="r2<?= $i + 1 ?>">☆</label>
                                    <input type="radio" name="r<?= $i + 1 ?>" value="1" id="r1<?= $i + 1 ?>" onclick="proses(<?= $i + 1 ?>, this);" <?= (json_decode($mon_apar->data)[$i] == 1) ? 'checked' : null ?>>
                                    <label class="star" for="r1<?= $i + 1 ?>">☆</label>
                                </div>
                                <input type="hidden" name="kuesioner[]" class="kuesioner" id="kuesioner<?= $i + 1 ?>" value="<?= json_decode($mon_apar->data)[$i] ?>">
                            </span>
                        </li>
                    <?php $i++;
                    endforeach; ?>
                    <li class="text-right">
                        <span class="text-success" id="kondisi" style="font-size: 18px; padding-right: 10px;">Kondisi : <?= $mon_apar->kondisi; ?> </span>
                    </li>
                </ul>
                <div class="form-group">
                    <label for="keterangan">Keterangan</label>
                    <textarea class="form-control" id="keterangan" rows="3" name="keterangan"><?= $mon_apar->keterangan ?></textarea>
                </div>
                <div class="form-group">
                    <label for="nip">Petugas pemeriksa</label>
                    <input type="text" class="form-control input-pill" id="nip" placeholder="-" name="nip" readonly value="<?= $mon_apar->nama ?>">
                </div>
                <label for="keterangan">Foto Dokumentasi lama</label>
                <div class="row">
                    <?php foreach (json_decode($mon_apar->foto) as $foto) : ?>
                        <div class="col-md-4">
                            <img class="card-img-top" src="<?= base_url() . 'assets/images/foto/' . $foto ?>" alt="Card image cap" style="margin-top: 10px">
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-success btn-black" type="submit" id="simpan">
                    Simpan
                </button>
                <a href="<?= base_url('monitoring-apar') ?>" class="btn btn-danger">Kembali</a>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $('#nomor_apar').select2();
        var $inp = $('#rating-input');
        $inp.rating({
            min: 0,
            max: 5,
            step: 1,
            size: 'sm',
            showClear: false
        });
        $('#nomor_apar').change(function(e) {
            var string = 'no_apar=' + $('#nomor_apar').val() + '&code=1';
            e.preventDefault();

            if ($('#nomor_apar').val() != "") {
                $.ajax({
                    type: 'POST',
                    url: "<?= base_url() ?>admin/setInfo",
                    data: string,
                    cache: false,
                    dataType: "json",
                    success: function(response) {
                        $('#zona').val(response.zona + ' (' + response.penempatan + ')');
                        $('#type').val(response.type + ' (' + response.merk + ')');
                        $('#jenis').val(response.jenis_isi + ' (' + response.berat + 'Kg)');
                    }
                });
            } else {
                $('#zona').val('-');
                $('#type').val('-');
                $('#jenis').val('-');
            }
        });

        $('#submit').submit(function(e) {
            e.preventDefault();

            $.ajax({
                url: '<?= site_url(); ?>admin/prosesEditMonitoringApar',
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

    function proses(no, id) {
        let value = $(id).val();
        $('#kuesioner' + no).val(value);
        let values = $("input[name='kuesioner[]']")
            .map(function() {
                return parseInt($(this).val());
            }).get();
        let jumlah = values.reduce((total, num) => {
            return total + num
        });
        let rata = Math.round(jumlah / values.length);
        let kondisi = 'Kondisi : -';
        let css = '';
        switch (rata) {
            case 1:
                kondisi = 'Kondisi : Sangat tidak baik/rusak';
                css = 'text-danger';
                break;
            case 2:
                kondisi = 'Kondisi : Tidak baik';
                css = 'text-danger';
                break;
            case 3:
                kondisi = 'Kondisi : Cukup';
                css = 'text-warning';
                break;
            case 4:
                kondisi = 'Kondisi : Baik';
                css = 'text-success';
                break;
            case 5:
                kondisi = 'Kondisi : Baik';
                css = 'text-success';
                break;
            default:
                kondisi = 'Kondisi : -';
                css = '';
                break;
        }
        if (values.includes(1)) {
            kondisi = 'Kondisi : Sangat tidak baik/rusak';
            css = 'text-danger';
        }

        $('#kondisi').html(kondisi);
        $('#kondisi').attr("class", css);
    }
</script>
<style>
    .rating {
        margin-bottom: 5px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center
    }

    .rating>input {
        display: none
    }

    .star {
        position: relative;
        width: 1em;
        font-size: 25px !important;
        color: #FFD600;
        cursor: pointer
    }

    .stario {
        position: relative;
        width: 1em;
        font-size: 20px !important;
        color: #FFD600;
        cursor: pointer
    }

    .rating>label::before {
        content: "\2605";
        position: absolute;
        opacity: 0
    }

    .rating>label:hover:before,
    .rating>label:hover~label:before {
        opacity: 1 !important
    }

    .rating>input:checked~label:before {
        opacity: 1
    }

    .rating:hover>input:checked~label:before {
        opacity: 0.4
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 14px
        }

        p {
            font-size: 12px
        }
    }
</style>