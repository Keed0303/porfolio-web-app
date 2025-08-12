export default function ExperienceSection() {
  return (

    <>
      <section className="mt-20 px-4 py-20 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Experience Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Experience Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/fwa_logo.png"
                alt="Company Logo"
                className="w-20 h-auto object-contain"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Private Company (Technology Sector)</h3>
                <p className="text-gray-500 text-sm">2 years 9 months</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Developed real-time tracking solutions to enhance operational efficiency.</li>
              <li>Built eCommerce applications to improve customer experience.</li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/city-college-calamba-logo.png"
                alt="Institution Logo"
                className="w-20 h-auto object-contain"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Educational Institution</h3>
                <p className="text-gray-500 text-sm">4-month Internship</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Designed and implemented a file management system to optimize workflows.</li>
            </ul>
          </div>

          {/* Experience Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/blink-create-studio-logo.png"
                alt="Creative Firm Logo"
                className="w-20 h-auto object-contain"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Creative Services Firm</h3>
                <p className="text-gray-500 text-sm">1-month Freelance Contract</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Developed a customer loyalty mobile app to boost engagement.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}