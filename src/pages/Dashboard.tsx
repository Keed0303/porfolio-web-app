import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Navbar from "../components/Navbar";
import ExperienceSection from "../components/Experience";

const Dashboard = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />



      {/* Experience Section */}
      <main className="max-w-5xl mx-auto px-6 py-16">

        <HeaderSection />


        <ExperienceSection />
      </main>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-12 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Interested in collaborating on impactful projects? Let’s connect and create something amazing.
        </p>
        <a
          href="#contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </>
  );
};

export default Dashboard;
