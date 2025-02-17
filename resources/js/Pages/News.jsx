import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const News = ({ news, categories }) => {
  console.log(news)
  return (
        <GuestLayout categories={categories}>
      <Head title={news.title}/>
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{news.title}</h1>

        {/* Category & Date */}
        <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {news.category.name}
          </span>
          <span>{new Date(news.created_at).toLocaleDateString()}</span>
        </div>

        {/* Image Section */}
        {news.image && (
          <img
            // src={news.image}
            alt={news.title}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
          />
        )}

        {/* Content Section */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <p>{news.content}</p>
        </div>

        {/* Author Section */}
        <div className="mt-10 border-t pt-4 text-gray-500 text-sm">
          <p>Written by: <span className="font-semibold">{news.user.name}</span></p>
        </div>
      </div>
    </GuestLayout>
  );
};

export default News;