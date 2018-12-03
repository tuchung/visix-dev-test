<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    public $subject;
    public $content;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subject = null, $content = null)
    {
        $this->content = $content ?? "Some one were just testing this";
        $this->subject = $subject ?? "Message From User";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('tu.chung.mock@gmail.com')
                ->to('tuthienchung@gmail.com')
                ->subject($this->subject)
                ->view('mail.message',['content' => $this->content]);
    }
}
