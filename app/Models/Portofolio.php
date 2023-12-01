<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Staudenmeir\EloquentJsonRelations\HasJsonRelationships;

class Portofolio extends Model
{
    use HasFactory, HasJsonRelationships;

    /**
     * Boot the Portofolio model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string) Str::uuid();
        });
    }

    /**
     * Indicates whether the primary key is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The Portofolio model.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Retrieves the portofolio category.
     *
     * @return array
     */
    public function category()
    {
        return $this->belongsToJson(PortofolioCategory::class, 'category', 'slug');
    }

    /**
     * Get the gallery for the portfolio.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function gallery()
    {
        return $this->hasMany(Gallery::class, 'portofolio_id', 'id');
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'updated_at' => 'datetime:Y-m-d H:i:s',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'published_at' => 'datetime:Y-m-d H:i:s',
        'id' => 'string',
        'category' => 'json',
    ];
}
