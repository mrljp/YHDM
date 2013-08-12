<?php
    require('init.php');
debug('app started');

    // Get Request
    $request = new Request(array('restful' => true));

    // Get Controller
 debug('Request controller: '.$request->controller);
    require(dirname(__FILE__).'/app/controllers/' . $request->controller . '.php');
    $controller_name = ucfirst($request->controller);
    $controller = new $controller_name;
if($controller)
	debug('Got controller');
else
	debug('No got controller');
debug('Request: '.$controller->dispatch($request));

    // Dispatch request
    echo $controller->dispatch($request);

