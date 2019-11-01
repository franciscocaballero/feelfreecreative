<?php

    if (isset($_POST['submit'])) {

        $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $mailTo = 'caballerofrancisco22@yahoo.com';
    
    $headers = "From: " .$email;

    $txt = "You have recived a e-mail from".$name.".\n\n".$message;
    
    main($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>