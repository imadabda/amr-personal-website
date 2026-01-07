<?php
// stats.php - Manage Hero Stats and CV
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM stats WHERE id = 1");
    echo json_encode($stmt->fetch());
} 

elseif ($method === 'POST') {
    $data = JSON_decode(file_get_contents("php://input"), true);
    
    $fields = [];
    $params = [];
    
    if (isset($data['experience'])) { $fields[] = "experience = ?"; $params[] = $data['experience']; }
    if (isset($data['advertising'])) { $fields[] = "advertising = ?"; $params[] = $data['advertising']; }
    if (isset($data['projects'])) { $fields[] = "projects = ?"; $params[] = $data['projects']; }
    if (isset($data['cv_filename'])) { $fields[] = "cv_filename = ?"; $params[] = $data['cv_filename']; }
    
    if (count($fields) > 0) {
        $sql = "UPDATE stats SET " . implode(", ", $fields) . " WHERE id = 1";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        echo json_encode(["status" => "success"]);
    }
}
?>
