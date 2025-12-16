 <?php

$nameErr = $emailErr = $passwordErr = $confirmPasswordErr = "";
$name = $email = $password = $confirmPassword = "";
$success = false;


$file = 'user.json';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Trim inputs
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirmPassword'] ?? '';

    if ($name === '') $nameErr = "Name is required";

    if ($email === '') {
        $emailErr = "Email is required";
    } elseif (strpos($email, '@') === false || !preg_match('/\.com$/i', $email)) {
        $emailErr = "Email must contain @ and end with .com";
    }

    if ($password === '') {
        $passwordErr = "Password is required";
    } else {
        if (strlen($password) < 6) $passwordErr .= "Password must be at least 6 characters. ";
        if (!preg_match('/[@!#]/', $password)) $passwordErr .= "Password must contain at least one special character (@, !, #).";
    }

    if ($confirmPassword === '') {
        $confirmPasswordErr = "Please confirm your password";
    } elseif ($password !== $confirmPassword) {
        $confirmPasswordErr = "Passwords do not match";
    }

    if ($nameErr === "" && $emailErr === "" && $passwordErr === "" && $confirmPasswordErr === "") {

        if (file_exists($file)) {
            $jsonData = file_get_contents($file);
            $users = json_decode($jsonData, true);
            if (!is_array($users)) $users = [];
        } else {
            $users = [];
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $newUser = [
            "name" => $name,
            "email" => $email,
            "password" => $hashedPassword
        ];

        $users[] = $newUser;

        file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

        $success = true;

        $name = $email = $password = $confirmPassword = "";
    }

?>

