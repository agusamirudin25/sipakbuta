<div class="page-header d-flex justify-content-between">
    <h4 class="page-title">Agenda Kegiatan</h4>
    <button class="btn btn-primary btn-sm" id="tambah_agenda">Tambah Agenda</button>
</div>
<div id="calendarIO"></div>
<div class="modal fade" id="create_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form class="form-horizontal" method="POST" action="POST" id="form_create">
                <input type="hidden" name="id_agenda" value="0" id="id_agenda">
                <div class="modal-header" style="display: block !important;">
                    <button type=" button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">Tambah Agenda Kegiatan</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <div class="alert alert-danger" style="display: none;"></div>
                    </div>
                    <div class="form-group">
                        <label for="nama">Nama kegiatan</label>
                        <input type="text" class="form-control input-pill" id="nama" placeholder="Nama Kegiatan" name="nama" required>
                    </div>
                    <div class="form-group">
                        <label for="lokasi">Lokasi</label>
                        <select name="lokasi" class="form-control input-pill" required>
                            <option value="">Pilih Lokasi</option>
                            <?php foreach ($lokasi as $data) : ?>
                                <option value="<?= $data->id_lokasi ?>"><?= $data->nama_lokasi ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tanggal">Tanggal kegiatan</label>
                        <input type="date" class="form-control input-pill" id="tanggal" placeholder="Tanggal" name="tanggal" required>
                    </div>
                    <div class="form-group">
                        <label for="jam">Jam</label>
                        <input type="time" class="form-control input-pill" id="jam" placeholder="jam" name="jam" required>
                    </div>

                    <div class="form-group">
                        <label for="warna">Warna</label>
                        <select name="warna" class="form-control input-pill" required>
                            <option value="">Pilih warna</option>
                            <option style="color:#00af50;" value="#00af50">&#9724; Green</option>
                            <option style="color:#f1c344;" value="#f1c344">&#9724; Yellow</option>
                            <option style="color:#1c97ca;" value="#1c97ca">&#9724; Blue</option>
                        </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <a href="javascript::void" class="btn default" data-dismiss="modal">Batal</a>
                    <a class="btn btn-danger delete_calendar" style="display: none; color:white">Hapus</a>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="<?= base_url() ?>assets/js/core/jquery.3.2.1.min.js"></script>
