import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from '../components/common/SocialIcons';
import confetti from 'canvas-confetti';

interface FormData {
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isCopied, setIsCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#ec4899', '#3b82f6'],
      });
    } catch {
      // safe fallback
    }

    const encodedSubject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Ankit,\n\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodedSubject}&body=${body}`;

    setStatusMessage(
      'Opening your email client with your message pre-filled. You can send directly or copy email.'
    );
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24 border-t border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
      {/* Amber Hasan style radial purple glow background */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_70%)] blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.2),transparent_70%)] blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Let's Connect */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>

            <p className="text-slate-600 dark:text-[#ADB7BE] text-base leading-relaxed mb-6 max-w-md">
              I am currently looking for software engineering internship and fresher opportunities. My inbox is always open. Whether you have a question or want to discuss a project, I'll do my best to get back to you!
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold hover:text-purple-500">
                    {SITE_CONFIG.email}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1 text-xs text-purple-500 hover:text-purple-400 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono font-medium">{SITE_CONFIG.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>

            {/* Social Icons row matching amberhasan.me */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-full bg-slate-100 dark:bg-[#18191E] border border-slate-200 dark:border-[#33353F] flex items-center justify-center text-slate-700 dark:text-white hover:border-purple-500 hover:scale-110 transition-all shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-slate-100 dark:bg-[#18191E] border border-slate-200 dark:border-[#33353F] flex items-center justify-center text-blue-500 hover:border-blue-500 hover:scale-110 transition-all shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={SITE_CONFIG.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-11 h-11 rounded-full bg-slate-100 dark:bg-[#18191E] border border-slate-200 dark:border-[#33353F] flex items-center justify-center text-amber-500 hover:border-amber-500 hover:scale-110 transition-all shadow-sm"
                title="LeetCode (250+ Solved)"
              >
                <LeetCodeIcon className="w-5 h-5" />
              </a>

              <a
                href={SITE_CONFIG.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef Profile"
                className="w-11 h-11 rounded-full bg-slate-100 dark:bg-[#18191E] border border-slate-200 dark:border-[#33353F] flex items-center justify-center text-purple-400 hover:border-purple-500 hover:scale-110 transition-all shadow-sm"
                title="CodeChef"
              >
                <CodeChefIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Amber Hasan Form Style */}
          <div className="bg-white dark:bg-[#181818] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-[#33353F] shadow-xl">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-5">
              <div>
                <label htmlFor="email" className="text-slate-800 dark:text-white block mb-2 text-sm font-medium">
                  Your email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`bg-slate-50 dark:bg-[#18191E] border ${
                    errors.email ? 'border-red-500' : 'border-slate-200 dark:border-[#33353F]'
                  } placeholder-slate-400 dark:placeholder-[#9CA2A9] text-slate-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition-all`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="text-slate-800 dark:text-white block mb-2 text-sm font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`bg-slate-50 dark:bg-[#18191E] border ${
                    errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-[#33353F]'
                  } placeholder-slate-400 dark:placeholder-[#9CA2A9] text-slate-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition-all`}
                  placeholder="Software Engineering Internship / Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-slate-800 dark:text-white block mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`bg-slate-50 dark:bg-[#18191E] border ${
                    errors.message ? 'border-red-500' : 'border-slate-200 dark:border-[#33353F]'
                  } placeholder-slate-400 dark:placeholder-[#9CA2A9] text-slate-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400 resize-y transition-all`}
                  placeholder="Let's talk about..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {statusMessage && (
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-600 dark:text-purple-300">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="px-6 py-3.5 w-full rounded-full text-white font-semibold text-sm bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] cursor-pointer transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
