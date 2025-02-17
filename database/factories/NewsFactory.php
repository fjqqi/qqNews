<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence, // Generate a fake sentence for the title
            'content' => $this->faker->paragraphs(3, true), // Generate 3 paragraphs of content
            'image' => $this->faker->imageUrl(640, 480, 'news', true), // Generate a fake image URL
            'user_id' => User::factory(), // Associate with a fake user
            'category_id' => Category::factory(), // Associate with a fake category
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'), // Random date within the past year
            'updated_at' => $this->faker->dateTimeBetween('-1 year', 'now'), // Random date within the past year
        ];
    }
}
