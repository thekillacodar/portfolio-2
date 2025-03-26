<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure to include the PHPMailer library

$errors = [];
$errorMessage = '';
$successMessage = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST['Name']));
    $email = strip_tags(trim($_POST['Email']));
    $subject = strip_tags(trim($_POST['Subject']));
    $message = strip_tags(trim($_POST['Message']));

    // Validate form fields
    if (empty($name)) {
        $errors[] = 'Name is empty';
    }
    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }
    if (empty($subject)) {
        $errors[] = 'Subject is empty';
    }
    if (empty($message)) {
        $errors[] = 'Message is empty';
    }

    // If no errors, send email
    if (empty($errors)) {
        $mail = new PHPMailer(true);
        try {
            // Configure PHPMailer
            $mail->isSMTP();
            $mail->Host = 'smtp.example.com'; // Your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'your_email@example.com'; // Your SMTP username
            $mail->Password = 'your_smtp_password'; // Your SMTP password
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            // Set email parameters
            $mail->setFrom($email, $name);
            $mail->addAddress('bigdaddymac4u23@gmail.com'); // Recipient email
            $mail->Subject = $subject;
            $mail->Body = "Name: {$name}\nEmail: {$email}\nMessage: {$message}";

            // Send the email
            $mail->send();
            $successMessage = "Thank you for contacting us!";
        } catch (Exception $e) {
            $errorMessage = "Oops, something went wrong. Please try again later.";
        }
    } else {
        $errorMessage = implode('<br>', $errors);
    }
}
?>