<?php
session_start();
if(isset($_REQUEST['name']) && $_REQUEST['name']!=null)
{
    $_SESSION['name']=$_REQUEST['name'];
    header('Location:home.php');
}
elseif(isset($_REQUEST['password']) && $_REQUEST['password']!=null)
{
    $_SESSION['password']=$_REQUEST['password'];
    header('Location:home.php');
}
else
{
    header('Location:index.php');
}
?>
    