<div class="page-header">
    <h4 class="page-title">Ketersediaan APAR</h4>
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
                    <th>Jenis</th>
                    <th>Berat</th>
                    <th>Tanggal Kadaluarsa</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                foreach ($pengguna as $row) :
                ?>
                    <tr class="odd gradeX">
                        <td class="text-center"><?= $i++; ?></td>
                        <td><?= $row->nomor_apar ?></td>
                        <td><?= $row->zona . ' (' . $row->penempatan . ')' ?></td>
                        <td><?= $row->type . ' (' . $row->merk . ')' ?></td>
                        <td><?= $row->jenis_isi ?></td>
                        <td class="text-center"><?= $row->berat . 'Kg' ?></td>
                        <td><?= tgl_indo($row->tanggal_kadaluwarsa) ?></td>
                        <td class="text-center">
                            <a href="<?= base_url() ?>edit-apar/<?= $row->nomor_apar ?>" class="btn btn-primary btn-xs" title="Edit"><i class="fa fa-pen"></i></a>
                            <a href="#" class="btn btn-danger btn-xs" title="Hapus" onclick="delete_data('<?= $row->nomor_apar ?>', 'ha')"><i class="fa fa-trash"></i></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>