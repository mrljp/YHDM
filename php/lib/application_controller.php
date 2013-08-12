<?php
/**
 * @class ApplicationController
 */
class ApplicationController {
    public $request, $id, $params;

    /**
     * dispatch
     * Dispatch request to appropriate controller-action by convention according to the HTTP method.
     */
    public function dispatch($request) {
debug('In dispatch');
        $this->request = $request;
        $this->id = $request->id;
        $this->params = $request->params;
debug($request, true);

        if ($request->isRestful()) {
            return $this->dispatchRestful();
        }
        if ($request->action) {
            return $this->{$request->action}();
        }
    }

    protected function dispatchRestful() {
debug('In dispatchRestful');
debug($this->request, true);
		switch ($this->request->method) {
            case 'GET':
                return $this->view();
                break;
            case 'POST':
                return $this->create();
                break;
            case 'PUT':
                return $this->update();
                break;
            case 'DELETE':
                return $this->destroy();
                break;
        }
    }
}

