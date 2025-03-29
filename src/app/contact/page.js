"use client";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="container mx-auto px-6 py-12 flex flex-col items-center">
            {/* Centered Text and Form */}
            <div className="max-w-lg w-full">
                <h1 className="text-4xl font-bold text-main-red mb-6 text-center">Contact Us</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Have a question or want to reach out? Fill in the form below and we'll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-red"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-red"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-red"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-main-red text-white px-6 py-2 rounded-lg hover:bg-accent-orange transition w-full"
                    >
                        Send Message
                    </button>

                    {submitted && <p className="text-green-600 mt-4 text-center">Message sent successfully!</p>}
                </form>
            </div>
        </div>
    );
}
