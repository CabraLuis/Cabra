<?php
$id = $_POST['juegoID'];

$server = "localhost";
$database = "catalogo";
$user = "root";
$password = "";

$con = mysqli_connect($server,$user,$password,$database) or die("Error de conexión");
$request = "select * from juegos where id=$id";
$register = mysqli_query($con,$request) or die("Problema en select");
$result = mysqli_fetch_all($register);

mysqli_close($con);
echo json_encode($result);
?>  