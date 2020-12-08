<!-- Sidebar -->
<div class="sidebar">

    <div class="sidebar-background"></div>
    <div class="sidebar-wrapper scrollbar-inner">
        <div class="sidebar-content">
            <div class="user">
                <div class="avatar-sm float-left mr-2">
                    <img src="<?= base_url() ?>assets/images/user.png" alt="..." class="avatar-img rounded-circle">
                </div>
                <div class="info">
                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                        <span>
                            <?= $this->session->userdata('nama'); ?>
                            <span class="user-level"><?= $this->session->userdata('bagian') ?></span>
                            <span class="caret"></span>
                        </span>
                    </a>
                    <div class="clearfix"></div>

                    <div class="collapse in" id="collapseExample">
                        <ul class="nav">
                            <li>
                                <a href="<?= base_url() ?>login/logout">
                                    <span class="link-collapse">Keluar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav">
                <li class="nav-item <?= ($this->uri->segment(1) == 'main' || $this->uri->segment(1) == 'Main') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>main">
                        <i class="fas fa-home"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'konfigurasi') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>konfigurasi">
                        <i class="fas fa-cogs"></i>
                        <p>Konfigurasi</p>
                    </a>
                </li>

                <li class="nav-item <?= ($this->uri->segment(1) == 'pengguna' || $this->uri->segment(1) == 'pengunjung' || $this->uri->segment(1) == 'lokasi' || $this->uri->segment(1) == 'tambah-pengguna' || $this->uri->segment(1) == 'edit-pengguna' || $this->uri->segment(1) == 'tambah-pengunjung' || $this->uri->segment(1) == 'edit-pengunjung' || $this->uri->segment(1) == 'edit-lokasi') || $this->uri->segment(1) == 'tambah-pengguna' ? 'active' : '' ?>">
                    <a data-toggle="collapse" href="#master" class="collapsed" aria-expanded="false">
                        <i class="fas fa-receipt"></i>
                        <p>Master</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse <?= ($this->uri->segment(1) == 'pengguna' || $this->uri->segment(1) == 'pengunjung' || $this->uri->segment(1) == 'lokasi' || $this->uri->segment(1) == 'tambah-pengguna' || $this->uri->segment(1) == 'edit-pengguna' || $this->uri->segment(1) == 'tambah-pengunjung' || $this->uri->segment(1) == 'edit-pengunjung' || $this->uri->segment(1) == 'edit-lokasi') || $this->uri->segment(1) == 'tambah-pengguna' ? 'show' : '' ?>" id="master">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="<?= base_url() ?>pengguna">
                                    <span class="sub-item">Pengguna</span>
                                </a>
                            </li>
                            <li>
                                <a href="<?= base_url() ?>pengunjung">
                                    <span class="sub-item">Pengunjung</span>
                                </a>
                            </li>
                            <li>
                                <a href="<?= base_url() ?>lokasi">
                                    <span class="sub-item">Lokasi</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'agenda') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>agenda">
                        <i class="fas fa-book"></i>
                        <p>Agenda Kegiatan</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'bukutamu') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>bukutamu">
                        <i class="fas fa-book"></i>
                        <p>Buku Tamu</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'laporan') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>laporan">
                        <i class="fas fa-window-restore"></i>
                        <p>Laporan</p>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>
<!-- End Sidebar -->