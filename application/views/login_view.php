<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="Jl. Pangkal Perjuangan Km.1 By Pass Karawang">
	<meta name="keywords" content="Stmik,Karawang,kharisma,simodal">
	<meta name="author" content="Kharismatik">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= base_url('assets/images/logo/simodal.png') ?>">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title><?= $title; ?></title>

	<link rel="stylesheet" type="text/css" href="<?= base_url(); ?>assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="<?= base_url(); ?>assets/login/css/util.css">
	<link rel="stylesheet" type="text/css" href="<?= base_url(); ?>assets/login/css/main.css">
	<link rel="stylesheet" type="text/css" href="<?= base_url(); ?>assets/login/css/second.css">

</head>

<body>


	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form validate-form">

					<span class="login100-form-title p-b-48" style="color: #8c8b8b; font-size: 18px;">
						<div class="box-body box-profile" style="margin-top: -1em;">
							<img class="img-responsive" style="width: 50%;" src="<?= base_url(); ?>assets/images/logo/simodal.png" />
						</div>
					</span>


					<div class="wrap-input100 validate-nip" data-validate="Check NIP">
						<input class="input100 " type="text" name="nip" id="nip" value="" autocomplete="off" />
						<span class="focus-input100" data-placeholder="NIP"></span>
					</div>

					<div class="wrap-input100 validate-password" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="fa fa-eye"></i>
						</span>
						<input class="input100" type="password" name="password" id="password" autocomplete="off" />
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>

					<div class="container-login200-form-btn">
						<div class="wrap-login200-form-btn">
							<div class="login200-form-bgbtn"></div>
							<button class="login200-form-btn" id="Login" name="Login">
								Login
							</button>
						</div>
					</div>

					<div class="container-login300-form-btn">
						<div class="container-login300-form-btn" style="text-align: center;">
							<div class="text-center p-t-115" style="margin-top: -5.5em;">
								<hr style="border-top: 1px solid #8c8b8b; margin-bottom: 0.5em;" />
								<span class="txt1" style="font-size: 16px;">
									<?= $nama_tim; ?> </span>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>

	<script src="<?= base_url(); ?>assets/login/js/sweetalert2.all.min.js"></script>
	<script src="<?= base_url(); ?>assets/login/vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="<?= base_url(); ?>assets/login/js/main.js"></script>


	<script type="text/javascript">
		$('#Login').click(function() {
			login_process();
		});
		$("#nip").keyup(function(event) {
			$("#nip").val($('#nip').val().replace(/['"]/g, ''));
			if (event.keyCode == 13) {
				login_process();
			}
		});
		$("#password").keyup(function(event) {
			$("#password").val($('#password').val().replace(/['"]/g, ''));
			if (event.keyCode == 13) {
				login_process();
			}
		});

		function login_process() {
			var nip = $('#nip').val();
			var password = $('#password').val();
			if (nip.length == 0) {
				$('.validate-nip').addClass('alert-validate');
				return false();
			}
			if (password.length == 0) {
				$('.validate-password').addClass('alert-validate');
				return false();
			}
			var string = "nip=" + nip + "&password=" + password;
			$.ajax({
				type: 'POST',
				url: "<?= base_url() ?>auth/cek_login",
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
		}
	</script>

	<script>
		function success_alert_confirm(title, msg) {
			Swal.fire({
				icon: 'success',
				title: title,
				text: msg,
				timer: 1500,
				footer: '<?= $nama_tim ?>',
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
				footer: '<?= $nama_tim ?>',
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
				footer: '<?= $nama_tim ?>'
			})
		}
	</script>

</body>

</html>