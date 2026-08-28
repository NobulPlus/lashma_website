/**
 * PageLoader — shown inside <Suspense fallback> while a lazy page chunk downloads.
 * Lightweight: just a centered spinner + thin top progress bar.
 * Matches LASHMA brand (orange primary colour).
 */
const PageLoader = () => {
  return (
    <div style={styles.wrapper} role="status" aria-label="Loading page">
      {/* Top progress bar */}
      <div style={styles.topBar}>
        <div style={styles.topBarFill} />
      </div>

      {/* Center spinner */}
      <div style={styles.spinnerWrap}>
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={styles.spinner}
          aria-hidden="true"
        >
          <circle cx="26" cy="26" r="22" stroke="#e2e8f0" strokeWidth="4" />
          <circle
            cx="26"
            cy="26"
            r="22"
            stroke="#f28201"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="100 38"
            style={styles.spinnerArc}
          />
        </svg>
        <span style={styles.label}>Loading…</span>
      </div>

      <style>{`
        @keyframes pg-spin  { to { transform: rotate(360deg); } }
        @keyframes pg-slide { 0% { width: 0%; } 35% { width: 55%; } 70% { width: 80%; } 100% { width: 95%; } }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(248, 249, 252, 0.92)',
    backdropFilter: 'blur(4px)',
    zIndex: 9999,
    flexDirection: 'column',
    gap: '1rem',
  },
  topBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'rgba(242, 130, 1, 0.15)',
    zIndex: 10000,
  },
  topBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #f28201, #fbbf24)',
    borderRadius: '0 2px 2px 0',
    animation: 'pg-slide 2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  },
  spinnerWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  spinner: {
    animation: 'pg-spin 0.9s linear infinite',
  },
  spinnerArc: {
    transformOrigin: 'center',
  },
  label: {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '0.85rem',
    color: '#64748b',
    letterSpacing: '0.03em',
  },
};

export default PageLoader;
