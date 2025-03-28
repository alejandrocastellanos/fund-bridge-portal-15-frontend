import { Link } from "react-router-dom";
import React from "react";

const ThankYou: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-2xl font-semibold text-ftpurple">Thank You!</h1>
            <p className="text-gray-600 mt-2">
                We appreciate your donation. We will reach out to you in the next few days.
            </p>
            <Link
                to="/"
                className="mt-4 bg-ftpurple text-white px-4 py-2 rounded hover:bg-ftpurple-dark transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}

export default ThankYou;
