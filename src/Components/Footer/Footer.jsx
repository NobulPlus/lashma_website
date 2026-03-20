import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import jaara from '../../assets/doc/jaara.pdf';
import jaaraNew from '../../assets/doc/jaaraNew.pdf';
import diaspora from '../../assets/doc/diaspora.pdf';
import seniorsPlan from '../../assets/doc/seniorsPlan.pdf';

const socialLinks = [
  {
    href: 'https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL',
    label: 'Facebook',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/2347045358275',
    label: 'WhatsApp',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.386a.5.5 0 00.602.634l5.784-1.459A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.508-5.21-1.394l-.374-.22-3.434.866.892-3.327-.243-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/lashma__?igsh=MTdlMm5zYWVqNzN5MA==',
    label: 'Instagram',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/lagos-state-health-management-agency/',
    label: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendDetails = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm('service_wokgw6g', 'template_bdfvaxi', form.current, { publicKey: 'nJb5cZW-Jm_wTpEho' })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus('idle'), 4000);
        },
        () => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        },
      );
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b0f1a 0%, #111827 60%, #0f172a 100%)' }}>
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, #f28201, transparent)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Top gradient border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #f28201, #8b5cf6, #06b6d4, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Col 1 — Brand + newsletter */}
          <div className="lg:col-span-2">
            {/* Brand mark */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #f28201, #f59e0b)' }}>
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-white font-extrabold text-lg font-heading tracking-tight">LASHMA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Lagos State Health Management Agency — connecting over 1.4 million Lagos residents to quality, affordable healthcare through the ILERA EKO scheme.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(242,130,1,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-white font-semibold text-sm mb-3">Stay informed — get health updates</p>
              <form ref={form} onSubmit={sendDetails} className="flex flex-col gap-2 max-w-sm">
                <input
                  type="text"
                  name="user_name"
                  placeholder="First name"
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email address"
                    required
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 disabled:opacity-60 whitespace-nowrap"
                    style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
                  >
                    {status === 'sending' ? '...' : 'Subscribe'}
                  </button>
                </div>
                {status === 'success' && <p className="text-emerald-400 text-xs">✓ Subscribed successfully!</p>}
                {status === 'error' && <p className="text-rose-400 text-xs">✗ Failed. Please try again.</p>}
              </form>
            </div>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Health Plans', to: '/plan' },
                { label: 'Help Desk', to: '/contact' },
                { label: 'Our Network', to: '/network' },
                { label: 'FAQ', to: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-slate-400 text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Benefit Packages + Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Benefit Packages</h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Standard Jaara Plan', href: jaaraNew },
                { label: 'Senior Plan', href: seniorsPlan },
                { label: 'Diaspora Plan', href: diaspora },
                { label: 'VBOOTH', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.037 11.037 0 005 5l1.127-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0800-ILERAEKO (0800-453-72356)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.037 11.037 0 005 5l1.127-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0800-ASKLASHMA (0800-2755-27462)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.037 11.037 0 005 5l1.127-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0700-ILERAEKO (Sales Hotline)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Lagos State Health Management Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'Cookies Policy', to: '/cookies-policy' },
              { label: 'Terms & Agreement', to: '#' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-slate-500 text-xs hover:text-orange-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
