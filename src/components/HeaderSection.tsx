import { 
  SiJavascript, SiTypescript, SiIonic, SiAndroid, SiReact, 
  SiAngular, SiHtml5, SiSass, SiTailwindcss, SiPhp 
} from "react-icons/si";
import GetInTouch from "./ContactUs";

export default function HeaderSection() {
  return (
    <section className="mt-12 px-4 py-12 text-center max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Hi, I’m <span className="text-blue-500">Manuel Kyd Thomas Nagpala</span>
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Web, Mobile, & UI Developer — crafting websites, mobile apps, and intuitive interfaces with clean code.
      </p>

      {/* Skills Label */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Skills</h2>

      {/* Skill Capsules */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-200 text-black font-medium">
          <SiJavascript /> JavaScript
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-200 text-blue-800 font-medium">
          <SiTypescript /> TypeScript
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium">
          <SiIonic /> Ionic Framework
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-200 text-green-800 font-medium">
          <SiAndroid /> Android Development
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-200 text-sky-800 font-medium">
          <SiReact /> React
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-200 text-red-800 font-medium">
          <SiAngular /> Angular
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-200 text-orange-800 font-medium">
          <SiHtml5 /> HTML
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-200 text-pink-800 font-medium">
          <SiSass /> SCSS
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-800 font-medium">
          <SiTailwindcss /> Tailwind CSS
        </span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-200 text-indigo-800 font-medium">
          <SiPhp /> PHP
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="p-4 flex">
          <a className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" href="/Manuel-Kyd-Thoma-Nagpala-Resume.pdf" download="Manuel-Kyd-Thoma-Nagpala-Resume.pdf">Download CV</a>
        </div>
        <GetInTouch />
      </div>
    </section>
  );
}
