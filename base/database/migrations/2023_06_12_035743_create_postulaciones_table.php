<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostulacionesTable extends Migration
{

    public function up()
    {
        Schema::create('postulacions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_usuarios')->constrained('usuarios')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_trabajos')->constrained('trabajos')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('postulacions');
    }
}
