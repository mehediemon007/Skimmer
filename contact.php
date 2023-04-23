<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the email recipient address
  $to = 'youremail@example.com';

  // Set the email subject
  $subject = 'New contact form submission';

  // Build the email message
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";

  // Set the email headers
  $headers = "From: $email\r\nReply-To: $email\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200); // success status code
  } else {
    http_response_code(500); // error status code
  }
}
?>
