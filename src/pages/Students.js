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
                Our students engage in a vibrant array of activities beyond academics, including:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Sports teams: Promoting fitness and teamwork.</li>
                <li>Art and Music: Fostering creative talents in visual arts and performance.</li>
                <li>Debate and Public Speaking: Developing oratory skills and confidence.</li>
                <li>Community Projects: Encouraging social responsibility and empathy.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Achievements</h3>
              <p className="mb-4">
                Our students excel in various domains, with notable accomplishments such as:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Winning regional and national competitions in academics and sports.</li>
                <li>Outstanding performances in arts and cultural festivals.</li>
                <li>Innovative projects and research recognized at science fairs.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Student Council</h3>
              <p className="mb-4">
                Our Student Council leads by example, fostering leadership and organizational skills. Key members include:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Amy Parker, Grade 12 - President</li>
                <li>Rajiv Mehta, Grade 11 - Vice President</li>
                <li>Lisa Wong, Grade 10 - Secretary</li>
              </ul>
              <p className="mt-4">
                The council organizes events, represents student interests, and contributes to school decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
