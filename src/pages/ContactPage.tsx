import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50 dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-cyan-300">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-cyan-200">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-cyan-200 mb-1">Email</h4>
                  <a href="abishekece22@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors">
                    abishekece22@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-cyan-200 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors">
                    +91 6369239300
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-700 p-3 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-cyan-200 mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Thanjavur, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-cyan-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-slate-900 dark:text-cyan-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-cyan-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-800 text-slate-900 dark:text-cyan-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-cyan-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none bg-white dark:bg-gray-800 text-slate-900 dark:text-cyan-100"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg"
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
