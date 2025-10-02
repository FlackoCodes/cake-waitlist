"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, API_KEY } from "../constants";

export default function WaitlistForm() {
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(inputVal)) {
      setError("Please enter a valid email");
      return;
    }

    setError(""); // clear errors

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, API_KEY)
      .then(() => {
        alert("🎉 Thanks for joining our waitlist!");
        setInputVal("");
      })
      .catch((error) => console.error("Error:", error.text));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-col w-full md:w-auto">
        <input
          name="user_email"
          type="email"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter your email"
          required
          className={`border p-2 rounded w-full md:w-[400px] ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none`}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto"
      >
        Join Waitlist
      </button>
    </form>
  );
}
