<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Delete all files in the directory.
     *
     * @param string $target
     * @return void
     */
    public function resetDir(string $target): void
    {
        # Truncating File
        $disk = Storage::disk('public');
        $disk->deleteDirectory($target);

        # Make Folder
        $disk->makeDirectory($target);
    }

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        # Reset Directory
        $this->resetDir('uploads');

        # Seeders
        \App\Models\User::factory(10)->create();
        \App\Models\PortofolioCategory::factory(20)->create();
        \App\Models\Portofolio::factory(30)->create();
        \App\Models\Gallery::factory(30)->create();
    }
}
