<?php

/**
 * @class Donors
 * A simple application controller extension
 */
class DonorsController extends BaseController
{

    /**
     * view
     * Retrieves rows from database.
     */
    public function view()
    {
        $res = new Response();
        $res->success = true;
        $res->message = "Loaded data";
        $res->data = DonorModel::all();
        return $res;
    }

    /**
     * create
     */
    public function create()
    {
        $res = new Response();
        $rec = DonorModel::create($this->params);
        if ($rec) {
            $res->success = true;
            $res->message = "Created new Donor" . $rec->id;
            $res->data = $rec->to_hash();
        } else {
            $res->message = "Failed to create Donor";
        }
        return $res;
    }

    /**
     * update
     */
    public function update()
    {
        $res = new Response();
        $rec = DonorModel::update($this->id, $this->params);
        if ($rec) {
            $res->data = $rec->to_hash();
            $res->success = true;
            $res->message = 'Updated Donor ' . $this->id;
        } else {
            $res->message = "Failed to find that Donor";
        }
        return $res;
    }

    /**
     * destroy
     */
    public function destroy()
    {
        $res = new Response();
        if (DonorModel::destroy($this->id)) {
            $res->success = true;
            $res->message = 'Destroyed Donor ' . $this->id;
        } else {
            $res->message = "Failed to destroy Donor";
        }
        return $res;
    }
}

