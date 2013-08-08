<?php
require_once('PhpConsole.php');
PhpConsole::start();

	$username = "root";
	$password = "ljp15551";
	$input = "Zed";
	
	class Donor {
		public $id;
		public $name;
		public $email;
		
		public function donor_info()
		{
			return 'Donor ' . $this->id . ': ' . $this->name . ' ' . $this->email;
		}
	}
		
	// Connect
	try {
		$conn = new PDO('mysql:host=localhost;dbname=test', $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		$stmt = $conn->prepare('SELECT * FROM donors');
		$stmt->execute();
		$stmt->setFetchMode(PDO::FETCH_CLASS, 'Donor');
		
		while ($user = $stmt->fetch()){
				echo $user->donor_info();
				echo '</br>';
			}

	} catch(PDOException $e) {
		echo 'ERROR: ' . $e->getMessage();
	}
	
	echo "</br>DONE";
?>
