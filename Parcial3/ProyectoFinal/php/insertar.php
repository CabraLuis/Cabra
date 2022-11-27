<?php
$server = "localhost";
$database = "catalogo";
$user = "root";
$password = "";

$id = $_POST['juegoID'];
$nombre = $_POST['nombreID'];
$salida = $_POST['salidaID'];
$desarrollador = $_POST['desarrolladorID'];
$distribuidor = $_POST['distribuidorID'];
$clasificacion = $_POST['clasificacionID'];
$generos = $_POST['generoID'];
$modos = $_POST['modoID'];

$con = mysqli_connect($server,$user,$password,$database) or die("Error de conexión");
$insert = "INSERT INTO juego (id,nombre,salida,desarrollador,distribuidor,clasificacion,generos,modos) VALUES ($id,'$nombre',$salida,'$desarrollador','$distribuidor','$clasificacion','$generos','$modos')" or die("Error de insert");
$register = mysqli_query($con,$insert);

mysqli_close($con);
?>