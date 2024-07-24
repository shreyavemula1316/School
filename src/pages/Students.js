import React from 'react';

const Students = () => {
  return (
    <section id="students" className="py-16 px-4 bg-gray-100">
      {/* Centered Heading Outside of Border */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold uppercase">
          Student Life
        </h2>
      </div>

      {/* Bordered Content */}
      <div className="max-w-7xl mx-auto border border-violet-500 bg-violet-100 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Placeholder Image */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src="/students.png" // Replace with your actual image URL
              alt="Student Life"
              className="w-full h-auto max-w-xs rounded-lg shadow-md"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1">
            
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Extracurricular Activities</h3>
              <p className="mb-4">
                Students can engage in a wide range of extracurricular activities that complement their academic learning. These activities include:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Sports teams: Enhancing physical fitness and teamwork.</li>
                <li>Music and drama clubs: Encouraging artistic expression and creativity.</li>
                <li>Debate societies: Developing public speaking and critical thinking skills.</li>
                <li>Community service: Fostering a sense of social responsibility.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Achievements and Accolades</h3>
              <p className="mb-4">
                We celebrate our students' achievements in various domains, both academic and non-academic. Highlights include:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Awards in regional and national competitions.</li>
                <li>Recognition for outstanding performances in arts and sports.</li>
                <li>Special honors for academic excellence and innovation.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Student Council and Leadership Opportunities</h3>
              <p className="mb-4">
                The Student Council provides a platform for students to take on leadership roles and contribute to school life. Key opportunities include:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Representing student interests and voicing concerns.</li>
                <li>Organizing and leading school events and initiatives.</li>
                <li>Participating in decision-making processes affecting student welfare.</li>
              </ul>
              <p className="mt-4">
                These roles help students develop essential leadership skills, responsibility, and teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
