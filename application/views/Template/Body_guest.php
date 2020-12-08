<!DOCTYPE html>
<html class="no-js" lang="zxx">
<?= $_head; ?>

<body class="preloader-active" onload="startTime()">

    <!--== Scroll to top ==-->
    <a href="javascript:void(0)" class="scroll-top"><i class="fa fa-angle-up"></i></a>

    <!--== Start PreLoader Wrap ==-->
    <div class="preloader-area-wrap">
        <div class="spinner d-flex justify-content-center align-items-center h-100">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
    <!--== End PreLoader Wrap ==-->
    <?= $_navbar; ?>

    <!--== Start Page Content Wrapper ==-->
    <div class="page-wrapper mt-30 mb-30">
        <div id="port-wrap" class="container">
            <div class="row">
                <div class="col-md-12 shadow" style="border-radius: 15px;">
                    <br>
                    <?= $_content; ?>

                </div>
            </div>
        </div>
    </div>
    <!--== End Page Content Wrapper ==-->
    <?= $_footer; ?>