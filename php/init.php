<?php
    // base framework
    require(dirname(__FILE__).'/lib/PhpConsole.php');
    PhpConsole::start();
    
    session_start();

    require(dirname(__FILE__).'/lib/database.php');
    require(dirname(__FILE__).'/lib/application_controller.php');
    require(dirname(__FILE__).'/lib/model.php');
    require(dirname(__FILE__).'/lib/request.php');
    require(dirname(__FILE__).'/lib/response.php');

    // require /models (Should iterate app/models and auto-include all files there)
    require(dirname(__FILE__).'/app/models/donor.php');

    // Open a database connection
    $dbh = new Database();
    if (!$dbh->connect())
    	echo 'ERROR';


