<?php
require_once 'PHPMailer-master/PHPMailerAutoload.php';

$yourName = $_POST['name'];
	$yourEmail = $_POST['email'];
	$subject = $_POST['subject'];
	$yourMessage = $_POST['message'];


  $from = $yourEmail;
  $to = "info@ikusasatech.com";
  $subject = "Contact US Form from: " . $yourName;
  $text = "Find the form";
  $html = "Message: " . $yourMessage ;
  $crlf = "\n";

  // create a new Mail_Mime for use
  $mime = new Mail_mime($crlf);
  // define body for Text only receipt
  $mime->setTXTBody($text);
  // define body for HTML capable recipients
  $mime->setHTMLBody($html);

  // specify a file to attach below, relative to the script's location if not using an attachment, comment these lines out set appropriate MIME type for attachment you are using below, if applicable for reference see http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types

  //$file = $cv;
 // $mimetype = $cv;
  //$mime->addAttachment($file, $mimetype);

  // specify the SMTP server credentials to be used for delivery if using a third party mail service, be sure to use their hostname
  $host = "mail.ikusasatech.com";
  $username = "thuli@ikusasatech.com";
  $password = "Mtho@21035";

  $headers = array ('From' => $from,
    'To' => $to,
    'Subject' => $subject);
  $smtp = Mail::factory('smtp',
    array ('host' => $host,
      'auth' => true,
      'username' => $username,
      'password' => $password));


  $body = $mime->get();
  $headers = $mime->headers($headers);

  $mail = $smtp->send($to, $headers, $body);

   $dbhost = 'pdb20.biz.nf';
      $dbuser = '2524212_ikusasa';
      $dbpass = 'Mtho@21035';
      $conn = mysql_connect($dbhost, $dbuser, $dbpass);

      if(! $conn ) {
         die('Failed to connect: ' . mysql_error());
      }

   

      $sql = "INSERT INTO users_tbl ".
         "(userName,userEmail,userMessage) ".
         "VALUES"."('$yourName','$yourEmail','$yourMessage')";

      mysql_select_db('2524212_ikusasa');
      $retval = mysql_query( $sql, $conn );
      
      if(! $retval ) {
         die('Could not enter data: ' . mysql_error());
      }

      echo "Entered data successfully\n";
      mysql_close($conn);
      
 if($mail){
    mail($yourEmail,'Auto Reply','Thank you for contacting us we will get back to you asap to your message: ' . $yourMessage,'From: info@ikusasatech.com');
  }
  if (PEAR::isError($mail)) {
    echo("
    " . $mail->getMessage() . "
    ");
  } else {
    echo("
    Message successfully sent!
    ");
    $message2 = "Sent successfully";
  }

?>



