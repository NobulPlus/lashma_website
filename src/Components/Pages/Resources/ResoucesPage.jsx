import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CalendarDays, ExternalLink, FileText, Newspaper } from 'lucide-react';
import ekosha from '../../../assets/doc/ekosha.pdf';
import EKSbulletinQ3 from '../../../assets/doc/EKOSHANewsBulletinQ32024 - converted.pdf';
import ileraEkoNewsletter from '../../../assets/doc/ilera-eko-newsletter-2026.pdf';
import drugFormulary from '../../../assets/doc/ilera-eko-drug-formulary.pdf';
import ileraEkoNewsletterPreview from '../../../assets/images/ilera-eko-newsletter-2026-preview.jpg';

const resources = [
  {
    title: 'ILERA EKO Drug Formulary',
    description: 'The official list of approved medicines covered under the ILERA EKO health insurance scheme. Intended for enrollees, providers, and community pharmacists.',
    fileUrl: drugFormulary,
  },
  {
    title: 'EKOSHA Provider',
    description: 'Guidelines and information for EKOSHA healthcare providers.',
    fileUrl: ekosha,
  },
];

const newsletters = [
  {
    title: 'ILERA EKO Newsletter',
    edition: 'Second Quarter 2026 Edition',
    date: 'June 2026',
    pages: '30 pages',
    description: 'Latest LASHMA and ILERA EKO updates, highlights, recognition stories, and health insurance programme activities across Lagos State.',
    fileUrl: ileraEkoNewsletter,
    image: ileraEkoNewsletterPreview,
    featured: true,
  },
  {
    title: 'EKOSHA News Bulletin Q3 2024',
    description: 'Quarterly updates and stories from the EKOSHA program.',
    fileUrl: EKSbulletinQ3,
  },
];

const DocumentCard = ({ resource, label = 'Read now' }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-lg border border-slate-200 px-6 py-5 shadow-sm">
    <div className="flex items-start gap-4">
      <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fef3e2] text-[#c75d00]">
        <FileText size={22} aria-hidden="true" />
      </span>
      <div>
        <h2 className="text-lg font-bold text-[#1a1a2e] font-heading m-0">{resource.title}</h2>
        <p className="text-sm text-[#4a4a68] mt-1 mb-0">{resource.description}</p>
        <p className="text-xs text-[#6b7280] mt-2 mb-0">Opens as a readable PDF in a new tab.</p>
      </div>
    </div>
    <a
      href={resource.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f28201] px-5 py-2.5 text-sm font-semibold text-white no-underline whitespace-nowrap transition-all hover:-translate-y-0.5 hover:bg-[#d97306]"
    >
      {label}
      <ExternalLink size={16} aria-hidden="true" />
    </a>
  </div>
);

const FeaturedNewsletter = ({ newsletter }) => (
  <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
    <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.75fr)]">
      <div className="bg-[#12372a] px-6 py-8 text-white sm:px-8 lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#ffcf8a]">
          <Newspaper size={15} aria-hidden="true" />
          Featured Newsletter
        </span>

        <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {newsletter.title}
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-7 text-white/82">
          {newsletter.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/88">
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
            <CalendarDays size={16} aria-hidden="true" />
            {newsletter.date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
            <FileText size={16} aria-hidden="true" />
            {newsletter.pages}
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
            {newsletter.edition}
          </span>
        </div>

        <a
          href={newsletter.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#f28201] px-6 py-3 text-sm font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-[#d97306]"
        >
          Read newsletter
          <ExternalLink size={17} aria-hidden="true" />
        </a>
      </div>

      <a
        href={newsletter.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-slate-100 p-5 sm:p-7"
        aria-label={`Open ${newsletter.title} in a new tab`}
      >
        <div className="mx-auto max-w-[330px] overflow-hidden rounded-lg border border-slate-300 bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
          <img
            src={newsletter.image}
            alt={`${newsletter.title} cover preview`}
            className="block h-auto w-full"
            loading="lazy"
          />
        </div>
      </a>
    </div>
  </article>
);

const ResoucesPage = () => {
  const featuredNewsletter = newsletters.find((newsletter) => newsletter.featured);
  const archivedNewsletters = newsletters.filter((newsletter) => !newsletter.featured);

  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      <Helmet>
        <title>Resources | LASHMA</title>
        <meta name="description" content="Read LASHMA and EKOSHA newsletters, bulletins, and provider documents." />
        <link rel="canonical" href="https://www.lashma.com/resources" />
      </Helmet>

      <section className="section-container pt-36 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="section-label">Library</span>
          <h1 className="section-heading">LASHMA Resources</h1>
          <p className="section-subheading">
            Read official LASHMA newsletters, EKOSHA bulletins, and provider materials directly in your browser.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-10">
          <section>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a2e] font-heading mb-1">Newsletters & Bulletins</h2>
                <p className="text-sm text-[#4a4a68] m-0">Featured public updates open in a separate tab, so visitors can return to LASHMA easily.</p>
              </div>
            </div>

            {featuredNewsletter && <FeaturedNewsletter newsletter={featuredNewsletter} />}

            <div className="mt-6 space-y-4">
              {archivedNewsletters.map((resource) => (
                <DocumentCard key={resource.title} resource={resource} label="Open bulletin" />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#1a1a2e] font-heading mb-1">Documents</h2>
              <p className="text-sm text-[#4a4a68] m-0">Provider materials and other official resources.</p>
            </div>
            <div className="space-y-4">
              {resources.map((resource) => (
                <DocumentCard key={resource.title} resource={resource} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ResoucesPage;
