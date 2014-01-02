<?php
require ('init.php');

// Get Request (for now, assume RESTful)
$request = new Request(array('restful' => true));

// route the request to the right place
$controller_name = ucfirst($request->controller) . 'Controller';
if (class_exists($controller_name)) {
    $controller = new $controller_name();
    $result = $controller->dispatch($request);
    
    $view_name = ucfirst($request->format) . 'View';
    if(class_exists($view_name)) {
        $view = new $view_name();
        $view->render($result);
    }
}

