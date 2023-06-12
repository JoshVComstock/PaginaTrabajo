<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'apellidopaterno',
        'apellidomaterno',
        'fecha_nacimiento',
        'carnet',
        'telefono',
        'email',
        'contraseña',
        'id_roles',
    ];
}
