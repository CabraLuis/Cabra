<?php
include 'conectar.php';

$id = $_POST['juegoID'];
$nombre = $_POST['nombreID'];
$salida = $_POST['salidaID'];
$desarrollador = $_POST['desarrolladorID'];
$distribuidor = $_POST['distribuidorID'];
$clasificacion = $_POST['clasificacionID'];
$generos = $_POST['generoID'];
$modos = $_POST['modoID'];

$update = "UPDATE juego SET nombre='$nombre',salida='$salida',desarrollador='$desarrollador',distribuidor='$distribuidor',clasificacion='$clasificacion',generos='$generos',modos='$modos' WHERE id=$id";
$register = mysqli_query($con, $update);

mysqli_close($con);
