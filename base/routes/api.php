<?php

use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\PostulacionController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\TrabajoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('usuarios', [UsuarioController::class, 'index']);
Route::post('register', [UsuarioController::class, 'register']);
Route::post('login', [UsuarioController::class, 'login']);
Route::get('registeruser', [UsuarioController::class, 'Userregister']);

Route::group(['middleware' => ["auth:sanctum"]], function () {
    Route::get('users-profile', [UsuarioController::class, 'userProfile']);
    Route::get('logout', [UsuarioController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/empresa', [EmpresaController::class, 'index']);
Route::post('/empresa', [EmpresaController::class, 'store']);
Route::put('/empresa/{id}', [EmpresaController::class, 'update']);
Route::delete('/empresa/{id}', [EmpresaController::class, 'destroy']);

Route::get('/postulacion', [PostulacionController::class, 'index']);
Route::post('/postulacion', [PostulacionController::class, 'store']);
Route::put('/postulacion/{id}', [PostulacionController::class, 'update']);
Route::delete('/postulacion/{id}', [PostulacionController::class, 'destroy']);

Route::get('/rol', [RolController::class, 'index']);
Route::post('/rol', [RolController::class, 'store']);
Route::put('/rol/{id}', [RolController::class, 'update']);
Route::delete('/rol/{id}', [RolController::class, 'destroy']);

Route::get('/trabajo', [TrabajoController::class, 'index']);
Route::post('/trabajo', [TrabajoController::class, 'store']);
Route::put('/trabajo/{id}', [TrabajoController::class, 'update']);
Route::delete('/trabajo/{id}', [TrabajoController::class, 'destroy']);
