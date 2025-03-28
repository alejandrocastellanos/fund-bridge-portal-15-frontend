import React from "react";
import { useState } from "react";

interface DonateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        amount: "",
        donationType: "public", // Default selection
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // You can send this data to your backend here
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <h2 className="text-lg font-semibold mb-4">Make a Donation</h2>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="border border-gray-300 p-2 rounded"
                        required
                    />

                    {/* Phone */}
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="border border-gray-300 p-2 rounded"
                        required
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="border border-gray-300 p-2 rounded"
                        required
                    />

                    {/* Donation Amount */}
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Donation Amount ($)"
                        className="border border-gray-300 p-2 rounded"
                        required
                    />

                    {/* Private/Public Donation */}
                    <select
                        name="donationType"
                        value={formData.donationType}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded"
                    >
                        <option value="public">Public Donation</option>
                        <option value="private">Private Donation</option>
                    </select>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-ftpurple text-white py-2 rounded hover:bg-ftpurple-dark transition"
                    >
                        Donate
                    </button>
                </form>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-ftpurple text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default DonateModal;
