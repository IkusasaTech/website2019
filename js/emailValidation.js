//CONTACT FORM VALIDATION
$(document).ready(function() {

    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    //var testNumber = /^[0-9]{10}$/i;

    $('#modalContactForm #name').blur(function() {

        $('#modalContactForm #name').each(function() {

            $this = $(this);
            if (this.value != '') {
                successfulInput();
            } else {
                errorInput();
            }
        });
    });
    $('#modalContactForm #email').blur(function() {

        $('#modalContactForm #email').each(function() {

            $this = $(this);
            if (this.value != '' && testEmail.test($this.val())) {
                successfulInput();
            } else {
                errorInput();
            }
        });
    });
    /*$('#modalContactForm #phone').blur(function() {

        $('#modalContactForm #phone').each(function() {

            $this = $(this);
            if (this.value != '' && testNumber.test($this.val())) {
                successfulInput();
                $("#emailMessage").removeClass('invalid').addClass('valid').text('Your name is valid.');
            } else {
                errorInput();
                $("#emailMessage").addClass('invalid').removeClass('valid').text('Please add your name.');
            }
        });
    });*/
    $('#modalContactForm #message').blur(function() {

        $('#modalContactForm #message').each(function() {
            $this = $(this);
            if (this.value != '') {
                successfulInput();
            } else {
                errorInput();
            }
        });
    });

    function successfulInput() {
        $this.removeClass("invalid").addClass("valid");
    }

    function errorInput() {
        $this.addClass("invalid").removeClass("valid");

    }

    $('#contactUsFormSubmit').on('click', function() {
            alert('in');
            var data = {
                name: $("#name").val(),
                email: $("#email").val(),
                subject: $("#subject").val(),
                message: $("#message").val()
            };
            $.ajax({
                type: "POST",
                url: "email.php",
                data: data,
                success: function() {
                    $('#modalContactForm').modal('hide');
                    $('html, body').animate({ scrollTop: (0) }, '5000');
                    setTimeout(function() {
                        alert('success');
                    }, 500);
                }
            });
            alert('done');
            $('#name, #email, #subject, #message').removeClass("invalid").removeClass("valid");
            $('#name').val('').removeClass('valid');
            $('#email').val('').removeClass('valid');
            //$('#phone').val('').removeClass('valid');
            $('#message').val('').removeClass('valid');
            $('#modalContactForm form label').removeClass('active');

            return false;

      
    });
    $('#clientName').on('click', function() {
        $('#name').val($('#inputName').val());
        if ($('#name').val() == "") {
            $('#modalContactForm .md-form').eq(0).find('label').removeClass('active');
        } else {
            $('#modalContactForm .md-form').eq(0).find('label').addClass('active');
        }
    });
    $('.contact').click(function() {
        $('#modalContactForm').modal('show');
    });

    $('#pushDownNotifications').slideUp();
    setTimeout(function() {
        $('#pushDownNotifications').closest(".notification").removeClass("hide");
    }, 500);

    $('.close-Notification').on('click', function() {
        $('#pushDownNotifications').slideUp();
    });

});