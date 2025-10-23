import React from 'react';
import { Head } from '@inertiajs/react';

export default function NotFound({ status, message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <Head title="404 Not Found" />
      <h1 className="text-6xl font-bold mb-4">{status || 404}</h1>
      <p className="text-2xl mb-6">{message || "The page you're looking for doesn't exist."}</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
      >
        Go Back Home
      </a>
    </div>
  );
}
