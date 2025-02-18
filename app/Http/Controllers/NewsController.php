<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $news = News::with('user', 'category')->latest()->paginate(5);
        $categories = Category::limit(10)->get();

        $headlines = News::with('user', 'category')->limit(5)->get();
        return Inertia::render('Home', [
            'news' => $news,
            'categories' => $categories,
            'headlines' => $headlines,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news, $id)
    {
        $news = News::with('category', 'user')->findOrFail($id);
        $categories = Category::limit(10)->get();
        return Inertia::render('News', [
            'news' => $news,
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        //
    }
}
