// src/components/Home.jsx
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "./favoritesSlice";
import { Link } from "react-router-dom";

export const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    const fetchData = async () => {
        if (!search.trim()) {
            setErrorMessage("Please enter a car model to search.");
            return;
        }

        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/cars", {
                headers: { "X-Api-Key": "RaubxjcV5bx1629vAE5yrw==SEciCK1e3wm0LMCB" },
                params: { model: search },
            });

            if (response.data.length > 0) {
                setData(response.data);
                setErrorMessage("");
            } else {
                setData([]);
                setErrorMessage("No cars found. Please try another search.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage("An error occurred while fetching the data. Please try again.");
        }
    };

    const handleChange = (event) => setSearch(event.target.value);
    console.log(data);
    

    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <header className="bg-black text-center p-6 shadow-lg">
                <h1 className="text-3xl font-bold text-red-500">Car Finder</h1>
                <p className="text-gray-400">Search your favorite car models</p>
                <div className="flex space-x-4 items-center">
                    <Link to="/FavoritesPage" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-400">
                        Go to Cart
                    </Link>
                </div>
            </header>
            

            <div className="container mx-auto p-6">
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search for a car model"
                        className="w-3/4 sm:w-1/2 p-3 rounded-l-lg text-black focus:outline-none border-2 border-red-500"
                        onChange={handleChange}
                        value={search}
                    />
                    <button
                        onClick={fetchData}
                        className="bg-red-500 px-6 py-3 rounded-r-lg text-white hover:bg-red-400"
                    >
                        Search
                    </button>
                </div>

                {errorMessage && (
                    <div className="text-red-500 text-center mb-6">{errorMessage}</div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg "
                        >
                            <h2 className="text-xl font-bold mb-2 text-red-500">
                                {item.model}
                            </h2>
                            <p className="text-gray-400 mb-1">Year: {item.year}</p>
                            <p className="text-gray-400 mb-1">Engine: {item.engine_type}</p>
                            <p className="text-gray-400 mb-1">Transmission: {item.transmission}</p>
                            <Link
        to={`/car-details/${item.id}`}
        state={{car:item}}
        className="bg-orange-700 mt-3 px-4 py-2 rounded text-white block text-center hover:bg-blue-400"
    >
        View Details
    </Link>
                            <button
                                onClick={() => dispatch(addFavorite(item))}
                                className="bg-orange-600 mt-3 px-4 py-2 rounded text-white hover:bg-cyan-500"
                            >
                                Add to Favorites
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="bg-black text-center py-4 text-2xl font-bold  mt-8 align-bottom  ">
                <p className="text-gray-500">
                     <span className="text-red-500">Karthik M</span>
                </p>
            </footer>
        </div>
    );
};

export default Home;
