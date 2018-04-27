<?php
error_reporting(0);
?>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$a = $_POST[name];
$b = $_POST[email];
// PASSWORD IS STORED IN MD5 and SHA1 FOR BETTER SECURITY
$c = sha1(md5($_POST[password]));

if ($a == null || $b == null || $c == null) {
	echo "Please enter your credentials correctly!";
} else {
	$sql = "INSERT INTO details (name, email, password) VALUES ('$_POST[name]', '$_POST[email]', '$c')";

	echo "You are successfully registered, now you can login with your credentials \n";

}

if (mysqli_query($conn, $sql)) {
    echo "Registered Successfully!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>