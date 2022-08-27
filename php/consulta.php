<?php

    $nombre=$_POST["nombre"];
    $telefono=$_POST["telefono"];
    $email=$_POST["email"];
    $consulta=$_POST["consulta"];

    $mensaje="La  siguiente consulta fue enviada por: " . $nombre . "\r\n";
    $mensaje="Telefono: " . $telefono . "\r\n" . "Email: ". $email;
    $mensaje="Su consulta es: " . "\r\n" . $consulta;


    $Asunto="Consulta desde la pagina";

    $para="cuevatomass02@gmail.com";

    mail($para,$Asunto,utf8_decode($mensaje));

    header('Location:../pages/consultaexitosa.html')


?>