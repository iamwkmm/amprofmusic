<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ventas@amprofmusic.cl";
    $subject = "Nuevo mensaje de contacto";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Nombre: $name\n";
    $body .= "Correo Electrónico: $email\n\n";
    $body .= "Mensaje:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias, $name. Tu mensaje ha sido enviado correctamente.";
    } else {
        echo "Lo sentimos, hubo un error al enviar tu mensaje. Intenta nuevamente.";
    }
}
?>
