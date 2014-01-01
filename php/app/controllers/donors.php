<?php
/**
 * @class Donors
 * A simple application controller extension
 */
class Donors extends ApplicationController {
    /**
     * view
     * Retrieves rows from database.
     */
    public function view() {
        $res = new Response();
        $res->success = true;
        $res->message = "Loaded data";
		$res->data = Donor::all();
        return $res->to_json();
    }
    /**
     * create
     */
    public function create() {
        $res = new Response();
        $rec = Donor::create($this->params);
        if ($rec) {
            $res->success = true;
            $res->message = "Created new Donor" . $rec->id;
            $res->data = $rec->to_hash();
        } else {
            $res->message = "Failed to create Donor";
        }
        return $res->to_json();
    }
    /**
     * update
     */
    public function update() {
        $res = new Response();
        $rec = Donor::update($this->id, $this->params);
        if ($rec) {
            $res->data = $rec->to_hash();
            $res->success = true;
            $res->message = 'Updated Donor ' . $this->id;
        } else {
            $res->message = "Failed to find that Donor";
        }
        return $res->to_json();
    }
    /**
     * destroy
     */
    public function destroy() {
        $res = new Response();
        if (Donor::destroy($this->id)) {
            $res->success = true;
            $res->message = 'Destroyed Donor ' . $this->id;
        } else {
            $res->message = "Failed to destroy Donor";
        }
        return $res->to_json();
    }
}

