<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Portofolio>
 */
class PortofolioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $portofolio = \App\Models\PortofolioCategory::count();
        $counter = floor($portofolio / 2);
        $portoCategory = [];

        for($i = 0; $i < $counter; $i++) {
            $portoCategory[] = \App\Models\PortofolioCategory::inRandomOrder()->first()->slug;
        }

        return [
            'id' => Str::uuid(),
            'name' => $this->faker->text(100),
            'image' => $this->faker->image('public/storage/uploads', 1920, 1080, null, false),
            'link' => $this->faker->url,
            'clientName' => $this->faker->name,
            'category' => $portoCategory,
            'video' => $this->faker->url,
            'description' => $this->faker->paragraph,
            'highlight' => $this->faker->sentence,
        ];
    }
}
