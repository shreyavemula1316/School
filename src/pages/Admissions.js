import React, { useState } from 'react';
import AdmissionForm from '../components/AdmissionForm'; 

const Admissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="admissions" className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Placeholder Image */}
        <div className="mb-6">
          <img
            src="/admission.png" // Replace with your actual image URL
            alt="Admissions"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Admission Process and Criteria</h2>
        </div>

        {/* Flex Container for Sub-Containers */}
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Admission Process Sub-container */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
            <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
            <p className="mb-4">
              Our admission process involves several key steps to ensure a thorough evaluation of each applicant. The process includes:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">Application Form: Fill out and submit the application form available on our website or at the school office.</li>
              <li className="mb-2">Documentation: Provide required documents such as previous academic records, birth certificate, and proof of residence.</li>
              <li className="mb-2">Interview: Attend an interview with our admission team to discuss the student's goals and interests.</li>
              <li className="mb-2">Assessment: Complete any necessary entrance assessments to gauge the student's academic readiness.</li>
              <li className="mb-2">Notification: Receive admission decisions and further instructions from our admissions office.</li>
            </ul>
          </div>

          {/* Admission Criteria Sub-container */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
            <h3 className="text-2xl font-semibold mb-4">Admission Criteria</h3>
            <p className="mb-4">
              To be considered for admission to Model School, applicants must meet the following criteria:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">Academic Performance: Demonstrate strong academic performance in previous schooling.</li>
              <li className="mb-2">Extracurricular Involvement: Show involvement in extracurricular activities and community service.</li>
              <li className="mb-2">Personal Qualities: Exhibit qualities such as leadership, motivation, and a willingness to learn.</li>
            </ul>
          </div>

          {/* Important Dates and Deadlines Sub-container */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
            <h3 className="text-2xl font-semibold mb-4">Important Dates and Deadlines</h3>
            <p className="mb-4">
              Keep track of the following important dates and deadlines for the admission process:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="mb-2">Application Deadline: Submit applications by [insert deadline date].</li>
              <li className="mb-2">Interview Dates: Interviews will be conducted from [insert start date] to [insert end date].</li>
              <li className="mb-2">Assessment Dates: Entrance assessments will be held on [insert assessment dates].</li>
              <li className="mb-2">Notification of Admission: Decisions will be communicated by [insert notification date].</li>
            </ul>
          </div>
        </div>

        {/* Download Admission Form Button */}
        <div className="text-center mt-12">
          <button
            onClick={openModal}
            className="bg-violet-400 text-white py-2 px-4 rounded-lg hover:bg-violet-500 transition duration-300 inline-block"
          >
            Admission Form
          </button>
        </div>
      </div>

      {/* Modal for Admission Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <AdmissionForm onClose={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Admissions;
