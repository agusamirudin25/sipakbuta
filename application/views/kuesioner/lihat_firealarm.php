<div class="page-header">
    <h4 class="page-title">Pertanyaan Fire Alarm</h4>
</div>
<div class="row">
    <div class="module-body table">
        <table cellpadding="0" cellspacing="0" class="basic-datatables table table-bordered table-striped  display" width="100%">
            <thead>
                <tr class="text-center">
                    <th>No</th>
                    <th>Pertanyaan</th>
                    <th>Tanggal Dibuat</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                foreach ($kuesioner as $row) :
                ?>
                    <tr class="odd gradeX">
                        <td class="text-center"><?= $i++; ?></td>
                        <td><?= $row->pertanyaan ?></td>
                        <td class="text-center"><?= tgl_indo(date("Y-m-d", strtotime($row->tanggal_dibuat))) ?></td>
                        <td class="text-center">
                            <a href="<?= base_url() ?>edit-pertanyaan-firealarm/<?= $row->id_kuesioner ?>" class="btn btn-primary btn-xs" title="Edit"><i class="fa fa-pen"></i></a>
                            <a href="#" class="btn btn-danger btn-xs" title="Hapus" onclick="delete_data('<?= $row->id_kuesioner ?>', 'hkf')"><i class="fa fa-trash"></i></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>