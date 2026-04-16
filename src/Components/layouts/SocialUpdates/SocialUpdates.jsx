import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaInstagram } from 'react-icons/fa';
import { getInstagramFeed } from '../../../services/instagramService';
import studioImage from '../../../assets/images/studio.jpeg';
import boothImage from '../../../assets/images/vbooth.jpg';
import qualityImage from '../../../assets/images/quality.jpg';
import noticeImage from '../../../assets/images/notice2.jpg';

const fallbackPosts = [
  {
    id: 1,
    title: 'Outreach moments from the community',
    category: 'Community',
    description: 'Highlight key enrollment drives, outreach visits, and real moments that show LASHMA in action across Lagos.',
    image: studioImage,
    href: 'https://www.instagram.com/',
    accent: 'from-orange-500 via-amber-400 to-yellow-300',
  },
  {
    id: 2,
    title: 'Health campaign snapshots',
    category: 'Campaigns',
    description: 'Feature timely public health campaigns and awareness updates in a format visitors can scan quickly from the homepage.',
    image: boothImage,
    href: 'https://www.instagram.com/',
    accent: 'from-sky-500 via-cyan-400 to-teal-300',
  },
  {
    id: 3,
    title: 'Provider and service spotlight',
    category: 'Providers',
    description: 'Use this card to showcase partner facilities, service improvements, and stories that build trust in the scheme.',
    image: qualityImage,
    href: 'https://www.instagram.com/',
    accent: 'from-emerald-500 via-teal-400 to-lime-300',
  },
  {
    id: 4,
    title: 'Quick public notice and reminders',
    category: 'Updates',
    description: 'Keep important reminders visible, from enrollment windows to service notices, without relying only on social platforms.',
    image: noticeImage,
    href: 'https://www.instagram.com/',
    accent: 'from-slate-700 via-slate-600 to-slate-400',
  },
];

const SocialUpdates = () => {
  const [posts, setPosts] = useState(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [liveFeedEnabled, setLiveFeedEnabled] = useState(false);

  useEffect(() => {
    let active = true;

    const loadInstagramFeed = async () => {
      try {
        const livePosts = await getInstagramFeed(4);

        if (!active || livePosts.length === 0) {
          return;
        }

        setPosts(livePosts);
        setLiveFeedEnabled(true);
      } catch (error) {
        console.warn('Instagram feed fallback activated:', error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadInstagramFeed();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-orange-50/60">
      <div className="section-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div className="max-w-2xl">
            <span className="section-label">Social Updates</span>
            <h2 className="section-heading !text-left !mb-3">See what LASHMA is sharing right now</h2>
            <p className="section-subheading !text-left !max-w-none !mb-0">
              The homepage is now wired for a live Instagram feed. Until the Meta credentials are connected, it will gracefully show curated cards instead of breaking the page.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
              {loading ? 'Loading feed...' : liveFeedEnabled ? 'Live Instagram feed connected' : 'Fallback cards until API is connected'}
            </div>

            <a
              href={liveFeedEnabled && posts[0]?.href ? posts[0].href : 'https://www.instagram.com/'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-text-primary)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)]"
            >
              <FaInstagram className="text-base" />
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {posts.map(({ id, title, category, description, image, href, accent }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent} opacity-90`} />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-800">
                  <FaInstagram className="text-[var(--color-primary)]" />
                  {category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-extrabold leading-tight text-slate-900">{title}</h3>
                <p className="mb-5 text-sm leading-7 text-slate-600">{description}</p>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-1">
                  View post
                  <FaArrowRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialUpdates;
