
<?php
$adress = $_POST['adress'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$adress = htmlspecialchars($adress);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$adress = urldecode($adress);
$email = urldecode($email);
$phone = urldecode($phone);
$adress = trim($adress);
$email = trim($email);
$phone = trim($phone);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("vova.buzz@gmail.com", "Заявка с сайта", "ФИО:".$adress.". E-mail: ".$email" . Phone: "$phone"  ,"From: ".$email" \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>