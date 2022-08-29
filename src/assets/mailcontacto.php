<?php
	require 'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/SMTP.php';

    $nombre=$_POST['nombre'];
    $telefono=$_POST['telefono'];
    // $direccion=$_POST['direccion'];
    $email=$_POST['email'];
    $asunto=$_POST['asunto'];
    $mensaje=$_POST['mensaje'];

    if ($_POST['g-recaptcha-response'] == '') {
		echo "Captcha invalido";
		} else {
		$obj = new stdClass();
		$obj->secret = "6LdiFeAfAAAAAPYyabyvPJwWaV9ThFefe_r_jdev";
		$obj->response = $_POST['g-recaptcha-response'];
		$obj->remoteip = $_SERVER['REMOTE_ADDR'];
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		
		$options = array(
		'http' => array(
		'header' => "Content-type: application/x-www-form-urlencoded\r\n",
		'method' => 'POST',
		'content' => http_build_query($obj)
		)
		);
		$context = stream_context_create($options);
		$result = file_get_contents($url, false, $context);
		
		$validar = json_decode($result);
		
		/* FIN DE CAPTCHA */
		if ($validar->success) {
			$mail = new PHPMailer\PHPMailer\PHPMailer();
			$mail->IsSMTP(); // enable SMTP
			$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
			$mail->SMTPAuth = true; // authentication enabled
			$mail->SMTPSecure = 'TLS'; // secure transfer enabled REQUIRED for Gmail
			$mail->Host = "mail.grupobaudelet.com";		
			$mail->Port = 587; // 587 or 465 
			$mail->CharSet = 'UTF-8'; 
			$mail->IsHTML(true);
			$mail->Username = "grupobaudelet\\5419069"; 
			$mail->Password = "Edqawsrf1";
			$mail->SetFrom("informaticaem@elmejor.com.py");
			$mail->Subject = "Solicitud de ". $asunto. " desde la Web";
			$mail->Body = "Nombre y Apellido: " . $nombre ."<br>". "Email: " . $email ."<br>"." Solicitud de ". $asunto."<br>". "Mensaje: " . $mensaje;
			$mail->AddAddress("gestiondetalento@elmejor.com.py");
			$mail->Send();
			header("Location: ../contact.html?enviado=1"); 
			} else {
			echo "Captcha invalido";
			}
		}
			
?>