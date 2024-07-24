import React from 'react';

const AdmissionForm = ({ onClose }) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 4.293a1 1 0 011.414 0L10 5.586l2.293-1.293a1 1 0 111.414 1.414L11.414 7l2.293 2.293a1 1 0 01-1.414 1.414L10 8.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 7 6.293 4.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <h2 className="text-xl font-bold text-center mb-4">Admission Form</h2>
      <form
        action="/submit-admission-form" // Change this to your form submission endpoint
        method="POST"
        className="space-y-3"
      >
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            rows="2"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <div>
          <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">Previous School</label>
          <input
            type="text"
            id="previousSchool"
            name="previousSchool"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="gradeApplyingFor" className="block text-sm font-medium text-gray-700">Grade Applying For</label>
          <input
            type="text"
            id="gradeApplyingFor"
            name="gradeApplyingFor"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="bg-violet-400 text-white py-2 px-4 rounded-lg hover:bg-violet-500 transition duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
