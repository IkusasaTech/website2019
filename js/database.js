$(document).ready(function() {
    
    $('#contactUsFormSubmit').click(function() {
        alert("Test");
        var name = $('#name').val();
        var contact = $('#contact_no').val();
        var qualification = $('#qualification').val();
        var email = $('#email').val();
        var contact = $('#contact_no').val();
        var currentAcitivity = $('#current').val();
        var highest_grade = $('#highest').val();
        var compSubject = $('#comp_subject').val();
        var gender = $('#gender').val();
        
        var myData = { "name_surname": name, "contact_no": contact, "email": email , "interested_qualification": qualification,"current_activity": currentAcitivity,"hightst_grade": highest_grade,"computer_subject":compSubject, "gender": gender};
        console.log("Connected2");
        $.ajax({
            url: "database.php",
            type: "POST",
            data: myData,
            success: function(data, status, xhr) {
                console.log("Sent To DB");
            }
        });
        console.log("Connected3");

    });
});