<?php
include 'conectar.php';

$request = "select * from juego";
$register = mysqli_query($con, $request) or die("Problema en select");
$result = mysqli_fetch_all($register, MYSQLI_ASSOC);

mysqli_close($con);
echo json_encode($result);
