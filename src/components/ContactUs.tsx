import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8cz35de",     // Replace with EmailJS Service ID
        "template_4rnnt2n",    // Replace with EmailJS Template ID
        {
          from_email: form.email,
          message: form.message,
        },
        "K6oljNnXQXM9GUSgn"      // Replace with EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ email: "", message: "" });
        setIsOpen(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-4">
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Get in Touch
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded h-24"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
