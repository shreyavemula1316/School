import React from "react";

const Academics = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="py-40 text-center text-black px-4"
        style={{
          backgroundImage: 'url("/academics.png")', // Replace with your actual image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Our Academics</h2>
        <p className="text-xl lg:w-2/3 mx-auto mb-5">
          Explore our dynamic curriculum designed to inspire academic excellence and foster a holistic learning environment.
        </p>
      </div>

      {/* Curriculum Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Curriculum Overview</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Primary Section */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-semibold mb-4">Primary Education (Grades 1-5)</h4>
              <p className="text-lg text-gray-700">
                Our primary curriculum focuses on building a strong foundation with subjects including English, Mathematics, Science, Social Studies, Art, and Physical Education. We emphasize interactive learning and hands-on activities to spark curiosity and creativity.
              </p>
            </div>
            {/* Secondary Section */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-semibold mb-4">Secondary Education (Grades 6-10)</h4>
              <p className="text-lg text-gray-700">
                The secondary curriculum expands to include core subjects such as English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, and Computer Science. We integrate practical experiences and critical thinking skills to prepare students for higher education.
              </p>
            </div>
            {/* Senior Secondary Section */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-semibold mb-4">Senior Secondary Education (Grades 11-12)</h4>
              <p className="text-lg text-gray-700 mb-2"><strong>Science Stream:</strong> Includes Physics, Chemistry, Biology, Mathematics, Computer Science, and English, tailored for students pursuing careers in science and technology.</p>
              <p className="text-lg text-gray-700"><strong>Commerce Stream:</strong> Covers Accountancy, Business Studies, Economics, Mathematics, and English, designed for students aiming for careers in business and economics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodologies Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Teaching Methodologies</h3>
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              Our teaching methodologies blend traditional practices with modern techniques to cater to diverse learning styles. We focus on interactive and student-centered learning, encouraging active participation and critical thinking.
            </p>
            <p>
              Our approach incorporates digital tools, project-based learning, and collaborative activities to enhance student engagement and foster a deeper understanding of the material.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Educational Resources</h3>
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              Our educational resources are designed to support and enrich the learning experience. We provide access to digital classrooms, interactive learning modules, and a wealth of online educational platforms.
            </p>
            <p>
              Our state-of-the-art facilities and resources ensure that students have the tools they need to excel academically and develop essential skills for their future endeavors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
