<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['msg'];

    // Instantiate PHPMailer
    $mail = new PHPMailer();

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com'; // Your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'your@example.com'; // Your SMTP username
    $mail->Password = 'your_password'; // Your SMTP password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Sender and recipient settings
    $mail->setFrom('your@example.com', 'Your Name'); // Sender email and name
    $mail->addAddress('groupfivespport@gmail.com'); // Recipient email

    // Email content
    $mail->isHTML(false);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "Name: $name\nEmail: $email\nPhone Number: $number\nMessage:\n$message";

    // Send email
    if ($mail->send()) {
        // Email sent successfully, redirect to home page
        header("Location: home.html");
        exit();
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "Access denied";
}
?>
