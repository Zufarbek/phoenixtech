$login = $_POST['login'];
$pass = $_POST['pass'];
$Email = $_POST['Email'];
$tel = $_POST['tel'];

$login = htmlspecialchars($login);
$pass = htmlspecialchars($pass);
$Email = htmlspecialchars($Email);
$tel = htmlspecialchars($tel);

$login = urldecode($login);
$pass = urldecode($pass);
$Email = urldecode($Email);
$tel = urldecode($tel);

$login = trim($login);
$pass = trim($pass);
$Email = trim($Email);
$tel = trim($tel);

echo $fio;
echo "<br>";
echo $email;