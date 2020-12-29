<div class="page-header">
    <h4 class="page-title">Laporan</h4>
</div>
<div class="row">
    <div class="module-body table">
        <table cellpadding="0" cellspacing="0" class="basic-datatables table table-bordered table-striped  display" width="100%">
            <thead>
                <tr class="text-center">
                    <th>No</th>
                    <th>Nama Laporan</th>
                    <th>Tanggal Dibuat</th>
                    <th>Dibuat Oleh</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                foreach ($laporan as $row) :
                ?>
                    <tr class="odd gradeX">
                        <td class="text-center"><?= $i++; ?></td>
                        <td><?= $row->nama ?></td>
                        <td><?= tgl_indo($row->tanggal_dibuat) ?></td>
                        <td><?= $row->nama_lengkap ?></td>
                        <td class="text-center">
                            <a href="<?= base_url() ?>lihat-laporan/<?= enc($row->id_laporan) ?>" class="btn btn-primary btn-xs" title="Lihat"><i class="fa fa-eye"></i></a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>