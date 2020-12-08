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
                    <th>Aksi</th>
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
                        <td class="text-center">
                            <a href="<?= base_url() ?>edit-firealarm/<?= $row->no_firealarm ?>" class="btn btn-primary btn-xs" title="Edit"><i class="fa fa-pen"></i></a>
                            <a href="#" class="btn btn-danger btn-xs" title="Hapus" onclick="delete_data('<?= $row->no_firealarm ?>', 'hf')"><i class="fa fa-trash"></i></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>