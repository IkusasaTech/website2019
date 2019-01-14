<?php
require 'PHPMailer-master/PHPMailerAutoload.php';
header('Content-Type: application/json');
$fname = $_POST['name'];
$lname = $_POST['surname'];
$mail = $_POST['email'];
$subject = $_POST['sub'];
$message = $_POST['mssg'];
$tel = $_POST['tel'];

$mail = new PHPMailer;
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.ikusasatech.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'thuli@ikusasatech.com';                 // SMTP username
$mail->Password = 'Mtho@21035';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to

$mail->setFrom($_POST['email'], $_POST['fname']);
// Add a recipient
$mail->addAddress('rseifi.a73@gmail.com');               // Name is optional


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = "$message Phone $tel";
$mail->AltBody = $message;
if(!$mail->send()) {
echo 'Message could not be sent.';
         echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
    echo 'Message has been sent';
    }
    ?>