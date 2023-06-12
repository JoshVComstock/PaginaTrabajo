<?php

namespace App\Http\Controllers;

use App\Models\Trabajo;
use Illuminate\Http\Request;


class TrabajoController extends Controller
{
    public function index()
    {
        return Trabajo::all();
    }
    public function store(Request $request)
    {
        $Trabajoes=new Trabajo();
        $Trabajoes->nombre=$request->nombre;

        $Trabajoes->save();
        return $Trabajoes;
    }
    public function update(Request $request, $id)
    {
        $Trabajoes=Trabajo::find($id);
        $Trabajoes->nombre=$request->nombre;
        $Trabajoes->save();
        return $Trabajoes;
    }
    public function destroy($id)
    {
        return Trabajo::destroy($id);
    }
}
