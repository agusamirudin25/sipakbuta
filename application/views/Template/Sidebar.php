<div class="sidebar">
    <ul class="widget widget-menu unstyled">
        <li class="active"><a href="<?php echo base_url() . 'Admin/Dashboard' ?>"><i class="menu-icon icon-home"></i>Beranda</a></li>
        <li><a href="<?php echo base_url() . 'Admin/Pemilih' ?>"><i class="menu-icon icon-user"></i>Data Pemilih</a></li>
        <li><a href="<?php echo base_url() . 'Admin/Kandidat' ?>"><i class="menu-icon icon-book"></i>Data Kandidat</a></li>
        <li><a href="<?php echo base_url() . 'Admin/Voting' ?>"><i class="menu-icon icon-book"></i>Data Hasil Voting</a></li>
        <li><a href="<?php echo base_url() . 'Admin/Voting/import_mahasiswa' ?>"><i class="menu-icon icon-book"></i>Import Mahasiswa</a></li>
        <li><a class="collapsed" data-toggle="collapse" href="#togglePages"><i class="menu-icon icon-save"></i><i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right"></i>Laporan</a>
            <ul id="togglePages" class="collapse unstyled">
                <li><a href="<?php echo base_url() . 'Admin/Laporan/lap_data_pemilih' ?>"><i class="menu-icon icon-arrow-left"></i>Laporan Data Pemilih</a></li>
                <li><a href="<?php echo base_url() . 'Admin/Laporan/lap_data_tetap' ?>"><i class="menu-icon icon-arrow-left"></i>Laporan Data Pemilih Tetap</a></li>
                <li><a href="<?php echo base_url() . 'Admin/Laporan/lap_data_sementara' ?>"><i class="menu-icon icon-arrow-left"></i>Laporan Data Pemilih Sementara</a></li>
                <li><a href="<?php echo base_url() . 'Admin/Laporan/lap_per_periode' ?>"><i class="menu-icon icon-arrow-left"></i>Laporan Hasil Voting Terkini</a></li>
            </ul>
        </li>
    </ul>
</div>