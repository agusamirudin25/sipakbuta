<div class="page-header">
    <h4 class="page-title">Monitoring APAR</h4>
</div>
<div class="row">
    <div class="module-body table">
        <table cellpadding="0" cellspacing="0" class="basic-datatables table table-bordered table-striped  display" width="100%">
            <thead>
                <tr class="text-center">
                    <th>No</th>
                    <th>No APAR</th>
                    <th>Zona (Penempatan)</th>
                    <th>Type (Merk)</th>
                    <th>Berat</th>
                    <th>Kondisi</th>
                    <th>Keterangan</th>
                    <th>Petugas Pelaksana</th>
                    <th>Tanggal Periksa</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                foreach ($apar as $row) :
                ?>
                    <tr class="odd gradeX">
                        <td class="text-center"><?= $i++; ?></td>
                        <td><?= $row->nomor_apar ?></td>
                        <td><?= $row->zona . ' (' . $row->penempatan . ')' ?></td>
                        <td><?= $row->type . ' (' . $row->merk . ')' ?></td>
                        <td class="text-center"><?= $row->timbangan . 'Kg' ?></td>
                        <td><?= $row->kondisi ?></td>
                        <td><?= $row->keterangan ?></td>
                        <td><?= $row->nama ?></td>
                        <td><?= tgl_indo($row->tanggal_pengisian) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
<script>
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
</script>