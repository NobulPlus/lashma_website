import React from 'react'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Oops! Page not found.</h2>
      <p className="mt-2 text-gray-500">The page you're looking for doesn't exist.</p>

      {/* Illustration */}
      <img
        src="https://source.unsplash.com/500x300/?lost,road"
        alt="Not Found"
        className="mt-6 rounded-lg shadow-lg"
      />

      {/* Go Home Button */}
      <Link to="/" className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
        Go Home
      </Link>
    </div>
  )
}

export default PageNotFound