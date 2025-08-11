import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <a
          href="mailto:monagpala@gmail.com"
          className="flex items-center space-x-2 hover:text-white transition"
        >
          <FaEnvelope className="text-xl" />
          <span>monagpala@gmail.com</span>
        </a>

        <a
          href="tel:+639474800275"
          className="flex items-center space-x-2 hover:text-white transition"
        >
          <FaPhone className="text-xl" />
          <span>0947 480 0275</span>
        </a>

        <a
          href="https://github.com/Keed0303"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-white transition"
        >
          <FaGithub className="text-xl" />
          <span>github.com/Keed0303</span>
        </a>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} Manuel Kyd Thomas Nagpala. All rights reserved.
      </p>
    </footer>
  );
}
