import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import studio from '../../../assets/images/studio.jpeg';

export default function IleraEkoSpotlight() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Left: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Media</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight font-heading mb-5" style={{ letterSpacing: '-0.02em' }}>
              🎙️ ILERA Eko Spotlight
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Tune in to <strong>ILERA Eko Spotlight</strong>, the official health
              and wellness radio program by LASHMA.
              Join us everyday for inspiring conversations that inform, enlighten, and empower Lagos residents about social health insurance.
            </p>

            <ul className="space-y-3 mb-8 list-none p-0">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm">📅</span>
                <span className="font-medium">Everyday</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm">📻</span>
                <span className="font-medium">Download the App</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm">💬</span>
                <span className="font-medium">#IleraEkoSpotlight</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="https://ileraekospotlight.com/"
                className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 text-sm"
                style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Listen Live
              </Link>
              <Link
                to="https://ileraekospotlight.com/about"
                className="text-sm font-semibold no-underline hover:underline transition-colors"
                style={{ color: '#d97306' }}
              >
                View Past Episodes →
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src={studio}
                alt="Ilera Eko Spotlight Studio"
                className="rounded-2xl shadow-card w-full max-w-md object-cover"
              />
              {/* Play Overlay */}
              <Link
                to="https://ileraekospotlight.com/"
                className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl group hover:bg-black/40 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="#f28201">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </Link>

              {/* Decorative accent behind image */}
              <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(242,130,1,0.15), rgba(245,158,11,0.15))' }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
