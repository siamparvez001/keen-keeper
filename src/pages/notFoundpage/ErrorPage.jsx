import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">

            <h1 className="text-8xl md:text-9xl font-bold text-green-900">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                Oops! Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 text-center max-w-md">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 bg-green-900 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default ErrorPage;