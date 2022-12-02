<?php
include 'conectar.php';

$id = $_POST['idConsultar'];

$request = "DELETE FROM juego where id=$id";
$register = mysqli_query($con,$request) or die("Problema en select");

mysqli_close($con);
?>