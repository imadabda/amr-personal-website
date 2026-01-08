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
    
    $allowed_fields = [
        'experience', 'advertising', 'projects', 'cv_filename',
        'hero_title', 'hero_subtitle', 'hero_description',
        'about_title', 'about_heading', 'about_description', 'about_bullets',
        'contact_email', 'contact_phone'
    ];
    
    $fields = [];
    $params = [];
    
    foreach ($allowed_fields as $field) {
        if (isset($data[$field])) {
            $fields[] = "$field = ?";
            $params[] = $data[$field];
        }
    }
    
    if (count($fields) > 0) {
        $sql = "UPDATE stats SET " . implode(", ", $fields) . " WHERE id = 1";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "No valid fields provided"]);
    }
}
?>
