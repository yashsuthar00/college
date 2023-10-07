<?php
    if(isset($_REQUEST['name']) && $_REQUEST['name']!=null)
    {
        $value=$_REQUEST['name'];
        setcookie('name',$value,time()+3600);
        header('Location:home.php');
    }
    elseif(isset($_REQUEST['password']) && $_REQUEST['password']!=null)
    {
        $value=$_REQUEST['password'];
        setcookie('password',$value,time()+3600);
        header('Location:home.php');
    }
    else
    {
        header('Location:index.php');
    }

?>

    