<script src="<?= base_url() ?>assets/js/plugin/moment/moment.min.js"></script>
<script src="<?= base_url() . 'assets/plugins/fullcalendar.js'; ?>"></script>
<script type="text/javascript">
    var get_data = '<?php echo $get_data; ?>';
    var backend_url = '<?php echo base_url(); ?>';
    console.log(get_data);
    $(document).ready(function() {
        $('#calendarIO').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek'
            },
            defaultDate: moment().format('YYYY-MM-DD'),
            editable: true,
            eventLimit: true,
            selectable: true,
            selectHelper: true,
            // select: function(start) {
            //     clear();
            //     $('#create_modal input[name=tanggal]').val(moment(start).format('YYYY-MM-DD'));
            //     $('#create_modal').modal('show');
            //     save();
            //     $('#calendarIO').fullCalendar('unselect');
            // },
            droppable: false,
            eventClick: function(event, element) {
                detail(event);
                editData(event);
                deleteData(event);
            },
            events: JSON.parse(get_data),
            displayEventTime: false
        });

    });

    $(document).on('click', '#tambah_agenda', function() {
        $('#create_modal input[name=id_agenda]').val(0);
        clear();
        $('#create_modal .alert').hide();
        $('#create_modal').modal('show');
    });
    // fungsi tambah data
    $(document).on('submit', '#form_create', function() {
        var element = $(this);
        var eventData;
        $.ajax({
            url: backend_url + 'Agenda/simpanAgenda',
            type: element.attr('method'),
            data: element.serialize(),
            dataType: 'JSON',
            beforeSend: function() {
                element.find('button[type=submit]').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>');
            },
            success: function(data) {
                if (data.status) {
                    eventData = {
                        id_agenda: data.id,
                        title: $('#create_modal input[name=jam]').val() + ' ' + $('#create_modal input[name=nama]').val(),
                        start: moment($('#create_modal input[name=tanggal]').val()).format('YYYY-MM-DD'),
                        end: moment($('#create_modal input[name=tanggal]').val()).format('YYYY-MM-DD'),
                        color: $('#create_modal select[name=warna]').val(),
                        lokasi: $('#create_modal select[name=lokasi]').val(),
                        jam: $('#create_modal input[name=jam]').val()
                    };
                    $('#calendarIO').fullCalendar('renderEvent', eventData, true);
                    $('#create_modal').modal('hide');
                    element[0].reset();
                } else {
                    element.find('.alert').css('display', 'block');
                    element.find('.alert').html(data.notif);
                }
                element.find('button[type=submit]').html('Simpan');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                element.find('button[type=submit]').html('Submit');
                element.find('.alert').css('display', 'block');
                element.find('.alert').html('Wrong server, please save again');
            }
        });
        return false;
    });

    function save() {
        $('#form_create').submit(function() {
            var element = $(this);
            console.log(element);
            var eventData;
            $.ajax({
                url: backend_url + 'Agenda/simpanAgenda',
                type: element.attr('method'),
                data: element.serialize(),
                dataType: 'JSON',
                beforeSend: function() {
                    element.find('button[type=submit]').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>');
                },
                success: function(data) {
                    if (data.status) {
                        eventData = {
                            id_agenda: data.id,
                            title: $('#create_modal input[name=jam]').val() + ' ' + $('#create_modal input[name=nama]').val(),
                            start: moment($('#create_modal input[name=tanggal]').val()).format('YYYY-MM-DD'),
                            end: moment($('#create_modal input[name=tanggal]').val()).format('YYYY-MM-DD'),
                            color: $('#create_modal select[name=warna]').val(),
                            lokasi: $('#create_modal select[name=lokasi]').val(),
                            jam: $('#create_modal input[name=jam]').val()
                        };
                        $('#calendarIO').fullCalendar('renderEvent', eventData, true); // stick? = true
                        $('#create_modal').modal('hide');
                        element[0].reset();
                        $('.notification').removeClass('alert-danger').addClass('alert-primary').find('p').html(data.notif);
                    } else {
                        element.find('.alert').css('display', 'block');
                        element.find('.alert').html(data.notif);
                    }
                    element.find('button[type=submit]').html('Simpan');
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    element.find('button[type=submit]').html('Simpan');
                    element.find('.alert').css('display', 'block');
                    element.find('.alert').html('Wrong server, please save again');
                }
            });
            return false;
        })
    }

    function detail(event) {
        $('#create_modal input[name=id_agenda]').val(event.id_agenda);
        $('#create_modal input[name=nama]').val(event.title.replace(event.title.substr(0, 6), ''));
        $('#create_modal input[name=tanggal]').val(moment(event.start).format('YYYY-MM-DD'));
        $('#create_modal select[name=lokasi]').val(event.lokasi);
        $('#create_modal select[name=warna]').val(event.color);
        $('#create_modal input[name=jam]').val(event.jam);
        $('#create_modal .delete_calendar').show();
        $('#create_modal').modal('show');
    }

    function clear() {
        $('#create_modal input[name=id_agenda]').val('');
        $('#create_modal input[name=nama]').val('');
        $('#create_modal input[name=tanggal]').val('');
        $('#create_modal select[name=lokasi]').val('');
        $('#create_modal select[name=warna]').val('');
        $('#create_modal input[name=jam]').val('');
        $('#create_modal .alert').hide();
        $('#create_modal .delete_calendar').hide();
    }

    function editData(event) {
        $('#form_create').submit(function() {
            var element = $(this);
            // console.log(element.serialize());
            // return false;
            var eventData;
            $.ajax({
                url: backend_url + 'Agenda/ubahAgenda',
                type: element.attr('method'),
                data: element.serialize(),
                dataType: 'JSON',
                beforeSend: function() {
                    element.find('button[type=submit]').html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>');
                },
                success: function(data) {
                    if (data.status) {
                        event.id_agenda = $('#create_modal input[name=id_agenda]').val()
                        event.title = $('#create_modal input[name=jam]').val().substr(0, 5) + ' ' + $('#create_modal input[name=nama]').val();
                        event.start = moment($('#create_modal input[name=tanggal]').val()).format('YYYY-MM-DD');
                        event.end = moment($('#create_modal input[name=tanggal]').val()).format('YYYY-MM-DD');
                        event.color = $('#create_modal select[name=warna]').val();
                        event.lokasi = $('#create_modal select[name=lokasi]').val();
                        event.jam = $('#create_modal input[name=jam]').val().substr(0, 5);
                        $('#calendarIO').fullCalendar('updateEvent', event);

                        $('#create_modal').modal('hide');
                        element[0].reset();
                        $('#create_modal input[name=id_agenda]').val(0)
                        $('.notification').removeClass('alert-danger').addClass('alert-primary').find('p').html(data.notif);
                    } else {
                        element.find('.alert').css('display', 'block');
                        element.find('.alert').html(data.notif);
                    }
                    element.find('button[type=submit]').html('Simpan');
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    element.find('button[type=submit]').html('Simpan');
                    element.find('.alert').css('display', 'block');
                    element.find('.alert').html('Wrong server, please save again');
                }
            });
            location.href = "<?= base_url('agenda') ?>";
            return false;
        })
    }

    function deleteData(event) {
        $('#create_modal .delete_calendar').click(function() {
            $.ajax({
                url: backend_url + 'Agenda/hapusAgenda',
                type: 'POST',
                data: 'id_agenda=' + event.id_agenda,
                dataType: 'JSON',
                beforeSend: function() {},
                success: function(data) {
                    if (data.status) {
                        $('#calendarIO').fullCalendar('removeEvents', event._id);
                        $('#create_modal').modal('hide');
                        $('#form_create')[0].reset();
                        $('#create_modal input[name=id_kegiatan]').val(0)
                        $('.notification').removeClass('alert-danger').addClass('alert-primary').find('p').html(data.notif);
                    } else {
                        $('#form_create').find('.alert').css('display', 'block');
                        $('#form_create').find('.alert').html(data.notif);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $('#form_create').find('.alert').css('display', 'block');
                    $('#form_create').find('.alert').html('Wrong server, please save again');
                }
            });
        })
    }
</script>