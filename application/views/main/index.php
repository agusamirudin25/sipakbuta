<div class="page-header">
    <h4 class="page-title">Dashboard</h4>
</div>
<div class="notif" data-flashdata="<?= $this->session->flashdata('flash'); ?>"></div>
<div class="row">
    <div class="col-sm-6 col-md-4">
        <div class="card card-stats card-round">
            <div class="card-body ">
                <div class="row align-items-center">
                    <div class="col-icon">
                        <div class="icon-big text-center icon-primary bubble-shadow-small">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="col col-stats ml-3 ml-sm-0">
                        <div class="numbers">
                            <p class="card-category">Total Pengguna</p>
                            <h4 class="card-title"><?= $total_pengguna->total_pengguna ?></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-4">
        <div class="card card-stats card-round">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-icon">
                        <div class="icon-big text-center icon-success bubble-shadow-small">
                            <i class="fas fa-book"></i>
                        </div>
                    </div>
                    <div class="col col-stats ml-3 ml-sm-0">
                        <div class="numbers">
                            <p class="card-category">Total Agenda Kegiatan</p>
                            <h4 class="card-title"><?= $total_agenda->total_agenda ?></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-4">
        <div class="card card-stats card-round">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-icon">
                        <div class="icon-big text-center icon-warning bubble-shadow-small">
                            <i class="far fa-chart-bar"></i>
                        </div>
                    </div>
                    <div class="col col-stats ml-3 ml-sm-0">
                        <div class="numbers">
                            <p class="card-category">Total Pengunjung</p>
                            <h4 class="card-title"><?= $total_pengunjung->total_pengunjung ?></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Grafik Agenda 2020</div>
            </div>
            <div class="card-body">
                <div class="chart-container">
                    <canvas id="lineChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Chart JS -->
<script src="<?= base_url() ?>assets/js/plugin/chart.js/chart.min.js"></script>
<script>
    var lineChart = document.getElementById('lineChart').getContext('2d');

    var myLineChart = new Chart(lineChart, {
        type: 'line',
        data: {
            labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
            datasets: [{
                label: 'TOTAL AGENDA',
                backgroundColor: '#28a745',
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#1d7af3",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                backgroundColor: 'transparent',
                fill: true,
                borderWidth: 2,
                fill: false,
                borderColor: '#28a745',
                data: <?= $grafik; ?>
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    padding: 10,
                    fontColor: '#1d7af3',
                }
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            layout: {
                padding: {
                    left: 15,
                    right: 15,
                    top: 15,
                    bottom: 15
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40
                    }
                }]
            }
        }
    });
</script>