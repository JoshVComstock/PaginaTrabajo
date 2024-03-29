<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RolController extends Controller

{
    public function metget(){
        return Rol::all();
    }
    
    public function index()
    {
        return DB::select("SELECT u.id ,u.nombre,u.apellidopaterno,u.apellidomaterno,u.fecha_nacimiento,u.carnet,u.telefono,u.email,u.password,r.nombre as rol FROM usuarios as u, rols as r WHERE u.id_roles=r.id");
    }
    public function store(Request $request)
    {
        $roles=new Rol();
        $roles->nombre=$request->nombre;
        $roles->save();
        return $roles;
    }
    public function update(Request $request, $id)
    {
        $roles=Rol::find($id);
        $roles->nombre=$request->nombre;
        $roles->save();
        return $roles;
    }
    public function destroy($id)
    {
        return Rol::destroy($id);
    }
}
