import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-cyan-400">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Section */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Let’s Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-cyan-500 to-violet-500 p-3 rounded-xl shadow-md">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-200 mb-1">Email</h4>
                  <a
                    href="mailto:abishekece22@gmail.com"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    abishekece22@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-cyan-500 to-violet-500 p-3 rounded-xl shadow-md">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-200 mb-1">Phone</h4>
                  <a
                    href="tel:+916369239300"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    +91 63692 39300
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-cyan-500 to-violet-500 p-3 rounded-xl shadow-md">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-200 mb-1">Location</h4>
                  <p className="text-gray-300">
                    Thanjavur, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400
                  focus:ring-2 focus:ring-cyan-400 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400
                  focus:ring-2 focus:ring-cyan-400 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400
                  focus:ring-2 focus:ring-cyan-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold
                py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
