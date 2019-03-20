
$(window).resize(function () {
    $("#DateCountdown").TimeCircles().rebuild();
});
$("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 0.5,
    "fg_width": 0.023333333333333334,
    "circle_bg_color": "#60686F",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#FFCC66",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#99CCFF",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#BBFFBB",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#FF9999",
            "show": true
        }
    }
});

/**Select All checkbox */
$(document).ready(function () {
    $("#Select_all").on("click", function () {

        $("#wifi_chk").prop("checked", true);
        $("#support_chk").prop("checked", true);
        $("#remote_chk").prop("checked", true);
        $("#repairs_chk").prop("checked", true);
        $("#refur_chk").prop("checked", true);
        $("#printer_chk").prop("checked", true);
        $("#cloud_chk").prop("checked", true);
        $("#desktop_chk").prop("checked", true);
        $("#main_chk").prop("checked", true);


    }),
        $("#send-support").click(function () {
            var services = [];
            $.each($("input[name='support']:checked"), function () {
                services.push($(this).val());
            });
            //alert("Selected Service(s) : " + services.join(", "));
        });

    $("#Select_all").on("click", function () {

        if (!$(this).prop("checked")) {
            $("#wifi_chk").prop("checked", false);
            $("#support_chk").prop("checked", false);
            $("#remote_chk").prop("checked", false);
            $("#repairs_chk").prop("checked", false);
            $("#refur_chk").prop("checked", false);
            $("#printer_chk").prop("checked", false);
            $("#cloud_chk").prop("checked", false);
            $("#desktop_chk").prop("checked", false);
            $("#main_chk").prop("checked", false);

        }
    });


});
/*==Online==*/
$(document).ready(function () {
    $("#Select_all1").on("click", function () {

        $("#engine_chk").prop("checked", true);
        $("#pay_chk").prop("checked", true);
        $("#social_chk").prop("checked", true);
        $("#content_chk").prop("checked", true);


    });
   


    $("#Select_all1").on("click", function () {

        if (!$(this).prop("checked")) {
            $("#engine_chk").prop("checked", false);
            $("#pay_chk").prop("checked", false);
            $("#social_chk").prop("checked", false);
            $("#content_chk").prop("checked", false);

        }
    });


});


/*==Audit==*/
$(document).ready(function () {
    $("#Select_all3").on("click", function () {
        $("#service_chk").prop("checked", true);
        $("#infra_chk").prop("checked", true);
        $("#audit_chk").prop("checked", true);
        $("#compliance_chk").prop("checked", true);
        $("#attacks_chk").prop("checked", true);


    });
    $("#send-Quotation").click(function () {
        var services = [];
        $.each($("input[name='serviceType']:checked"), function () {
            services.push($(this).val());
        });
        $('#checked').text(services.join(", "));
        //alert("Selected Service(s) : " + services.join(", "));
    });
    $("#Select_all3").on("click", function () {

        if (!$(this).prop("checked")) {
            $("#service_chk").prop("checked", false);
            $("#infra_chk").prop("checked", false);
            $("#audit_chk").prop("checked", false);
            $("#compliance_chk").prop("checked", false);
            $("#attacks_chk").prop("checked", false);

        }
    });

});


/**Form Validation==IT Audit */
$(document).ready(function () {


    $('#send-Quotation').on("click", function (e) {
        var services = [];
        $.each($("input[name='serviceType']:checked"), function () {
            services.push($(this).val());
        });
        $('#service').val(services.join(", "));
        if ($('#name_chk').val() != "" && $('#name_chk').val().length > 2) {
            var booking_email = $('#email_chk').val();
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(booking_email)) {
                if ($('#number_chk').val().match('[0-9]{10}') && $('#number_chk').val().length == 10) {
                    if ($("#Select_all3").prop("checked") || $("#service_chk").prop("checked")
                        || $("#infra_chk").prop("checked") || $("#audit_chk").prop("checked")
                        || $("#compliance_chk").prop("checked") || $("#attacks_chk").prop("checked")) {
                        var form = $('.service_form'),
                            form_data;

                        // Success function
                        function done_func() {
                            $('.flipping-form .wrapper').addClass('flipped');

                            setTimeout(function () {
                                $('.flipping-form .wrapper').removeClass('flipped');
                            }, 5000);
                            $('#name_chk,#email_chk,#number_chk').val("");
                            $("#Select_all3,#service_chk,#infra_chk,#audit_chk,#compliance_chk,#attacks_chk").prop("checked", false);
                        }


                        e.preventDefault();
                        form_data = $(form).serialize();
                        $.ajax({
                            type: 'POST',
                            url: form.attr('action'),
                            data: form_data
                        })
                            .done(done_func);


                    } else {
                        $('#message-Error').css("color", "#800000");
                        $('#message-Error').text("Select at least one service");
                        return false;
                    }
                } else {
                    $('#number_chk').css("color", "#800000");
                    $('#number_chk').val("Please enter correct number");
                    return false;
                }

            } else {
                $('#email_chk').css("color", "#800000");
                $('#email_chk').val("Please enter correct email");
                return false;
            }
        } else {
            $('#name_chk').css("color", "#800000");
            $('#name_chk').val("Please enter name");
            return false;
        }

    });


});

