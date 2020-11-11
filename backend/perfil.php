<?php
 
	// Importing DBConfig.php file.
	include 'conexao.php';
	 
	// Creating connection.
	 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	 
    $id = $_GET['id'];   
	 
	 // Creating SQL query and insert the record into MySQL database table.
     $sql = "select * from users where email = '$id' ";
	 
     $result = $con->query($sql);
	 if ($result->num_rows >0) {
 
 
		while($row[] = $result->fetch_assoc()) {
		
		$item = $row;
		
		$json = json_encode($item);
		
		}
		
	   } else {
		echo "No Results Found.";
	   }
		echo $json;
?>