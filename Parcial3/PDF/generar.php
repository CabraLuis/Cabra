<?php
include "fpdf185/fpdf.php";
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont("Arial", "", 30);
$pdf->SetY(10);
$pdf->SetX(5);

$nombre = $_POST['nombre'];
$fecha = date('d-m-y');
$cadena = "PDF generado por {$nombre} el {$fecha}";
$pdf->Cell(10, 10, $cadena);
$pdf->Output();