/**form validation== Support & Maintanance */
$(document).ready(function () {


    $('#send-support').on("click", function (e) {
        var services = [];
        $.each($("input[name='support']:checked"), function () {
            services.push($(this).val());
        });
        $('#service').val(services.join(", "));
        
        if ($('#name_chk').val() != "" && $('#name_chk').val().length > 2) {
            var booking_email = $('#email_chk').val();
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(booking_email)) {
                if ($('#number_chk').val().match('[0-9]{10}') && $('#number_chk').val().length == 10) {
                    if ($("#Select_all").prop("checked") || $("#remote_chk").prop("checked")
                        || $("#wifi_chk").prop("checked") || $("#repairs_chk").prop("checked")
                        || $("#support_chk").prop("checked") || $("#refur_chk").prop("checked")
                        || $("#printer_chk").prop("checked") || $("#cloud_chk").prop("checked")
                        || $("#desktop_chk").prop("checked") || $("#main_chk").prop("checked")) {
                        var form = $('.service_form'),
                            form_data;

                        // Success function
                        function done_func() {
                            $('.flipping-form .wrapper').addClass('flipped');

                            setTimeout(function () {
                                $('.flipping-form .wrapper').removeClass('flipped');
                            }, 5000);
                            $('#name_chk,#email_chk,#number_chk').val("");
                            $("#Select_all,#wifi_chk,#support_chk,#printer_chk,#desktop_chk,#remote_chk,#repairs_chk,#refur_chk,#cloud_chk,#main_chk").prop("checked", false);
                        }


                        e.preventDefault();
                        form_data = $(form).serialize();
                        $.ajax({
                            type: 'POST',
                            url: form.attr('action'),
                            data: form_data
                        })
                            .done(done_func);


                    } else {
                        $('#message-Error').css("color", "#800000");
                        $('#message-Error').text("Select at least one service");
                        return false;
                    }
                } else {
                    $('#number_chk').css("color", "#800000");
                    $('#number_chk').val("Please enter correct number");
                    return false;
                }

            } else {
                $('#email_chk').css("color", "#800000");
                $('#email_chk').val("Please enter correct email");
                return false;
            }
        } else {
            $('#name_chk').css("color", "#800000");
            $('#name_chk').val("Please enter name");
            return false;
        }

    });


});


/**form validation== Online Marketing */
$(document).ready(function () {


    $('#send-online').on("click", function (e) {
        var services = [];
        $.each($("input[name='online']:checked"), function () {
            services.push($(this).val());
        });

        $('#service').val(services.join(", "));
        if ($('#name_chk').val() != "" && $('#name_chk').val().length > 2) {
            var booking_email = $('#email_chk').val();
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(booking_email)) {
                if ($('#number_chk').val().match('[0-9]{10}') && $('#number_chk').val().length == 10) {
                    if ($("#Select_all1").prop("checked") || $("#pay_chk").prop("checked")
                        || $("#social_chk").prop("checked") || $("#content_chk").prop("checked")
                        || $("#engine_chk").prop("checked")) {
                        var form = $('.service_form'),
                            form_data;

                        // Success function
                        function done_func() {
                            $('.flipping-form .wrapper').addClass('flipped');

                            setTimeout(function () {
                                $('.flipping-form .wrapper').removeClass('flipped');
                            }, 5000);
                            $('#name_chk,#email_chk,#number_chk').val("");
                            $("#Select_all1,#social_chk,#engine_chk,#number_chk,content_chk").prop("checked", false);
                        }


                        e.preventDefault();
                        form_data = $(form).serialize();
                        $.ajax({
                            type: 'POST',
                            url: form.attr('action'),
                            data: form_data
                        })
                            .done(done_func);

                    } else {
                        $('#message-Error').css("color", "#800000");
                        $('#message-Error').text("Select at least one service");
                        return false;
                    }
                } else {
                    $('#number_chk').css("color", "#black !important");
                    $('#number_chk').val("Please enter correct number");
                    return false;
                }

            } else {
                $('#email_chk').css("color", "#black !important");
                $('#email_chk').val("Please enter correct email");
                return false;
            }
        } else {
            $('#name_chk').css("color", "#800000");
            $('#name_chk').val("Please enter name");
            return false;
        }

    });


});


