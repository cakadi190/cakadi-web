<?php

namespace App\Http\Controllers\home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PortofolioController extends Controller
{
    /**
     * Display the index page of the portfolio.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function index(Request $request): \Inertia\Response
    {
        $portofolio = \App\Models\Portofolio::with('category', 'gallery')
            // ->where('status', 'published')
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
                $query->orWhere('clientName', 'like', "%{$search}%");
                $query->orWhere('description', 'like', "%{$search}%");
            })
            ->latest()->paginate($request->show ?? 12);

        return inertia('portofolio/index', compact('portofolio'))->withViewData([
            'title' => 'Portofolio',
            'pageDescription' => 'Inilah daftar portofolio yang sudah saya kerjakan akhir-akhir ini.',
        ]);
    }

    /**
     * Display the detail page of the portfolio.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Inertia\Response
     */
    public function show(Request $request, string $id): \Inertia\Response
    {
        $portofolio = \App\Models\Portofolio::with('category', 'gallery')
            ->find($id);

        if (!$portofolio) {
            abort(404);
        }

        return inertia('portofolio/show', compact('portofolio'));
    }
}
