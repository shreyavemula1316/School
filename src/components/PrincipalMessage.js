import React from "react";

const PrincipalMessage = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Message from the Principal</h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img
              src="/message.png" // Replace with your actual image URL
              alt="Principal"
              className="w-full h-auto max-w-xs rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              "Welcome to Model School! It is my honor to lead this exceptional institution where our dedicated team works tirelessly to provide the best education and nurturing environment for our students. We are committed to fostering a culture of excellence and innovation, preparing our students for the future with confidence and capability."
            </p>
            <p className="text-lg text-gray-700">
              - Principal [Principal's Name]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
