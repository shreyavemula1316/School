import React from "react";

const History = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Our History</h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              Established in 1990, Model School has a long-standing tradition of excellence in education. Our journey began with a vision to provide quality education and has since evolved into a hub of innovation and academic success.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, we have expanded our infrastructure, added diverse programs, and fostered a nurturing environment that supports both academic and personal growth.
            </p>
          </div>
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img
              src="/images/history.jpg" // Replace with your actual image URL
              alt="Our History"
              className="w-full h-auto max-w-xs rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
