<?php
 
// Importing DBConfig.php file.
include 'conexao.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.

if($usuario = $obj['usuario']!=''){
    $usuario = $obj['usuario'];
} else{
    $usuario = "111111111";
}
// Populate Password from JSON $obj array and store into $password.
if($senha = $obj['senha']!=''){
    $senha = $obj['senha'];
} else{
    $senha = "111111111";
}
//Applying User Login query with email and password match.
$Sql_Query = "select * from users where email = '$usuario' and password = '$senha' ";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));


if(isset($check)){


 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($check['id']);
 
// Echo the message.
 echo $SuccessLoginJson ; 

 }
 
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG= 'Invalid Username or Password Please Try Again' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>