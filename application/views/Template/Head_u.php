<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title><?= $title; ?></title>
    <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
    <meta charset="utf-8">
    <meta name="description" content="Jl. Pangkal Perjuangan Km.1 By Pass Karawang">
    <meta name="keywords" content="Stmik,Karawang,kharisma,simodal">
    <meta name="author" content="Kharismatik">
    <!--=== Favicon ===-->
    <link href='<?php echo base_url() ?>/assets/images/logo/<?= $logo ?>' rel='shortcut icon'>

    <!-- Fonts and icons -->
    <script src="<?= base_url() ?>assets/js/webfont.min.js"></script>
    <script>
        WebFont.load({
            google: {
                "families": ["Open+Sans:300,400,600,700"]
            },
            custom: {
                "families": ["Flaticon", "Font Awesome 5 Solid", "Font Awesome 5 Regular", "Font Awesome 5 Brands"],
                urls: ['<?= base_url() ?>assets/css/fonts.css']
            },
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>

    <!-- CSS Files -->
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/azzara.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/datatables.button.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/star-rating.css">

    <link rel="stylesheet" href="https://cdn.datatables.net/fixedheader/3.1.7/css/fixedHeader.bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.5/css/responsive.bootstrap.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/css/dropify.min.css">

    <link rel="stylesheet" href="<?= base_url() ?>assets/css/signaturepad/jquery.signature.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
    <script src="<?= base_url() ?>assets/js/core/jquery.3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <!-- Datatables -->
    <script src="<?= base_url() ?>assets/js/plugin/datatables/datatables.min.js"></script>
    <script src="<?= base_url() ?>assets/js/plugin/datatables/datatables.button.min.js"></script>
    <script src="https://cdn.datatables.net/fixedheader/3.1.7/js/dataTables.fixedHeader.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.5/js/responsive.bootstrap.min.js"></script>
</head>

<body>