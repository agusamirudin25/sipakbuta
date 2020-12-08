<div class="main-header" data-background-color="red">
    <!-- Logo Header -->
    <div class="logo-header">

        <a href="<?= base_url() ?>admin/dashboard" class="logo">
            <img src="<?= base_url() ?>assets/images/logo/<?= $logo; ?>" alt="navbar brand" class="navbar-brand" style="width: 40px;">
        </a>
        <button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
                <i class="fa fa-bars"></i>
            </span>
        </button>
        <button class="topbar-toggler more"><i class="fa fa-ellipsis-v"></i></button>
        <div class="navbar-minimize">
            <button class="btn btn-minimize btn-rounded">
                <i class="fa fa-bars"></i>
            </button>
        </div>
    </div>
    <!-- End Logo Header -->

    <!-- Navbar Header -->
    <nav class="navbar navbar-header navbar-expand-lg">

        <div class="container-fluid">
            <h3 class="text-white"><?= $deskripsi; ?></h3>
            <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
                <li class="nav-item dropdown hidden-caret">
                    <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                        <div class="avatar-sm">
                            <img src="<?= base_url() ?>assets/images/user.png" alt="..." class="avatar-img rounded-circle">
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-user animated fadeIn">
                        <li>
                            <a class="dropdown-item" href="<?= base_url() ?>auth/logout">Keluar</a>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </nav>
    <!-- End Navbar -->
</div>