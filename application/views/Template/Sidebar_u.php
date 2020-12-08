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
                                <a href="<?= base_url() ?>auth/logout">
                                    <span class="link-collapse">Keluar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav">
                <li class="nav-item <?= ($this->uri->segment(1) == 'User' || $this->uri->segment(1) == 'user') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>user">
                        <i class="fas fa-home"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'profil') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>profil">
                        <i class="fas fa-user"></i>
                        <p>Profil</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'ketersediaan-apar') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>ketersediaan-apar">
                        <i class="fas fa-fire-extinguisher"></i>
                        <p>Ketersediaan APAR</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'ketersediaan-firealarm') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>ketersediaan-firealarm">
                        <i class="fas fa-gas-pump"></i>
                        <p>Ketersediaan Fire Alarm</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'mon-apar' || $this->uri->segment(1) == 'tambah-mon-apar') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>mon-apar">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <p>Monitoring APAR</p>
                    </a>
                </li>
                <li class="nav-item <?= ($this->uri->segment(1) == 'mon-firealarm' || $this->uri->segment(1) == 'tambah-mon-firealarm') ? 'active' : '' ?>">
                    <a href="<?= base_url() ?>mon-firealarm">
                        <i class="fas fa-diagnoses"></i>
                        <p>Monitoring Fire Alarm</p>
                    </a>
                </li>
                <li class="nav-item ml-3">
                    <br>
                    <img src="<?= base_url('assets/images/logo/bawah.png') ?>" alt="" style="width: 15vw;" class="ml-3 mt-3">
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- End Sidebar -->