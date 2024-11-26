import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const CarDetails = () => {
    const { state } = useLocation();
    const car = state?.car;

    if (!car) {
        return (
            <div className="bg-gray-800 min-h-screen text-white flex items-center justify-center">
                <h1 className="text-2xl text-red-500">Car not found</h1>
                <Link to="/" className="bg-red-500 px-4 py-2 rounded text-white ml-4">
                    Go Back
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <header className="bg-black text-center p-6 shadow-lg">
                <h1 className="text-3xl font-bold text-red-500">Car Details</h1>
            </header>

            <div className="container mx-auto p-6">
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-red-500">
                         {car.model}
                    </h2>
                    <p className="text-gray-400">Year: {car.year}</p>
                    <p className="text-gray-400">Engine: {car.engine_type}</p>
                    <p className="text-gray-400">Transmission: {car.transmission}</p>
                    <p className="text-gray-400">Class: {car.class}</p>
                    <p className="text-gray-400">Drive: {car.drive}</p>
                    <p className="text-gray-400">Fuel Type: {car.fuel_type}</p>
                </div>
            </div>

            <footer className="bg-black text-center py-4 text-2xl font-bold mt-8 align-bottom static">
                <p className="text-gray-500">
                    <span className="text-red-500">Karthik M</span>
                </p>
            </footer>
        </div>
    );
};

export default CarDetails;
