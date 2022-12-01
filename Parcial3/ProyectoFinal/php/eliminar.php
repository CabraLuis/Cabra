<?php
include 'conectar.php';

$id = $_POST['idConsultar'];

$request = "DELETE FROM juego where id=$id";
$register = mysqli_query($con,$request) or die("Problema en select");
$result = mysqli_fetch_array($register,MYSQLI_ASSOC );

mysqli_close($con);
echo json_encode($result);
?>