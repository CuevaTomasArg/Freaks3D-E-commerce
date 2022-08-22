<?php
$nombre=$_POST["nombre"];
$email=$_POST["email"];
$celular=$_POST["celular"];
$street=$_POST["street"];
$num=$_POST["num"];
$prov=$_POST["prov"];
$departamento=$_POST["dpto"];
$ciudad=$_POST["localidad"];
$postalCod=$_POST["codP"];
$comprobante=$_POST["comprobante"];
$CodTransaccion=$_POST["transaccion"];

$mensaje="Datos de envío" . "\r\n" . "nombre:" . $nombre . "\r\n";
$mensaje="Email:" . $email . "\r\n" . "Calle donde vive:" . $street . "-" . $num . "\r\n";
$mensaje="Departamento:" . $departamento . "\r\n" . "Localidad:" . $ciudad. "\r\n";
$mensaje="Codigo postal:" . $postalCod . "\r\n" . "Comprobante:" . $comprobante. "\r\n";
$mensaje="Codigo de transacción:" . $CodTransaccion;

$Asunto="Pedido de compra";

$para="cuevatomass02@gmail.com";

mail($para,$Asunto,utf8_decode($mensaje));

header('Location:../pages/agradecimiento.html')

?>