<?php

namespace Database\Factories;

use App\Models\Portofolio;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => Str::uuid(),
            'name' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'image' => $this->faker->image('public/storage/uploads', 1920, 1080, "Animals", false),
            'link' => $this->faker->url(),
            'portofolio_id' => (new Portofolio())->inRandomOrder()->first()->id,
            'height' => 1080,
            'width' => 1920,
        ];
    }
}
