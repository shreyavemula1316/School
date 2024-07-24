import React from 'react';
import facultyData from '../facultyData.json'; // Adjust the path based on where you place the JSON file

const Faculty = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="py-40 text-center text-black px-4"
        style={{
          backgroundImage: 'url(/teachers.png)', // Replace with your banner image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Meet Our Faculty</h2>
        <p className="text-xl lg:w-3/5 mx-auto mb-5">
          Our dedicated and experienced faculty are committed to providing the highest quality education and fostering a supportive learning environment.
        </p>
      </div>

      {/* Faculty Profiles */}
      <div
        className="py-16 px-4"
        style={{
          backgroundImage: 'url(/path/to/background-image.jpg)', // Replace with your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Faculty Profiles</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facultyData.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-2xl font-semibold mb-2">{member.name}</h4>
                <p className="text-lg text-gray-700 mb-1">{member.role}</p>
                <p className="text-gray-500">{member.qualification}, {member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
