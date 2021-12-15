<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $conn = new mysqli("localhost", "root234", "Helpline12#", "reactform");
    $sql = "INSERT INTO userFeedback (name, email, feedback) VALUES ('". $_POST['name'] ."', '". $_POST['email'] ."', '". $_POST['feedback'] . "')";
    $result = $conn -> query($sql);

    if ($result) {
        echo json_encode(["sent" => 1]);
    } else {
        echo json_encode(["sent" => 0]);
    }
?>