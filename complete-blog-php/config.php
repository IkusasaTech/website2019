<?php 
	session_start();
	// connect to database
	$conn = mysqli_connect("pdb20.biz.nf", "2524212_blog", "Mtho@21035", "2524212_blog");

	if (!$conn) {
		die("Error connecting to database: " . mysqli_connect_error());
	}
    // define global constants
	define ('ROOT_PATH', realpath(dirname(__FILE__)));
	define('BASE_URL', 'https://ikusasatech.com/complete-blog-php/');
?>