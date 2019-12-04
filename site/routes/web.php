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
// Perfil do Usuário
Route::get('/upload/perfil', 'PerfilController@index')->name('perfil');
// Trabalhos do Usuário
Route::get('/upload/trabalhos', 'TrabalhosController@index')->name('trabalhos');
// Enviar novo trabalho
Route::get('/upload/novotrabalho', 'NovoTrabalhoController@index')->name('novotrabalho');
// Aceitar novo Usuário
Route::get('/upload/novocadastro', 'NovoCadastroController@index')->name('aceitarnovocadastro');
// Aceitar novo trabalho
Route::get('/upload/aceitarnovotrabalho', 'AceitarNovoTrabalhoController@index')->name('aceitarnovotrabalho');

// Rotas de autenticação
Auth::routes();