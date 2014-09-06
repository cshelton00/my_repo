<?php

$connection = mysqli_connect('localhost', 'root', 'root', 'web102') or die ("Error " . mysqli_error($connection));

 $firstname = mysqli_real_escape_string ($connection, $_POST['first-name']);
$lastname = mysqli_real_escape_string ($connection, $_POST['last-name']);
$username = mysqli_real_escape_string ($connection, $_POST['username']);
$password = mysqli_real_escape_string ($connection, $_POST['password']);
$email = mysqli_real_escape_string ($connection, $_POST['email']);



$query = "INSERT INTO users (first_name, last_name, username, password, email) VALUES  ( '{$firstname}' , '{$lastname}' , '{$username}' , '{$password}' , '{$email}')";
$results = $connection->query($query);


