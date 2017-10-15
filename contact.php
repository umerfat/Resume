<?php

if (isset($_POST['email'])){

    $email_to = "vakadu10@gmail.com";
    $email_subject = "Thank you for contacting me";

    function died($error){

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])){

        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $message = $_POST['message'];

    $error_message = "";
    if (strlen($error_message) > 0){
        died($error_message);
    }

    $email_message = "Form details below. \n\n";

    function clean_string($string){
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad, "", $string);
    }

    $error_message .= "Name: " . clean_string($name) . "\n";
    $error_message .= "Email: " . clean_string($email) . "\n";
    $error_message .= "Message: " . clean_string($message) . "\n";

    $headers = 'From: ' . $email . "\r\n" . 'Reply-To: ' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $error_message, $headers);

    ?>

    <div style="text-align:center;">Thank you for contacting us. We will be in touch with you very soon.</div>

<?php
}
?>
