<!-- Input(logout.php):- -->

<?php
    setcookie('name','',time()-3600);
    setcookie('password','',time()-3600);
    header('Location:index.php');
?>