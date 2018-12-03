<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class MailController extends Controller
{
    public function send(Request $request){
        try{
            Mail::send(new ContactMail(
                $request->input('subject'),
                $request->input('content')
            ));
        }catch( \Exception $e){
            report($e);
            return response($e, 404);
        }
        return response('success', 200);
    }
}
