<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});
Route::get('tasksList/{q?}','taskController@index');
Route::get('/tasksList','taskController@index');
Route::post('/tasksList','taskController@store');
Route::get('/tasks/edit/{id}','taskController@edit');
Route::patch('/tasks/edit/{id}','taskController@update');
Route::delete('tasks/{id}','taskController@destroy');

