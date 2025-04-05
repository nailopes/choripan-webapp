'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            try {
                // TODO: Replace with actual email sending logic
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setSubmitted(true);
                    alert('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                    setTimeout(() => {
                        setSubmitted(false);
                    }, 5000);

                } else {
                    alert('Failed to send message. Please try again.');
                }
            } catch (error) {
                console.error('Submission error:', error);
                alert('An error occurred. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section className="bg-gray-100">
            <div className="container pt-40 mx-auto px-6 py-12 flex flex-col items-center">
                {/* Centered Text and Form */}
                <div className="max-w-lg w-full">
                    <h1 className="text-4xl font-bold text-main-red mb-6 text-center">Contact Us</h1>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        Have a question or want to reach out? Fill in the form below and we&apos;ll get back to you.
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
        </section>
    );
}
export default ContactForm;