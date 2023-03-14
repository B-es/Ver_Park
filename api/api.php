<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-type: text/plain');

require_once('../vendor/autoload.php');
$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();

function compileMessage($alt){
    $name = $_POST['name'];
    $number = $_POST['number'];
    $date = $_POST['date'];
    $age_r = $_POST['age_r'];
    $count_r = $_POST['count_r'];
    $time_r = $_POST['time_r'];

    if($alt) return "Имя - $name\nНомер - $number\nДата - $date\n\nВозраст - $age_r\nКоличество - $count_r\n" .
    "Продолжительность - $time_r";

    else return "Имя - $name<br>Номер - $number<br>Дата - $date<br><br>Возраст - $age_r<br>Количество - $count_r<br>" .
    "Продолжительность - $time_r";

    
}
 
function sendEmail(){
    $mail = new PHPMailer(true);   

    try {
        $mail->CharSet = "utf-8";
        //Server settings
        $mail->setLanguage('ru', '../vendor/phpmailer/phpmailer/language/'); // Перевод на русский язык
       
        //Enable SMTP debugging
        // 0 = off (for production use)
        // 1 = client messages
        // 2 = client and server messages
        $mail->SMTPDebug = 1;                                 // Enable verbose debug output
    
        $mail->isSMTP();                                      // Set mailer to use SMTP
       
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
    
        //$mail->SMTPSecure = 'ssl';                          // secure transfer enabled REQUIRED for Gmail
        //$mail->Port = 465;                                  // TCP port to connect to
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to
       
        $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
        $mail->Username = $_ENV["EMAIL"];               // SMTP username
        $mail->Password = $_ENV['PASSWORD'];                         // SMTP password
    
        //Recipients
        $mail->setFrom($_ENV["EMAIL"], 'Танзания');
        $mail->addAddress($_ENV["EMAIL"]);              // Name is optional
    
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = "Заявка";
        echo compileMessage(false);
        $mail->AltBody = compileMessage(true);
        $mail->Body = compileMessage(false);
       
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}               

function sendBot(){
    $text = compileMessage(true);

    $getQuery = array(
        "chat_id" 	=> $_ENV["chatID"],
        "text"  	=> $text,
        "parse_mode" => "html"
    );
    $ch = curl_init("https://api.telegram.org/bot". $_ENV["TOKEN"] ."/sendMessage?" . http_build_query($getQuery));

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_exec($ch);
    curl_close($ch);
}

sendEmail();
sendBot();

?>

