<?php
// config.php - Database Configuration
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Detect environment
$isLocal = ($_SERVER['REMOTE_ADDR'] === '127.0.0.1' || $_SERVER['REMOTE_ADDR'] === '::1' || $_SERVER['HTTP_HOST'] === 'localhost:8081');

if ($isLocal) {
    // Local SQLite Database
    $db_file = __DIR__ . '/database.sqlite';
    try {
        $pdo = new PDO("sqlite:$db_file");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "SQLite connection failed: " . $e->getMessage()]);
        exit;
    }
} else {
    // Hostinger Database Credentials
    $host = "localhost"; 
    $dbname = "u515868829_shendy"; 
    $username = "u515868829_shendy";    
    $password = "Shendy2026"; 

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "MySQL connection failed: " . $e->getMessage()]);
        exit;
    }
}
?>
