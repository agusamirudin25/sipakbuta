<!--== Start Header Area Wrapper ==-->
<header class="header-area-wrapper header-four transparent-header sticky-header">
    <div class="container-fluid">
        <div class="position-relative d-flex justify-content-between align-items-center">
            <div class="header-left-wrapper">
                <!-- Start Logo Area Wrap -->
                <a href="<?= base_url() ?>" class="logo-wrap d-block">
                    <img src="<?php echo base_url() ?>/assets/images/BEM.png" alt="White Logo" width="65px" />
                    <img src="<?php echo base_url() ?>/assets/images/BEM.png" class="sticky-logo" alt="Black Logo" width="65px" />
                </a>
                <!-- End Logo Area Wrap -->
            </div>

            <!-- Start Main Navigation Wrap -->
            <div class="header-right-wrapper w-auto">
                <div class="header-right-area d-flex justify-content-between align-items-center">
                    <div class="header-right-sub-area d-flex align-items-center">
                        <div class="navigation-area-wrap align-center d-none d-lg-block mr-5">
                            <nav class="main-navigation">
                                <ul class="main-menu nav justify-content-end">
                                    <li><a href="<?= base_url() ?>">Beranda</a>
                                    </li>
                                    <li><a href="<?= base_url(); ?>login">Login </a> </li>
                                    <li><a href="<?= base_url() ?>register">Daftar ?</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="footer-social-icons nav d-none d-sm-block">
                            <a href="https://www.instagram.com/bemstmikkharisma/" target="_blank" class="trio-tooltip" data-tippy-content="Instagram">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <div class="off-canvas-area-wrap d-flex d-lg-block">
                            <button class="off-canvas-btn d-none d-lg-block"><span class="bar-txt">Menu</span><i class="fa fa-bars"></i>
                            </button>
                            <!-- Mobile Responsive Menu Button -->
                            <button class="off-canvas-btn text-white d-lg-none ml-md-30 ml-sm-30"><i class="fa fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Main Navigation Wrap -->
        </div>
    </div>
</header>
<!--== End Header Area Wrapper ==-->
<!--== Start Page Header Area ==-->
<div class="team-hero-area fixed-height parallaxBg page-header-1" data-bg="">
    <div class="container h-100">
        <div class="row team-member-item h-100">
            <div class="col-lg-7 text-center m-auto">
                <div class="about-us-content white mt-40">
                    <img src="<?php echo base_url() ?>assets/images/BEM.png" id="bem" class="sticky-logo" alt="Black Logo" width="100px" />
                    <h3 class="text-light">Sistem Informasi Polling BEM STMIK Kharisma Karawang</h3>
                    <h2>
                        <div id="txt"></div>
                    </h2>
                    <!-- <p><i>"Membangun Kebersamaan Menuju Karawang Jaya, Mulya dan Tohaga Memberikan Pelayanan Terbaik Untuk Masyarakat Karawang"</i> -->
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!--== End Page Header Area ==-->