<?php

namespace App\Http\Controllers;

use App\Models\Postulacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostulacionController extends Controller
{
    public function index()
    {
       return DB::select("SELECT p.id, t.nombre,t.descripcion,e.nombre as empresa,u.nombre as usuario,p.created_at FROM postulacions as p, trabajos as t, empresas as e, usuarios as u WHERE p.id_trabajos=t.id and t.id_empresas=e.id AND u.id=p.id_usuarios");
    }
    public function store(Request $request)
    {
        $postul=new Postulacion();
        $postul->id_usuarios=$request->id_usuarios;
        $postul->id_trabajos=$request->id_trabajos;
        $postul->save();
        return $postul;
    }
    public function update(Request $request, $id)
    {
        $postul=Postulacion::find($id);
        $postul->id_usuarios=$request->id_usuarios;
        $postul->id_trabajos=$request->id_trabajos;
        $postul->save();
        return $postul;
    }
    public function destroy($id)
    {
        return Postulacion::destroy($id);
    }
}
