<?php

namespace App\Http\Controllers;

use App\Models\Postulacion;
use Illuminate\Http\Request;


class PostulacionController extends Controller
{
    public function index()
    {
        return Postulacion::all();
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
