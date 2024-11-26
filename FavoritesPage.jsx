// src/components/FavoritesPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "./favoritesSlice";
import { Link } from "react-router-dom";

export const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <header className="bg-black text-center p-6 shadow-lg">
                <h1 className="text-3xl font-bold text-red-500">Favorites</h1>
                <div className="flex space-x-4 items-center">
                    <Link to="/Home" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-400">
                        Go to Home
                    </Link>
                </div>
            </header>

            <div className="container mx-auto p-6">
                {favorites.length === 0 ? (
                    <p className="text-gray-400 text-center">No favorites added yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {favorites.map((car) => (
                            <div
                                key={car.id}
                                className="bg-gray-900 p-6 rounded-lg shadow-lg"
                            >
                                <h2 className="text-xl font-bold mb-2 text-red-500">
                                    {car.make} {car.model}
                                </h2>
                                <button
                                    onClick={() => dispatch(removeFavorite(car))}
                                    className="bg-red-500 mt-3 px-4 py-2 rounded text-white"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
