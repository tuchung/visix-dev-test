<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('resume');
});

Route::post('/mail/send', 'MailController@send');

Route::get('/send', 'MailController@send');

// Route::get('/about', function () {
//     return view('about');
// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
