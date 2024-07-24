import React from "react";

const Infrastructure = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Our Infrastructure</h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              Our state-of-the-art facilities include well-equipped classrooms, modern laboratories, a well-stocked library, and spacious playgrounds. We strive to provide a learning environment that inspires and supports every student.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              From advanced technology in classrooms to recreational areas that promote physical well-being, our infrastructure is designed to cater to the diverse needs of our students.
            </p>
          </div>
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img
              src="/images/infrastructure.jpg" // Replace with your actual image URL
              alt="Infrastructure"
              className="w-full h-auto max-w-xs rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
