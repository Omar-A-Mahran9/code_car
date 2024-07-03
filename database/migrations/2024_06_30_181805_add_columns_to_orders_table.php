<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('old_order_id')->nullable();
            $table->foreign(['old_order_id'])->references(['id'])->on('orders')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->boolean('edited')->default(false);
            $table->unsignedBigInteger('edited_by')->nullable();
            $table->foreign(['edited_by'])->references(['id'])->on('employees')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            //
        });
    }
}
