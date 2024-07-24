import React from "react";

const Vision = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Our Vision, Mission, and Values</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-semibold mb-4">Our Vision</h4>
            <p className="text-lg text-gray-700">
              To be a leading institution in nurturing young minds, fostering innovation, and shaping future leaders who are well-equipped to face global challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-semibold mb-4">Our Mission</h4>
            <p className="text-lg text-gray-700">
              To provide a holistic education that balances academic excellence with personal growth, preparing students for success in a dynamic world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-semibold mb-4">Our Values</h4>
            <p className="text-lg text-gray-700">
              Integrity, Excellence, Innovation, Respect, and Collaboration are the core values that guide our approach to education and community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
