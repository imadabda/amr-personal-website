<?php
// portfolio.php - CRUD for Portfolio Items
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM portfolio ORDER BY created_at DESC");
    echo json_encode($stmt->fetchAll());
} 

elseif ($method === 'POST') {
    $data = JSON_decode(file_get_contents("php://input"), true);
    
    if (isset($data['title']) && isset($data['image'])) {
        $stmt = $pdo->prepare("INSERT INTO portfolio (title, category, tag, image) VALUES (?, ?, ?, ?)");
        $stmt->execute([$data['title'], $data['category'], $data['tag'], $data['image']]);
        echo json_encode(["status" => "success", "id" => $pdo->lastInsertId()]);
    } else {
        echo json_encode(["status" => "error", "message" => "Missing fields"]);
    }
} 

elseif ($method === 'DELETE') {
    $id = $_GET['id'];
    if ($id) {
        $stmt = $pdo->prepare("DELETE FROM portfolio WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(["status" => "success"]);
    }
}
?>
