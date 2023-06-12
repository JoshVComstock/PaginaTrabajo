<?php

namespace App\Http\Controllers;

use App\Models\Empresa;
use Illuminate\Http\Request;


class EmpresaController extends Controller
{
    public function index()
    {
        return Empresa::all();
    }
    public function store(Request $request)
    {
        $Emp=new Empresa();
        $Emp->nombre=$request->nombre;
        $Emp->direccion=$request->direccion;
        $Emp->telefono=$request->telefono;
        $Emp->email=$request->email;
        $Emp->save();
        return $Emp;
    }
    public function update(Request $request, $id)
    {
        $Emp=Empresa::find($id);
        $Emp->nombre=$request->nombre;
        $Emp->direccion=$request->direccion;
        $Emp->telefono=$request->telefono;
        $Emp->email=$request->email;
        $Emp->save();
        return $Emp;
    }
    public function destroy($id)
    {
        return Empresa::destroy($id);
    }
}
