import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ClipboardCheck, CreditCard, Stethoscope, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const DISMISS_KEY = 'lashma_intent_prompt_dismissed';
const SHOW_DELAY_MS = 5000;

const options = [
  {
    icon: ClipboardCheck,
    label: 'Enroll in ILERA EKO',
    href: 'https://lashma.myclinify.com/register',
    external: true,
  },
  {
    icon: CreditCard,
    label: 'Pay a bill',
    href: 'https://lashma.myclinify.com/paypolicy',
    external: true,
  },
  {
    icon: Stethoscope,
    label: 'Find a provider',
    href: '/provider',
  },
  {
    icon: ShieldCheck,
    label: 'Compare health plans',
    href: '/plan',
  },
];

// `active` gates the countdown so this never appears stacked on top of
// (or hidden behind) another overlay, e.g. the homepage's notice modal.
const IntentPrompt = ({ active = true }) => {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    if (!active || sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [active]);

  // Stay clear of the cookie-consent banner, whatever height it happens to
  // be at the current viewport (it wraps to multiple rows on narrow screens).
  useEffect(() => {
    const recompute = () => {
      const banner = document.querySelector('.CookieConsent');
      const bannerHeight = banner ? banner.getBoundingClientRect().height : 0;
      setBottomOffset(bannerHeight > 0 ? bannerHeight + 16 : 24);
    };
    recompute();
    window.addEventListener('resize', recompute);
    const observer = new MutationObserver(recompute);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener('resize', recompute);
      observer.disconnect();
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, 'true');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ type: 'spring', damping: 22, stiffness: 260 }}
          role="dialog"
          aria-label="What are you looking for?"
          style={{ bottom: bottomOffset }}
          className="fixed z-40 left-4 right-4 sm:left-6 sm:right-auto sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        >
          <div className="flex items-start justify-between gap-3 px-5 pt-4 pb-2">
            <p className="font-heading font-bold text-slate-900 text-sm leading-snug">
              New here? What are you looking for today?
            </p>
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-3 pb-3 flex flex-col gap-1">
            {options.map(({ icon: Icon, label, href, external }) => {
              const content = (
                <>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-[#f28201] flex-shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                </>
              );
              const className =
                'flex items-center gap-3 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors';

              return external ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={dismiss} className={className}>
                  {content}
                </a>
              ) : (
                <Link key={label} to={href} onClick={dismiss} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntentPrompt;