/**form validation== intranet */
$(document).ready(function () {


    $('#send-intranet').on("click", function (e) {
        $('#service').val('Intranet');
        if ($('#name_chk').val() != "" && $('#name_chk').val().length > 2) {
            var booking_email = $('#email_chk').val();
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(booking_email)) {
                if ($('#number_chk').val().match('[0-9]{10}') && $('#number_chk').val().length == 10) {
                   
                        var form = $('.service_form'),
                            form_data;

                        // Success function
                        function done_func() {
                            $('.flipping-form .wrapper').addClass('flipped');

                            setTimeout(function () {
                                $('.flipping-form .wrapper').removeClass('flipped');
                            }, 5000);
                            $('#name_chk,#email_chk,#number_chk').val("");
                        }


                        e.preventDefault();
                        form_data = $(form).serialize();
                        $.ajax({
                            type: 'POST',
                            url: form.attr('action'),
                            data: form_data
                        })
                            .done(done_func);

                    
                } else {
                    $('#number_chk').css("color", "#800000");
                    $('#number_chk').val("Please enter correct number");
                    return false;
                }

            } else {
                $('#email_chk').css("color", "#800000 !important");
                $('#email_chk').val("Please enter correct email");
                return false;
            }
        } else {
            $('#name_chk').css("color", "#800000");
            $('#name_chk').val("Please enter name");
            return false;
        }

    });


});

/**form validation== lms */
$(document).ready(function () {
    $('#send-lms').on("click", function (e) {
        $('#service').val('Learning Management System');
        if ($('#name_chk').val() != "" && $('#name_chk').val().length > 2) {
            var booking_email = $('#email_chk').val();
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(booking_email)) {
                if ($('#number_chk').val().match('[0-9]{10}') && $('#number_chk').val().length == 10) {

                    var form = $('.service_form'),
                        form_data;

                    // Success function
                    function done_func() {
                        $('.flipping-form .wrapper').addClass('flipped');

                        setTimeout(function () {
                            $('.flipping-form .wrapper').removeClass('flipped');
                        }, 5000);
                        $('#name_chk,#email_chk,#number_chk').val("");
                    }


                    e.preventDefault();
                    form_data = $(form).serialize();
                    $.ajax({
                        type: 'POST',
                        url: form.attr('action'),
                        data: form_data
                    })
                        .done(done_func);

                } else {
                    $('#number_chk').css("color", "#800000");
                    $('#number_chk').val("Please enter correct number");
                    return false;
                }

            } else {
                $('#email_chk').css("color", "#800000 !important");
                $('#email_chk').val("Please enter correct email");
                return false;
            }
        } else {
            $('#name_chk').css("color", "#800000");
            $('#name_chk').val("Please enter name");
            return false;
        }

    });


});
/**form validation== CMS */
$(document).ready(function () {


    $('#send_crm').on("click", function (e) {
        $('#service').val('Customer Management System');
        if ($('#name_chk').val() != "" && $('#name_chk').val().length > 2) {
            var booking_email = $('#email_chk').val();
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(booking_email)) {
                if ($('#number_chk').val().match('[0-9]{10}') && $('#number_chk').val().length == 10) {

                    var form = $('.service_form'),
                        form_data;

                    // Success function
                    function done_func() {
                        $('.flipping-form .wrapper').addClass('flipped');

                        setTimeout(function () {
                            $('.flipping-form .wrapper').removeClass('flipped');
                        }, 5000);
                        $('#name_chk,#email_chk,#number_chk').val("");
                    }


                    e.preventDefault();
                    form_data = $(form).serialize();
                    $.ajax({
                        type: 'POST',
                        url: form.attr('action'),
                        data: form_data
                    })
                        .done(done_func);

                } else {
                    $('#number_chk').css("color", "#800000");
                    $('#number_chk').val("Please enter correct number");
                    return false;
                }

            } else {
                $('#email_chk').css("color", "#800000 !important");
                $('#email_chk').val("Please enter correct email");
                return false;
            }
        } else {
            $('#name_chk').css("color", "#800000");
            $('#name_chk').val("Please enter name");
            return false;
        }

    });


});
//Contact Form Validation
