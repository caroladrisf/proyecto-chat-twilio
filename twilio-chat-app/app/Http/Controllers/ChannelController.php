<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;

class ChannelController extends Controller
{
    private $SID = "ACeed044fba727613dfb5e7e783a4aad98";
    private $TOKEN = "12bae4dd3e0092849a5bde648c483ff0";

    public function index(Request $request) {
        $client = new Client($this->SID, $this->TOKEN);
        
        $service = $request->session()->get('service_sid');

        if ($service) {
            $channels = $client->chat->v2->services($service)->channels->read();
            if ($channels) {
                echo $channels[0]->sid;
            }
        }
    }
}
