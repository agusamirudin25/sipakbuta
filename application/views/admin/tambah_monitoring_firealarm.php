<div class="page-header">
    <h4 class="page-title">Tambah Monitoring Firealarm</h4>
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
            <a href="<?= base_url('monitoring-firealarm') ?>">Monitoring Firealarm</a>
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
    <div class="col-md-4">
        <form method="post" autocomplete="off" id="submit" enctype="multipart/form-data">
            <div class="card card-post card-round">
                <div class="card-header">
                    <div class="card-title">Data FIREALARM</div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="nomor_apar">Nomor Firealarm</label>
                        <select class="form-control input-pill" id="no_firealarm" name="no_firealarm" required>
                            <option value="">- Pilih Firealarm -</option>
                            <?php foreach ($firealarm as $row) : ?>
                                <option value="<?= $row->no_firealarm; ?>"><?= $row->no_firealarm; ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="zona">Zona/Titik ke- (Penempatan)</label>
                        <input type="text" class="form-control input-pill" id="zona" placeholder="-" name="zona" readonly>
                    </div>
                    <div class="form-group">
                        <label for="penempatan">Type (Merk)</label>
                        <input type="text" class="form-control input-pill" id="type" placeholder="-" name="penempatan" readonly>
                    </div>
                    <div class="form-group">
                        <label for="penempatan">Jenis</label>
                        <input type="text" class="form-control input-pill" id="jenis" placeholder="-" name="penempatan" readonly>
                    </div>
                    <div class="form-group ">
                        <label for="foto">Foto</label>
                        <input type="file" class="form-control dropify" data-height="200" accept="image/*" data-allowed-file-extensions="jpg png jpeg" id="foto" name="foto[]" required multiple>
                    </div>
                    <div class="separator-solid"></div>
                </div>
            </div>
    </div>
    <div class="col-md-8 pl-md-0">
        <div class="card card-pricing">
            <div class="card-header">
                <div class="card-title">Monitoring Firealarm</div>
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
                    $i = 1;
                    foreach ($kuesFirealarm as $kuesioner) : ?>
                        <li>
                            <span class="name-specification" style="font-size: 13px;"><?= $i . '. ' . $kuesioner->pertanyaan ?></span>
                            <span class="status-specification">
                                <div class="rating">
                                    <input type="radio" name="r<?= $i ?>" value="5" id="r5<?= $i ?>" onclick="proses(<?= $i ?>,this);">
                                    <label class="star" for="r5<?= $i ?>">☆</label>
                                    <input type="radio" name="r<?= $i ?>" value="4" id="r4<?= $i ?>" onclick="proses(<?= $i ?>,this);">
                                    <label class="star" for="r4<?= $i ?>">☆</label>
                                    <input type="radio" name="r<?= $i ?>" value="3" id="r3<?= $i ?>" onclick="proses(<?= $i ?>,this);">
                                    <label class="star" for="r3<?= $i ?>">☆</label>
                                    <input type="radio" name="r<?= $i ?>" value="2" id="r2<?= $i ?>" onclick="proses(<?= $i ?>,this);">
                                    <label class="star" for="r2<?= $i ?>">☆</label>
                                    <input type="radio" name="r<?= $i ?>" value="1" id="r1<?= $i ?>" checked onclick="proses(<?= $i ?>, this);">
                                    <label class="star" for="r1<?= $i ?>">☆</label>
                                </div>
                                <input type="hidden" name="kuesioner[]" id="kuesioner<?= $i ?>" value="1">
                                <input type="hidden" name="pertanyaan[]" id="pertanyaan<?= $i ?>" value="<?= $kuesioner->id_kuesioner ?>">
                            </span>
                        </li>
                    <?php $i++;
                    endforeach; ?>
                    <li class="text-right">
                        <span class="text-success" id="kondisi" style="font-size: 18px; padding-right: 10px;">Kondisi : - </span>
                    </li>
                </ul>
                <div class="form-group">
                    <label for="keterangan">Keterangan</label>
                    <textarea class="form-control" id="keterangan" rows="3" name="keterangan"></textarea>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-success btn-black" type="submit" id="simpan">
                    Simpan
                </button>
                <a href="<?= base_url('monitoring-firealarm') ?>" class="btn btn-danger">Kembali</a>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $('#no_firealarm').select2();
        var $inp = $('#rating-input');
        $inp.rating({
            min: 0,
            max: 5,
            step: 1,
            size: 'sm',
            showClear: false
        });
        $('#no_firealarm').change(function(e) {
            var string = 'no_firealarm=' + $('#no_firealarm').val() + '&code=2';
            e.preventDefault();

            if ($('#no_firealarm').val() != "") {
                $.ajax({
                    type: 'POST',
                    url: "<?= base_url() ?>admin/setInfo",
                    data: string,
                    cache: false,
                    dataType: "json",
                    success: function(response) {
                        $('#zona').val(response.zona + '/' + response.titik + ' (' + response.penempatan + ')');
                        $('#type').val(response.type + ' (' + response.merk + ')');
                        $('#jenis').val(response.jenis);
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
                url: '<?= site_url(); ?>admin/prosesTambahMonitoringFirealarm',
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