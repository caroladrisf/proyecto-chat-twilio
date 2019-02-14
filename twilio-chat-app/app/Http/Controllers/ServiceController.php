<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;

class ServiceController extends Controller
{
    private $SID = "ACeed044fba727613dfb5e7e783a4aad98";
    private $TOKEN = "12bae4dd3e0092849a5bde648c483ff0";

    private $client = null;

    /* public function sid() {
        $sid = $request->session()->get('service_sid');
        
        if ($sid) {
            return $sid;
        } else {
            return get();
        }
    } */

    public function create(Request $request, $friendlyName = 'chat-service') {
        $service = $this->get($request);

        if ($service === null) {
            $this->client = new Client($this->SID, $this->TOKEN);
            
            $service = $this->client->chat->v2->services->create($friendlyName);
            
            $request->session()->put('service_sid', $service->sid);
            
            return $service->sid;
        }
        return $service;
    }

    public function get(Request $request) {
        $client = new Client($this->SID, $this->TOKEN);

        $services = $client->chat->v2->services->read();

        if ($services) {
            $request->session()->put('service_sid', $services[0]->sid);
            return $services[0]->sid;
        } else {
            return null;
        }
    }
}
