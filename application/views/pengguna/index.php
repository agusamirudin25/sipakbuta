<div class="page-header">
    <h4 class="page-title">Pengguna</h4>
</div>
<div class="row">
    <div class="module-body table">
        <table cellpadding="0" cellspacing="0" class="basic-datatables table table-bordered table-striped  display" width="100%">
            <thead>
                <tr class="text-center">
                    <th>No</th>
                    <th>Username</th>
                    <th>Nama Lengkap</th>
                    <th>Email</th>
                    <th>No. HP</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                foreach ($pengguna as $row) :
                    if ($row->status == 0) {
                        $btn = 'btn-danger';
                        $fa = 'fa-ban';
                        $kata = ' Tidak Aktif';
                    } else if ($row->status == 1) {
                        $btn = 'btn-success';
                        $fa = 'fa-check';
                        $kata = ' Aktif';
                    }
                ?>
                    <tr class="odd gradeX">
                        <td class="text-center"><?= $i++; ?></td>
                        <td><?= $row->nama_pengguna ?></td>
                        <td><?= $row->nama_lengkap ?></td>
                        <td><?= $row->email ?></td>
                        <td><?= $row->no_hp ?></td>
                        <td class="text-center"><button class="btn <?= $btn ?> btn-xs" disabled="disabled"><i class="fa <?= $fa ?>"></i><?= $kata ?></button></td>
                        <td class="text-center">
                            <a href="<?= base_url() ?>edit-pengguna/<?= enc($row->id_pengguna) ?>" class="btn btn-primary btn-xs" title="Edit"><i class="fa fa-pen"></i></a>
                            <a href="#" class="btn btn-danger btn-xs" title="Hapus" onclick="delete_data('<?= enc($row->id_pengguna) ?>', 'hp')"><i class="fa fa-trash"></i></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>