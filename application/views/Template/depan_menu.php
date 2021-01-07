<header class="site-navbar light js-sticky-header site-navbar-target" role="banner">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-6 col-xl-2">
                <div class="mb-0 site-logo">
                    <a href="<?= base_url() ?>" class="mb-0">
                        <img src="<?= base_url() ?>assets/front-end/images/logo-magang-new.png" alt="logo" class="logo">
                    </a>
                </div>
            </div>

            <div class="col-12 col-md-10 d-none d-xl-block">
                <nav class="site-navigation position-relative text-right" role="navigation">
                    <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                        <li class="<?= ($this->uri->segment(1) == '' || $this->uri->segment(1) == 'beranda')  ? 'active' : '' ?>"><a href="<?= base_url() ?>" class="nav-link">Beranda</a></li>
                        <li class="<?= ($this->uri->segment(1) == 'buku-tamu' || $this->uri->segment(1) == 'tambah-buku-tamu') ? 'active' : '' ?>"><a href="<?= base_url('buku-tamu') ?>" class="nav-link">Buku Tamu</a></li>
                        <li><a href="<?= base_url('login') ?>" class="nav-link">Login</a></li>
                    </ul>
                </nav>
            </div>


            <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;">
                <a href="#" class="site-menu-toggle js-menu-toggle float-right">
                    <span class="icon-menu h3 text-black">

                    </span>
                </a>
            </div>
        </div>
    </div>

</header>