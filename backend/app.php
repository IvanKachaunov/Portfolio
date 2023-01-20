<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    $conn = new mysqli('localhost', 'root', '', 'personalportfolioforminfo');
    if($conn->connect_error){
        die("Connection failed: " .$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into registration(name, email, text)values(?, ?, ?)");
        $stmt->bind_param("sssssi" ,$name, $email, $text);
        $stmt->execute();
        echo "registration successfully";
        $stmt->close();
        $conn->close();
    }
?>