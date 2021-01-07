<!DOCTYPE html>
<html>

<head>
    <title>AGENTAKUTA &mdash;</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="<?= base_url() ?>assets/front-end/images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/login/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">

</head>

<body>
    <img class="wave" src="<?= base_url() ?>assets/login/img/wave-green.png">
    <div class="container">
        <div class="img">
            <img src="<?= base_url() ?>assets/login/img/bg.svg">
        </div>
        <div class="login-content">
            <form method="post" autocomplete="off">
                <img src="<?= base_url() ?>assets/login/img/avatar.svg">
                <h2 class="title">Selamat Datang</h2>
                <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                        <h5>Username</h5>
                        <input type="text" class="input" id="nama_pengguna" name="nama_pengguna">
                    </div>
                </div>
                <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                        <h5>Password</h5>
                        <input type="password" class="input" id="katasandi">
                        <span class="btn-show-pass">
                            <i class="fa fa-eye"></i>
                        </span>
                    </div>
                </div>
                <div class="bungkus" style="display: flex;">
                    <div class="input-div captcha">
                        <div class="i">
                            <i class="fas fa-recycle"></i>
                        </div>
                        <div class="div">
                            <h5>Captcha</h5>
                            <input type="text" class="input" id="captcha" name="captcha">
                        </div>
                    </div>
                    <div id="Imageid_wadah">
                        <?= $cap_img; ?>
                    </div>
                </div>

                <br>
                <button type="submit" class="btn" id="Login">Masuk</button>
                <a href="<?= base_url() ?>beranda" class="back"><i class="fas fa-reply" aria-hidden="true"></i> Kembali ke beranda</a>
                <div class="i">

                </div>
            </form>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="<?= base_url(); ?>assets/login/js/sweetalert2.all.min.js"></script>
    <script src="<?= base_url() ?>assets/login/js/jquery-3.2.1.min.js"></script>
    <script src="<?= base_url() ?>assets/login/js/main.js"></script>
    <script>
        $("#captcha").keypress(function(e) {
            var keyCode = e.keyCode || e.which;
            var regex = /^[0-9\s]+$/;
            var isValid = regex.test(String.fromCharCode(keyCode));
            return isValid;
        });
        $('#Login').click(function(e) {

            e.preventDefault()
            login_process();
        });
        $("#nama_pengguna").keyup(function(event) {
            $(".one").removeClass("alert-validate");
            $(".one").addClass("input-div");
            $("#nama_pengguna").val($('#nama_pengguna').val().replace(/['"]/g, ''));
            if (event.keyCode == 13) {
                login_process();
            }
        });
        $("#katasandi").keyup(function(event) {
            $(".pass").removeClass("alert-validate");
            $(".pass").addClass("input-div");
            $("#katasandi").val($('#katasandi').val().replace(/['"]/g, ''));
            if (event.keyCode == 13) {
                login_process();
            }
        });
        $("#captcha").keyup(function(event) {
            $(".captcha").removeClass("alert-validate");
            $(".captcha").addClass("input-div");
            $("#captcha").val($('#captcha').val().replace(/['"]/g, ''));
            if (event.keyCode == 13) {
                login_process();
            }
        });

        function login_process() {
            let user = $('#nama_pengguna').val();
            let pass = $('#katasandi').val();
            let captcha = $('#captcha').val();
            if (user.length == 0) {
                $(".one").removeClass("input-div");
                $(".one").addClass("alert-validate focus");
                $("#nama_pengguna").focus();
                return false;
            }
            if (pass.length == 0) {
                $(".pass").removeClass("input-div");
                $(".pass").addClass("alert-validate focus");
                $("#katasandi").focus();
                return false;
            }
            if (captcha.length == 0) {
                $(".captcha").removeClass("input-div");
                $(".captcha").addClass("alert-validate focus");
                $("#captcha").focus();
                return false;
            }
            cek_captcha();

        }

        function cek_captcha() {
            let user = $('#nama_pengguna').val();
            let pass = $('#katasandi').val();
            let captcha = $('#captcha').val();
            let string = "kode=" + captcha;
            $.ajax({
                type: 'POST',
                url: "<?= base_url() ?>login/cek_captcha",
                data: string,
                cache: false,
                dataType: "json",
                success: function(response) {
                    if (response.status == 1) {
                        var string = "user=" + user + "&pass=" + pass;
                        $.ajax({
                            type: 'POST',
                            url: "<?= base_url() ?>login/cek_login",
                            data: string,
                            cache: false,
                            dataType: "json",
                            success: function(data) {
                                if (data.login_status == 1) {
                                    success_alert(data.title, data.msg, data.page);
                                } else {
                                    error_alert(data.title, data.msg);
                                }
                            }
                        })
                    } else {
                        error_alert(response.title, response.msg);
                    }

                }
            })
        }
    </script>
    <script>
        function success_alert_confirm(title, msg) {
            Swal.fire({
                icon: 'success',
                title: title,
                text: msg,
                timer: 1500,
                footer: 'AGENTAKUTA',
                showCancelButton: false,
                showConfirmButton: false
            })
        }

        function success_alert(title, msg, page) {
            Swal.fire({
                icon: 'success',
                title: title,
                text: msg,
                timer: 1500,
                footer: 'AGENTAKUTA',
                showCancelButton: false,
                showConfirmButton: false
            }).then(function() {
                window.location = "<?= base_url() ?>" + page;
            })
        }

        function error_alert(title, msg) {
            Swal.fire({
                icon: 'error',
                title: title,
                text: msg,
                footer: 'AGENTAKUTA'
            })
        }
    </script>
</body>

</html>