<?php
namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class UsuarioController extends Controller
{

    public function index()
    {
        return Usuario::all();
    }

    public function register(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'apellidopaterno' => 'required',
            'apellidomaterno' => 'required',
            'carnet' => 'required',
            'email' => 'required|email|unique:users',
            'telefono' => 'required',
            'id_roles' => 'required',
            'contraseña' => 'required|confirmed'
        ]);

        $User = new Usuario();
        $User->nombre = $request->nombre;
        $User->apellidopaterno = $request->apellidopaterno;
        $User->apellidomaterno = $request->apellidomaterno;
        $User->fecha_nacimiento = $request->fecha_nacimiento;
        $User->carnet = $request->carnet;
        $User->email = $request->email;
        $User->telefono = $request->telefono;
        $User->id_roles = $request->id_roles;
        $User->contraseña = Hash::make($request->contraseña);
        $User->save();
        return response()->json([
            "status" => 1,
            "msg" => "Registro exitoso",
        ]);
    }
    public function login(Request $request)
    { $request->validate([ "email" => "required|email", "password" => "required"
        ]);
        $user = Usuario::where("email", "=", $request->email)->first();
        if (isset($user->id)) {
            if (Hash::check($request->password, $user->password)) {
                //get user
                $userData = DB::select("select id, nombre, apellidopaterno,apellidomaterno,fecha_nacimiento,carnet, email, telefono, id_roles from usuarios where email = '$request->email'");
                //crear tokem
                $token = $user->createToken("auth_token")->plainTextToken;
                return response()->json([
                    "status" => 1,
                    "msg" => "Usuario logeado",
                    "access_token" => $token,
                    "user" => $userData,
                ]);
            } else {
                return response()->json([
                    "status" => 0,
                    "msg" => "Password es incorrecto",
                ], 404);
            }
        } else {
            return response()->json([
                "status" => 0,
                "msg" => "Usuario no registrado",
            ], 404);
        };
    }
    public function userProfile()
    {
        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil del usuario",
            "data" => auth()->user()
        ]);
    }

    public function Logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            "status" => 0,
            "msg" => "Cierre de seccion",
        ]);
    }
}
