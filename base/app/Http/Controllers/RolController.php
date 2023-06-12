<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function index()
    {
        return Rol::all();
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
