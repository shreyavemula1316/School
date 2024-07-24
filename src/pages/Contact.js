import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="py-40 text-center text-black px-4"
        style={{
          backgroundImage: 'url("/contact.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Contact Us</h2>
        <p className="text-xl lg:w-2/3 mx-auto mb-5">
          Reach out to us for any inquiries or assistance. We're here to help!
        </p>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <h4 className="text-2xl font-semibold mb-4">Address</h4>
            <p className="text-lg text-gray-700">
              Springdale Public School,<br />
              123 Education Lane,<br />
              Cityville, State, ZIP Code
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <h4 className="text-2xl font-semibold mb-4">Phone</h4>
            <p className="text-lg text-gray-700">
              +1 (123) 456-7890
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <h4 className="text-2xl font-semibold mb-4">Email</h4>
            <p className="text-lg text-gray-700">
              <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">
                info@springdale.edu
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Send Us a Message</h3>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid gap-6 mb-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-700 text-white py-3 rounded-lg font-semibold hover:bg-violet-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Our Location</h3>
          <div className="relative overflow-hidden rounded-lg shadow-lg mx-auto" style={{ maxWidth: '500px', height: '300px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d121211.75020983811!2d78.6449778!3d18.3076806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccfb007f8cd059%3A0xcc3efd0675efe0c7!2sTSMS%20Mandepally%2CSircilla!5e0!3m2!1sen!2sin!4v1721817609514!5m2!1sen!2sin" // Replace with your Google Maps URL
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
