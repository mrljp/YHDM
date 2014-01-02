<?php

function quoteArray($arr)
{
	foreach($arr as $key => $value)
	{
		if (is_string($value))
			$arr[$key] = '"' . $value . '"';
	}
	return $arr;
}

class Database
{
	private	$db_host = 'localhost';	// DB host
	private $db_user = 'root';		// DB username
	private $db_pass = 'ljp15551';	// DB password
	private $db_name = 'test';		// DB to use
	private $dbh = null;			// DB connection handle
	private $connected = false;		// DB connected state
	private $result = array();		// Query results

	private function tableExists($table)
	{
		$stmt = $this->dbh->prepare('SHOW TABLES FROM ' . $this->db_name . ' LIKE "' . $table . '"');
		$stmt->execute();
		$tableList = $stmt->fetchAll();
		return (count($tableList) == 1);
	}
	
	public function getResult()
	{
		return $this->result;
	}

	public function connect()
	{
		if (!$this->connected)
		{
			try {
				$dsn = 'mysql:host=' . $this->db_host . ';dbname=' . $this->db_name;
				$this->dbh = new PDO($dsn, $this->db_user, $this->db_pass);
				$this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch(PDOException $e) {
				echo 'ERROR: ' . $e->getMessage();
				return false;
			}
			$this->connected = true;
		}
		return true;
	}

	public function disconnect()
	{
		$this->dbh = null;
		$this->connected = false;
		return true;
	}

	public function select($table, $rows = '*', $where = null, $order = null)
	{
		$this->result = array();
		$q = 'SELECT ' . $rows . ' FROM ' . $table;
		if (null != $where)
			$q .= ' WHERE ' . $where;
		if (null != $order)
			$q .= ' ORDER BY ' . $order;
		if ($this->tableExists($table))
		{
			$stmt = $this->dbh->prepare($q);
			if ($stmt->execute())
			{
				$rec = $stmt->fetchAll(PDO::FETCH_ASSOC);
				$this->result = $rec[0]; 
				return true;
			}
		}
		return false;
	}

	public function insert($table, $values, $cols = null)
	{
		$this->result = array();
		if ($this->tableExists($table))
		{
			try
			{
				$s = 'INSERT INTO ' . $table;
				if (null != $cols)
					$s .= ' (' . $cols . ')';

				$values = quoteArray($values);
				$valueList = implode(',', $values);
				$s .= ' VALUES (' . $valueList . ')';
				$stmt = $this->dbh->prepare($s);
				return ($stmt->execute());
			} catch(PDOException $e) {
				echo 'ERROR: ' . $e->getMessage();
				return false;
			}
		}
		else
			return false;
	}

	public function delete($table, $where = null)
	{
		$this->result = array();
		if($this->tableExists($table))
		{
			$delete = 'DELETE FROM ' . $table;
			if (null != $where)
				$delete .= ' WHERE ' . $where;

			$stmt = $this->dbh->prepare($delete);
			return ($stmt->execute());
		}
		return false;
	}

	public function update($table, $cols, $where)
	{
		$this->result = array();
		/*
			table = string - table name
			cols = array where key is column name and value is new value
			where = array where key is column name and value is value to match
		*/
		try
		{
			if (!$this->tableExists($table))
				throw new \Exception("No table found"); 

			// combine WHERE clause into single string
			$where = quoteArray($where);
			$t = array();
			foreach($where as $key => $value)
				$t[] = $key . "=" . $value;
			$w = implode(" AND ", $t);
			unset($t);

			// combine columns
			$cols = quoteArray($cols);
			$t = array();
			foreach($cols as $key => $value)
				$t[] = $key . "=" . $value;
			$c = implode(", ", $t);
			unset($t);
			
			// create query
			$update = 'UPDATE ' . $table . ' SET ' . $c . ' WHERE ' . $w;
			$stmt = $this->dbh->prepare($update);
			if(!$stmt->execute())
				throw new Exception('Unable to update: ' . $stmt->errorCode());
			if ($this->select($table, '*', $w))
				return $this->result;
			else 
				throw new \Exception("Did not update");
		}
		catch (Exception $e)
		{
			echo "Exception: " . $e;
			return null;
		}
	}

	public function listTable($table, $sort)
	{
		if ($this->tableExists($table))
		{
			if ($this->select($table, '*', '', $sort))
			{
				foreach ($this->result as $row) {
					echo $row['id'] . ': ' . $row['name'];
					echo '</br>';
				}
			}
		}
		return;
	}

	public function runTest()
	{

		/*
		$a = array('id' => 2, 'name' => 'Paul', 'email' => 'Mary');
		echo "Before quote:</br>";
		var_dump($a);
		echo "</br>After quote:</br>";
		$b = quoteArray($a);
		var_dump($b);
		echo "</br>Imploded</br>";
		foreach($b as $key => $value)
			$c[] = $key . "=" . $value;
		$s = implode (" AND ", $c);
		echo $s . "</br>";
		*/
		
		if (!$this->connect()) return;
		$this->listTable('donors', 'name ASC');
		echo '</br>';
		
		/*
		$this->insert('donors', array(0,'Will','will@zardoz.com'));
		$this->listTable('donors', 'name ASC');
		echo '</br>';

		$this->delete('donors', 'name = "Will"');
		$this->listTable('donors', 'name ASC');
		echo '</br>';
		*/

		$this->update('donors', array('email'=>'lay@zardoz.com'),
			array('name'=>'Yal'));
		$this->listTable('donors', 'name ASC');
		echo '</br>';

		$this->disconnect();
	}

}