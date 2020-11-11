<?php
 
	// Importing DBConfig.php file.
	include 'conexao.php';
	 
	// Creating connection.
	 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	 
	 // Getting the received JSON into $json variable.
	 $json = file_get_contents('php://input');
	 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
	 // Populate product name from JSON $obj array and store into $product_name.
	
	 
	// Populate product number from JSON $obj array and store into $product_number.
	
	 
	// Populate product details from JSON $obj array and store into $product_details.
	$nome = $obj['nome'];
	$email =  $obj['email'];
    $senha =  $obj['senha'];
	 
	 // Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "insert into users (name , password , email) values ('$nome','$senha','$email')";
	 
 
	 if(mysqli_query($con,$Sql_Query)){
	 
			 // If the record inserted successfully then show the message as response. 
			$MSG = 'Product Successfully Inserted into MySQL Database' ;
			 
			// Converting the message into JSON format.
			$json = json_encode($MSG);
			 
			// Echo the message on screen.
			// We would also show this message on our app.
			 echo $json ;
	 
	 }
	 else{
	 
			echo 'Something Went Wrong';
	 
	 }
	mysqli_close($con);
	
?>