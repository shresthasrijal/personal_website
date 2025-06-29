import React from 'react';

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 leading-tight rounded-xl p-4 shadow-xl">
          Shrestha Srijal
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700 italic">
          Welcome to my digital space!
        </p>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl space-y-12">
        {/* About Section */}
        <section className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hello! I'm Shrestha Srijal, a passionate [Your Profession/Interest, e.g., software developer, designer, writer] based in [Your Location]. I enjoy [mention a few hobbies/interests, e.g., building web applications, exploring new technologies, reading, hiking].
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This website is a place where I share my work, thoughts, and experiences. Feel free to explore and get in touch!
          </p>
        </section>

        {/* Projects Section */}
        <section className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Title One</h3>
              <p className="text-gray-600 mb-4">
                A brief description of my first project, highlighting key technologies used and its purpose.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">Learn More &rarr;</a>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Title Two</h3>
              <p className="text-gray-600 mb-4">
                Another interesting project I worked on, showcasing my skills in [specific area].
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">Learn More &rarr;</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" />
            </svg>
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm always open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out via email or connect with me on social media.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" />
              </svg>
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857m7.5 1.857L13.103 21.684A2 2 0 0110.273 21h-2.553c-.902 0-1.72-.518-2.174-1.336L2 17m17-5a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              LinkedIn
            </a>
            {/* Add more social links as needed */}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-16 w-full max-w-4xl text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Shrestha Srijal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;