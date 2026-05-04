import React from 'react'

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-4">
        <a
          href="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600"
        >
          Go Home
        </a>
        <button
          onClick={() => window.history.back()}
          className="border px-6 py-3 rounded-xl hover:bg-gray-100"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

 

export default Notfound