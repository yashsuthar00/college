<?php
    session_start();
    echo "Using Session<br>";
    echo "Hello ".$_SESSION['name'];
?>

<br>

<a href="logout.php">Logout</a>