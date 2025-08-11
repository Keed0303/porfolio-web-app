
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Navbar from "../components/Navbar";

const Dashboard = () => {

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* content */}
      <main className="max-w-3xl mx-auto text-center">
        <HeaderSection />

        {/* experience */}
        <section className="mt-12 px-6 py-12  mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Experience</h2>
          <p className="text-gray-600 mb-10">
            I have worked on various projects using modern web technologies.
          </p>

          <ul className="text-left space-y-8">
            <li>
              <div className="flex items-center space-x-3">
                <img
                  src="/fwa_logo.png"
                  alt="Filweb Asia Logo"
                  className="w-24 h-10 object-contain"
                />
                <span className="font-semibold text-gray-900">Filweb Asia Inc.</span>
                <span className="italic text-gray-700 ml-auto">2 years 9 months</span>
              </div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Developed a real-time patrol tracking system for General Nakar, improving operational oversight and efficiency.</li>
                <li>Built eCommerce food ordering applications for Daily Grind and Bigs Coffee, enhancing customer experience and boosting sales.</li>
              </ul>
            </li>

            <li>
              <div className="flex items-center space-x-3">
                <img
                  src="/city-college-calamba-logo.png"
                  alt="City College of Calamba Logo"
                  className="w-24 h-10 object-contain"
                />
                <span className="font-semibold text-gray-900">City College of Calamba</span>
                <span className="italic text-gray-700 ml-auto">4-month Internship</span>
              </div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Designed and implemented a file management system, streamlining document handling and improving workflow.</li>
              </ul>
            </li>

            <li>
              <div className="flex items-center space-x-3">
                <img
                  src="/blink-create-studio-logo.png"
                  alt="Blink Creative Studio Logo"
                  className="w-24 h-10 object-contain"
                />
                <span className="font-semibold text-gray-900">Blink Creative Studio</span>
                <span className="italic text-gray-700 ml-auto">1-month Freelance Contract</span>
              </div>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>Created a pet loyalty mobile app, driving customer engagement and retention through innovative features.</li>
              </ul>
            </li>
          </ul>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Dashboard;
