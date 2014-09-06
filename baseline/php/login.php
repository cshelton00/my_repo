<?php

session_start();

$connection = mysqli_connect('localhost', 'root', 'root', 'web102') or die ("Error " . mysqli_error($connection));

$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM users where username='{$username}' and  password='{$password}' ;";
$result= $connection->query($query);


  if ($result->num_rows > 0){
      $_SESSION['user_auth'] =  true;
      echo "logged_in";
  } else {
      $_SESSION['user_auth'] = false;
      session_destroy();
      echo "logged_out";
  }





