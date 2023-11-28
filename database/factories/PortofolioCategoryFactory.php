<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PortofolioCategory>
 */
class PortofolioCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => Str::random(10),
            'name' => $this->faker->text(20),
            'slug' => Str::slug($this->faker->text(20)),
            'description' => $this->faker->text(255),
            'background' => $this->faker->hexColor,
            'is_active' => $this->faker->boolean,
        ];
    }
}
