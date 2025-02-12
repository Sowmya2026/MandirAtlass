<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Example credentials (usually you'd query a database)
    $valid_username = "admin";
    $valid_password = "password123";

    // Check login credentials
    if ($username == $valid_username && $password == $valid_password) {
        echo "<script>alert('Login successful!'); window.location.href = 'dashboard.php';</script>";
    } else {
        echo "<script>alert('Invalid credentials. Please try again.'); window.location.href = 'index.html';</script>";
    }
}
?>
