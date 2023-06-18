<?php

namespace App\Http\Controllers;

use App\Models\Trabajo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TrabajoController extends Controller
{
    public function index()
    {
        return DB::select("SELECT t.nombre,e.nombre as empresa,t.descripcion,t.estado,t.fecha FROM trabajos as t, empresas as e WHERE t.id_empresas=e.id");
    }
    public function store(Request $request)
    {
        $Trabajoes = new Trabajo();
        $Trabajoes->nombre = $request->nombre;
        $Trabajoes->descripcion=$request->descripcion;
        $Trabajoes->id_empresas = $request->id_empresas;
        $Trabajoes->estado = $request->estado;
        $Trabajoes->fecha = $request->fecha;
        $Trabajoes->save();
        return $Trabajoes;
    }
    public function update(Request $request, $id)
    {
        $Trabajoes = Trabajo::find($id);
        $Trabajoes->nombre = $request->nombre;
        $Trabajoes->descripcion=$request->descripcion;
        $Trabajoes->id_empresas = $request->id_empresas;
        $Trabajoes->estado = $request->estado;
        $Trabajoes->fecha = $request->fecha;
        $Trabajoes->save();
        return $Trabajoes;
    }
    public function destroy($id)
    {
        return Trabajo::destroy($id);
    }
}
