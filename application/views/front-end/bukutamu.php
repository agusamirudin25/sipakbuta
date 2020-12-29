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
                <div class="card" style="box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);">
                    <div class="card-header">
                        <div class="card-title">Form Tambah Tamu</div>
                    </div>
                    <form method="post" id="submit" autocomplete="off">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="nama">Nama Pengunjung</label>
                                <select required class="form-control input-pill" id="pengunjung" name="pengunjung" style="width: 100%">>
                                    <option value="">-Pilih Pengunjung-</option>
                                    <?php foreach ($pengunjung as $row) : ?>
                                        <option value="<?= $row->id_pengunjung ?>"><?= $row->nama ?></option>
                                    <?php endforeach; ?>
                                    <option value="-">Lainnya</option>
                                </select>
                            </div>
                            <div class="isi">
                                <div class=" form-group">
                                    <label for="nama">Nama Pengunjung</label>
                                    <input type="text" id="nama_pengunjung" name="nama_pengunjung" class="form-control" placeholder="Nama Lengkap">
                                </div>
                                <div class="form-group">
                                    <label for="jabatan">Jabatan</label>
                                    <input type="text" class="form-control input-pill" id="jabatan" placeholder="Jabatan" name="jabatan">
                                </div>
                                <div class="form-group">
                                    <label for="instansi">Instansi</label>
                                    <input type="text" class="form-control input-pill" id="instansi" placeholder="Instansi" name="instansi">
                                </div>
                                <div class="form-group">
                                    <label for="no_hp">No. HP</label>
                                    <input type="text" class="form-control input-pill" id="no_hp" placeholder="08xxxxxxxx" name="no_hp">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="paraf">Tanda Tangan</label>
                                <textarea id="signatureJSON" rows="5" cols="30" readonly class="ui-state-active" style="display:none;" name="paraf"></textarea>
                                <div id="defaultSignature" class="col-md-12 kbw-signature">
                                </div>
                                <button type="button" id="clearSignature" class="btn btn-sm btn-danger" style="font-size:12px !important; padding: 0.25rem 0.5rem !important;"> Bersihkan</button> </div>
                        </div>

                        <div class="card-action p-2" style="text-align:right;">
                            <input type="hidden" id="id_agenda" name="id_agenda" value="<?= $this->uri->segment(2) ?>">
                            <a href="<?= base_url('buku-tamu') ?>" class="btn btn-danger">Kembali</a>
                            <button class="btn btn-sm btn-success" type="submit" id="simpan" style="color:white;">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mt-1" style="box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);">
                    <div class="card-header">
                        <div class="card-title">Data Tamu</div>
                    </div>
                    <div class="card-body">
                        <ol id="tamu">

                        </ol>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<script src="<?= base_url() ?>assets/js/core/jquery.3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js" defer></script>
<!-- Sweet Alert -->
<script src="<?= base_url(); ?>assets/login/js/sweetalert2.all.min.js"></script>
<script>
    $(document).ready(function() {
        $('#pengunjung').select2({
            width: 'resolve'
        });
        $("#no_hp").keypress(function(e) {
            var keyCode = e.keyCode || e.which;
            var regex = /^[0-9\s]+$/;
            var isValid = regex.test(String.fromCharCode(keyCode));
            return isValid;
        });
        $('.isi').hide();
        $('#pengunjung').change(function() {
            let pengunjung = $('#pengunjung').val();
            if (pengunjung == '-') {
                $('.isi').show();
            } else {
                $('.isi').hide();
            }
        });

        $('#submit').submit(function(e) {
            e.preventDefault();
            _validasi();
            $.ajax({
                url: '<?= site_url(); ?>beranda/prosesTambahTamu',
                type: "post",
                data: new FormData(this),
                processData: false,
                contentType: false,
                cache: false,
                async: false,
                dataType: "json",
                success: function(response) {
                    if (response.status == 1) {
                        success_alert(response.title, response.msg);
                        load_data();
                        _clear();
                    } else {
                        error_alert(response.title, response.msg);
                    }
                }
            });
        });
        load_data();
    });

    function load_data() {
        let id = $('#id_agenda').val();
        let string = 'id=' + id;
        $.ajax({
            url: '<?= site_url(); ?>beranda/getTamu',
            data: string,
            type: "post",
            dataType: "json",
            success: function(response) {
                let jml = response['total'];
                let res = response['data'];
                if (res == '-') {
                    window.location.href = "<?= base_url('404_override') ?>";
                }

                function myFunction(item, index) {
                    html += `<li>${item.nama}</li>`;
                }

                var html = '';
                if (jml != 0) {
                    res.forEach(myFunction);
                    $('#pengunjung').html(response.html);
                } else {
                    html += '- Belum ada tamu -';
                }
                $('#tamu').html(html);
            }
        })

    }

    function _validasi() {
        let pengunjung = $('#pengunjung');
        let nama_pengunjung = $('#nama_pengunjung');
        let jabatan = $('#jabatan');
        let instansi = $('#instansi');
        let no_hp = $('#no_hp');
        if (pengunjung.val() == '-') {
            if (nama_pengunjung.val() == '') {
                nama_pengunjung.focus();
                error_alert('Error', 'Nama pengunjung tidak boleh kosong');
                return false();
            }
            if (jabatan.val() == '') {
                jabatan.focus();
                error_alert('Error', 'Jabatan tidak boleh kosong');
                return false();
            }
            if (instansi.val() == '') {
                instansi.focus();
                error_alert('Error', 'Instansi tidak boleh kosong');
                return false();
            }
            if (no_hp.val() == '') {
                no_hp.focus();
                error_alert('Error', 'No. HP tidak boleh kosong');
                return false();
            }
        }
        return false;
    }

    function _clear() {
        $('#submit').each(function() {
            this.reset();
        });
        $('#defaultSignature').signature('clear');
        $('#pengunjung').val('');
        $('#pengunjung').trigger('change');
    }

    function error_alert(title, msg) {
        Swal.fire({
            icon: 'error',
            title: title,
            text: msg,
            footer: 'SIPAKBUTA'
        })
    }

    function success_alert(title, msg) {
        Swal.fire({
            icon: 'success',
            title: title,
            text: msg,
            timer: 1500,
            footer: 'SIPAKBUTA',
            showCancelButton: false,
            showConfirmButton: false
        })
    }
</script>