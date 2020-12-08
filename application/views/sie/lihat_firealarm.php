<div class="page-header">
    <h4 class="page-title">Ketersediaan Firealarm</h4>
</div>
<div class="row">
    <div class="module-body table">
        <table cellpadding="0" cellspacing="0" class="basic-datatables table table-bordered table-striped  display" width="100%">
            <thead>
                <tr class="text-center">
                    <th>No</th>
                    <th>No Fire Alarm</th>
                    <th>Zona (Penempatan)</th>
                    <th>Titik</th>
                    <th>Type (Merk)</th>
                    <th>Jenis</th>
                    <th>Tanggal Pasang</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                foreach ($firealarm as $row) :
                ?>
                    <tr class="odd gradeX">
                        <td class="text-center"><?= $i++; ?></td>
                        <td><?= $row->no_firealarm ?></td>
                        <td><?= $row->zona . ' (' . $row->penempatan . ')' ?></td>
                        <td class="text-center"><?= $row->titik ?></td>
                        <td><?= $row->type . ' (' . $row->merk . ')' ?></td>
                        <td><?= $row->jenis_sensor ?></td>
                        <td><?= tgl_indo($row->tanggal_pasang) ?></td>

                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
<script>
    let tabel = $('.basic-datatables').DataTable({
        responsive: true,
        "lengthChange": false,
        "bInfo": false
    });
</script>