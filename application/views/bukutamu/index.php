<div class="page-header">
    <h4 class="page-title">Buku Tamu</h4>
</div>
<div class="row">
    <div class="module-body table">
        <table cellpadding="0" cellspacing="0" class="basic-datatables table table-bordered table-striped  display" width="100%">
            <thead>
                <tr class="text-center">
                    <th>No</th>
                    <th>Nama Kegiatan</th>
                    <th>Waktu</th>
                    <th>Lokasi</th>
                    <th>Pembahasan</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                foreach ($bukutamu as $row) :
                ?>
                    <tr class="odd gradeX">
                        <td class="text-center"><?= $i++; ?></td>
                        <td><?= $row->nama_kegiatan ?></td>
                        <td><?= $row->hari . ', ' . tgl_indo($row->tanggal) . $row->jam ?></td>
                        <td><?= $row->nama_lokasi ?></td>
                        <td><?= $row->pembahasan ?></td>
                        <td class="text-center">
                            <a href="<?= base_url() ?>edit-bukutamu/<?= enc($row->id_bukutamu) ?>" class="btn btn-primary btn-xs" title="Edit"><i class="fa fa-pen"></i></a>
                            <a href="#" class="btn btn-danger btn-xs" title="Hapus" onclick="delete_data('<?= enc($row->id_bukutamu) ?>', 'hb')"><i class="fa fa-trash"></i></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>