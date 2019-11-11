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

// Home
Route::get('/', 'HomeController@index')->name('home');

// Sobre
Route::get('/sobre', 'SobreController@index')->name('sobre');

// Trabalho
Route::get('/trabalho/{id}', 'TrabalhoController@index')->name('trabalho');

// Upload
Route::get('/upload', 'UploadController@index')->name('upload');