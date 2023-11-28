<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('portofolios', function (Blueprint $table) {
            $table->string('id')->primary()->unique();
            $table->timestamps();

            $table->dateTime('published_at')->nullable()->default((new DateTime())->format('Y-m-d H:i:s'));
            $table->string('name');
            $table->string('image');
            $table->string('link');
            $table->string('clientName');
            $table->string('category');
            $table->string('video');
            $table->longText('description');
            $table->string('highlight');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portofolios');
    }
};
