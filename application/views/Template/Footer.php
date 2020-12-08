<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <p class="copyright">
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    Copyright ©<script>
                        document.write(new Date().getFullYear());
                    </script> All rights reserved | Developed by <a href="https://www.instagram.com/ountaarab/" target="_blank">ountaarab</a> & <a href="https://www.instagram.com/ags.amirudin/" target="_blank">ags.amirudin</a> <i class="fa  fa-flag" aria-hidden="true"></i> </p>
            </div>
        </div>
    </div>
</section>

<!--== Start Off Canvas Area Wrapper ==-->
<aside class="off-canvas-area-wrapper">
    <!-- Off Canvas Overlay -->
    <div class="off-canvas-overlay"></div>

    <!-- Start Off Canvas Content Area -->
    <div class="off-canvas-content-wrap">
        <div class="off-canvas-content">
            <!-- Start Search Box Wrap -->
            <div class="search-box-wrap off-canvas-item" style="margin-bottom:0px;">
                <a href="https://covid19.karawangkab.go.id/transparansi/portallayanan">
                    <img src="<?= base_url() ?>assets/images/BEM.png" class="sticky-logo" height="80px;" alt="Black Logo" />
                </a>
            </div>

            <!-- Start About Content Wrap -->
            <div class="about-content off-canvas-item">
                <br>
                <div class="row">
                    <div class="col-md-12 mb-20 animated bounceInLeft delay-2s shadow-sm text-center" style="border-radius: 15px;">
                        <a href="<?= base_url(); ?>login">
                            <div class="single-fun-fact-wrap layout--2">
                                <h4 style="font-size:24px; margin-bottom:10px;"><strong>Login</strong></h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12 mb-20 animated bounceInLeft delay-2s shadow-sm text-center" style="border-radius: 15px;">
                        <a href="<?= base_url(); ?>register">
                            <div class="single-fun-fact-wrap layout--2">
                                <h4 style="font-size:24px; margin-bottom:10px;"><strong>Daftar ?</strong></h4>
                            </div>
                        </a>
                    </div>
                </div>
                <br><br><br>
                <h2>Butuh Bantuan ? </h2>
                <div class="row">
                    <div class="col-md-12 mb-20 animated bounceInLeft delay-2s shadow-sm text-center" style="border-radius: 15px;">
                        <div class="single-fun-fact-wrap layout--2">
                            <h4>Whatsapp</h4>
                            <hr>
                            <h4 style="font-size:24px; margin-bottom:10px;"><strong>08997756356</strong></h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Off Canvas Close Icon -->
        <button class="btn-close trio-tooltip" data-tippy-content="Close" data-tippy-placement="left"><i class="fa fa-close"></i>
        </button>
    </div>
    <!-- End Off Canvas Content Area -->
</aside>
<!--== End Off Canvas Area Wrapper ==-->

<!--=== Start Quick View Content Wrapper ==-->
<div class="modal fade" id="quick-view">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <div class="quick-view-content-wrap">
                    <!-- Menampilkan View Ajax -->
                    <div id="data_submenu"></div>
                </div>
            </div>

            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
            </button>
        </div>
    </div>
</div>
<!--=== End Quick View Content Wrapper ==-->
<style>
    @media only screen and (max-width: 600px) {
        #bem {
            width: 0;
        }
    }
</style>
<!--=======================Javascript============================-->
<!--=== All Vendor Js ===-->
<script src="<?= base_url() ?>assets/js/vendor.js"></script>
<!--=== All Plugins Js ===-->
<script src="<?= base_url() ?>assets/js/plugins.js"></script>
<!--=== Active Js ===-->
<script src="<?= base_url() ?>assets/js/active.js"></script>
<!-- Chart JS -->
<script src="<?= base_url() ?>assets/js/plugin/chart.js/chart.min.js"></script>
<script src="<?= base_url() ?>assets/js/plugin/chart.js/chartjs-label.min.js"></script>
<!--=== Revolution Slider Js ===-->
<script src="<?= base_url() ?>assets/js/jquery.themepunch.tools.min.js"></script>


<script src="<?= base_url() ?>assets/js/revslider-active.js"></script>


<script src="<?= base_url() ?>assets/js/datatables.js"></script>
<script>
    $(document).ready(function() {
        var table = $('#myTabelTransparansi').DataTable({
            ordering: false,
            scrollY: "750px",
            scrollX: true,
            scrollCollapse: true,
            paging: true
        });
    });
    var pieChart = document.getElementById('pieChart').getContext('2d');
    var myPieChart = new Chart(pieChart, {
        type: 'pie',

        data: {
            labels: ["<?= $namakandidat1 ?>", "<?= $namakandidat2 ?>"],
            datasets: [{
                backgroundColor: ["#00b638", "#efaa30", "#50c8ea"],
                data: [<?= $kandidat1 ?>, <?= $kandidat2 ?>]
            }],
        },
        options: {
            title: {
                display: true,
                text: 'Hasil Polling Sementara',
                fontStyle: 'bold',
                fontSize: 20
            },
            plugins: {
                labels: {
                    render: 'value',
                    render: function(args) {
                        return args.value + ' suara';
                    },
                    fontSize: 14,
                    fontStyle: 'bold',
                    fontColor: '#f1f2fb',
                    fontFamily: '"Lucida Console", Monaco, monospace',
                    position: 'border'
                }
            },
            tooltips: {
                callbacks: {
                    // this callback is used to create the tooltip label
                    label: function(tooltipItem, data) {
                        // get the data label and data value to display
                        // convert the data value to local string so it uses a comma seperated number
                        var dataLabel = data.labels[tooltipItem.index];
                        var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

                        // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
                        if (Chart.helpers.isArray(dataLabel)) {
                            // show value on first line of multiline label
                            // need to clone because we are changing the value
                            dataLabel = dataLabel.slice();
                            dataLabel[0] += value;
                        } else {
                            dataLabel += value;
                        }

                        // return the text to display on the tooltip
                        return dataLabel;
                    }
                }
            }
        }
    })
</script>



</body>

</html>