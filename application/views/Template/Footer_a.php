<footer class="main-footer text-sm">
    <div class="float-right d-none d-sm-block">
        <b>Version</b> 1.0
    </div>
    <strong>Copyright © <?= date('Y') ?> <a href="stmik-kharisma.ac.id"><?= $nama_tim; ?></a></strong>
</footer>
</div>
</div>

</div>
</div>
<!--   Core JS Files   -->
<script src="<?= base_url() ?>assets/js/core/popper.min.js"></script>
<script src="<?= base_url() ?>assets/js/core/bootstrap.min.js"></script>
<script src="<?= base_url() ?>assets/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
<script src="<?= base_url() ?>assets/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js"></script>

<!-- jQuery Scrollbar -->
<script src="<?= base_url() ?>assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js"></script>

<!-- Moment JS -->
<script src="<?= base_url() ?>assets/js/plugin/moment/moment.min.js"></script>

<!-- Chart JS -->
<script src="<?= base_url() ?>assets/js/plugin/chart.js/chart.min.js"></script>

<!-- jQuery Sparkline -->
<script src="<?= base_url() ?>assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js"></script>

<!-- Chart Circle -->
<script src="<?= base_url() ?>assets/js/plugin/chart-circle/circles.min.js"></script>

<!-- Datatables -->
<script src="<?= base_url() ?>assets/js/plugin/datatables/datatables.min.js"></script>
<script src="<?= base_url() ?>assets/js/plugin/datatables/datatables.button.min.js"></script>
<script src="https://cdn.datatables.net/fixedheader/3.1.7/js/dataTables.fixedHeader.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.5/js/responsive.bootstrap.min.js"></script>

<!-- Bootstrap Notify -->
<script src="<?= base_url() ?>assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js"></script>

<!-- Bootstrap Toggle -->
<script src="<?= base_url() ?>assets/js/plugin/bootstrap-toggle/bootstrap-toggle.min.js"></script>

<!-- Sweet Alert -->
<script src="<?= base_url(); ?>assets/login/js/sweetalert2.all.min.js"></script>

<!-- Azzara JS -->
<script src="<?= base_url() ?>assets/js/ready.min.js"></script>
<script src="<?= base_url() ?>assets/js/dropify.js"></script>


<script src="<?= base_url() ?>assets/js/plugin/signaturepad/jquery.signature.js"></script>

<script>
    $('.dropify').dropify({
        messages: {
            default: 'Drag atau drop untuk memilih gambar',
            replace: 'Ganti',
            remove: 'Hapus',
            error: 'error'
        }
    });
</script>
<script>
    $(document).ready(function() {

        $('#defaultSignature').signature();
        $('#defaultSignature').signature({
            syncField: '#signatureJSON',
            syncFormat: 'PNG'
        });
        $('#clearSignature').click(function() {
            $('#defaultSignature').signature('clear');
        });
        let tabel = $('.basic-datatables').DataTable({
            dom: 'Bfrtip',
            responsive: true,
            "bInfo": false,
            buttons: [{
                text: 'Tambah Data',
                action: function(e, dt, node, config) {
                    window.location = "<?= base_url('') . $page ?>";
                }
            }]
        });
        new $.fn.dataTable.FixedHeader(tabel);

        var interval = setInterval(function() {
            var momentNow = moment();
            $('#date-part').html(momentNow.format('YYYY MMMM DD') + ' ' +
                momentNow.format('dddd')
                .substring(0, 3).toUpperCase());
            $('#txt').html(momentNow.format('HH:mm:ss'));
        }, 100);


    });

    function delete_data(id, ajax) {
        Swal.fire({
            title: "<?= $title; ?>",
            text: "Apakah Anda Yakin ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus'
        }).then((result) => {
            if (result.value) {
                var string = 'id=' + id;
                $.ajax({
                    type: 'POST',
                    url: "<?= site_url() ?>" + ajax,
                    data: string,
                    cache: false,
                    dataType: 'json',
                    success: function(data) {
                        if (data.status == 1) {
                            Swal.fire(
                                "<?= $title ?>",
                                'Berhasil dihapus.',
                                'success'
                            ).then(function() {
                                window.location = "<?= base_url() ?>" + data.page;
                            })
                        }
                    }
                });

            }
        })
    }
</script>
<script>
    function success_alert_confirm(title, msg) {
        Swal.fire({
            icon: 'success',
            title: title,
            text: msg,
            timer: 1500,
            footer: '<?= $nama_tim ?>',
            showCancelButton: false,
            showConfirmButton: false
        })
    }

    function success_alert(title, msg, page) {
        Swal.fire({
            icon: 'success',
            title: title,
            text: msg,
            timer: 1500,
            footer: '<?= $nama_tim ?>',
            showCancelButton: false,
            showConfirmButton: false
        }).then(function() {
            window.location = "<?= base_url() ?>" + page;
        })
    }

    function error_alert(title, msg) {
        Swal.fire({
            icon: 'error',
            title: title,
            text: msg,
            footer: '<?= $nama_tim ?>'
        })
    }
</script>

<style>
    footer {

        left: 15rem;
        bottom: 0;
        width: 80%;

    }


    @media screen and (max-width: 600px) {
        footer {
            position: relative;
            left: 0;
            bottom: 0;
            width: 80%;

        }
    }
</style>
</body>

</html>