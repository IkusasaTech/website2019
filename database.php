<?php
   if(isset($_GET['contactUsFormSubmit'])) {
      $dbhost = 'pdb20.biz.nf';
      $dbuser = '2524212_ikusasa';
      $dbpass = 'Mtho@21035';
      $conn = mysql_connect($dbhost, $dbuser, $dbpass);

      if(! $conn ) {
         die('Failed to connect: ' . mysql_error());
      }

      $uName_surname = $_GET['name'];
      $uEmail = $_GET['email'];
      $uContact = $_GET['contact'];
      $uInterested = $_GET['qualification'];
      $uCurrentActivity = $_GET['current_act'];
      $uHigh = $_GET['hightst_grd'];
      $uCurrentActivity = $_GET['current_act'];
      $uHigh = $_GET['hightst_grd'];
      $uCompSub = $_GET['compSubject'];
      $uGender = $_GET['gender'];

      $sql = "INSERT INTO youth_users".
         "(name_suname,contact_no,email,interested_qualification,current_activity,hightst_grade,computer_subject,gender) ".
         "VALUES"."('$uName_surname','$uContact','$uEmail','$uInterested','$uCurrentActivity','$uHigh','$uCompSub','$uGender')";

      mysql_select_db('2524212_ikusasa');
      $retval = mysql_query( $sql, $conn );
      
      if(! $retval ) {
         die('Could not enter data: ' . mysql_error());
      }

      echo "Entered data successfully\n";
      mysql_close($conn);
   }
?>