<?php
// base framework
session_start();

require (dirname(__FILE__) . '/lib/Database.php');
require (dirname(__FILE__) . '/lib/Request.php');
require (dirname(__FILE__) . '/lib/Response.php');

spl_autoload_register('apiAutoload');
function apiAutoload($classname)
{
    if (preg_match('/[a-zA-Z0-9]+Controller$/', $classname)) {
        include __DIR__ . '/controllers/' . $classname . '.php';
        return true;
    } elseif (preg_match('/[a-zA-Z0-9]+Model$/', $classname)) {
        include __DIR__ . '/models/' . $classname . '.php';
        return true;
    } elseif (preg_match('/[a-zA-Z0-9]+View$/', $classname)) {
        include __DIR__ . '/views/' . $classname . '.php';
        return true;
    }
}

// Open a database connection
$dbh = new Database();
if (! $dbh->connect())
    echo 'ERROR';


