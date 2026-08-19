'use client';
import React from 'react';
import './Contact.css';
import { BsSend } from 'react-icons/bs';
import { useContactForm } from '../../hooks/useContactFrom';

const ContactForm = () => {
  const {
    formData,
    errors,
    loading,
    status,
    textLeft,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <form 
      onSubmit={handleSubmit} 
      className=" w-full py-6 sm:py-8 px-2 sm:px-8 rounded-3xl border border-violet-500/20 bg-gray-800/20 flex flex-col justify-between h-full"
    >
      <div className="flex flex-col gap-5">
        <div className="w-full">
          <input
            className="input_style flex-1"
            type="text"
            name="username"
            placeholder="Enter Name"
            value={formData.username}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.username && (
            <p className="mt-1 text-red-400 italic text-lg">
              {errors.username}
            </p>
          )}
        </div>

        <div className="w-full">
          <input
            className="input_style flex-1"
            type="text"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.email && (
            <p className="mt-1 text-red-400 italic text-lg">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="w-full relative">
        <textarea
          className="input_style my-5"
          maxLength={250}
          name="message"
          value={formData.message}
          rows={4}
          placeholder="Write Something..."
          onChange={handleChange}
          disabled={loading}
        />
        {errors.message && (
          <p className="-mt-3 text-red-400 italic text-lg">
            {errors.message}
          </p>
        )}
        <p className="absolute bottom-1 right-3 text-xs md:text-sm text-gray-400">
          Left: {textLeft}
        </p>
      </div>

      {/* Status message */}
      {status.message && (
        <div className={`p-3 rounded-lg ${
          status.type === 'success'
            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : 'bg-red-500/20 text-red-400 border border-red-500/30'
        }`}>
          {status.message}
        </div>
      )}

      <button
        type="submit"
        className={`btn_globalStyle w-full mt-5 mb-2 flex items-center justify-center ${
          loading ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="animate-spin mr-3">⏳</span>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <BsSend className="ml-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;