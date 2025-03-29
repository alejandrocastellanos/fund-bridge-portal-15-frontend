import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface DonateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate(); // Hook for redirection

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        email: "",
        donation_amount: "",
        is_public: true,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormData((prev) => ({
            ...prev,
            [name]: name === "is_public" ? value === "public" : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log(JSON.stringify(formData));
            const response = await fetch("/api/donate/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                mode: "cors",
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

            const data = await response.json();
            console.log("Éxito:", data);
            navigate("/thank-you");
        } catch (error) {
            console.error("Error en la donación:", error);
        }
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
                        name="phone_number"
                        value={formData.phone_number}
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
                        name="donation_amount"
                        value={formData.donation_amount}
                        onChange={handleChange}
                        placeholder="Donation Amount ($)"
                        className="border border-gray-300 p-2 rounded"
                        required
                    />

                    {/* Private/Public Donation */}
                    <select
                        name="is_public"
                        value={formData.is_public ? "public" : "private"}
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
