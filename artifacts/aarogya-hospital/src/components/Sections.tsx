import { type CSSProperties, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Activity, Ambulance, ArrowUpRight, BriefcaseMedical, Building2, Check, Clock3, FlaskConical, HeartPulse, Pill, Plus, Quote, Sprout, SquarePen, Stethoscope, Syringe, TrendingUp, Truck, UsersRound } from 'lucide-react';
import { DIRECTIONS, GOOGLE_REVIEWS, Icon, magneticPointerLeave, magneticPointerMove, PHONE, TEL } from './common';
import { ClinicHours } from './Hero';
import { DOCTORS, HOSPITAL_INFO, HOSPITAL_MAP_EMBED } from '@/lib/hospital';
import { useLanguage } from '@/lib/i18n';
import { BRAND_MARK } from '@/lib/translations';

const reviews = [
  {
    author: 'venkateswararao pulagam',
    lang: 'en',
    copy: 'Had a very good experience at a hospital in Tanuku. The staff were extremely supportive, and I would especially like to appreciate Nurse Revathi for her kindness and polite behavior. She took great care of my sister after her laparoscopic operation and made us feel comfortable throughout. She truly deserves recognition for her patience and dedication. Special thanks to the doctor as well for providing the best treatment and ensuring a smooth recovery. Thank you so much for your excellent care',
  },
  {
    author: 'Chaitanya Dimple',
    lang: 'te-Latn',
    copy: 'Hospital chala ante chala clean ga undhi, staff chala care tisukunnaru. Doctors chala friendly..motham hospital ki, doctor ki ,staff ki service mothaniki 100 ki 500 marks. Motham last lo bill yekkuva avuthundhi yemo entha bavundhi kadha anukunnam,but chala thakkuva bill tho chala baga chusukunnaru. Midnight lo emergency ga join ayam..aa time lo doctors vachi full care tisukunnaru sontha vallani chusukunnatlu..chala nacchindhi. Tanuku lo elanti hospital ledhu.',
  },
  {
    author: 'PURNA K',
    lang: 'en',
    copy: 'The hospital facilities are very clean and well maintained good receiving doctors also very friendly especially samrin madam she is very good with patients well explained everything\nLow cost billing with higher quality treatment\nThank you arogya multi speciality hospital everyone.',
  },
  {
    author: 'Kayala Akhil',
    lang: 'en',
    copy: 'Very Best Hospital in Tanuku..Its look like A corporate hospital but prices are low..Pulmonology department Dr Rk Naidu Fruendly Doctor',
  },
];

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Heading({ eyebrow, children, subline }: { eyebrow?: string; children: ReactNode; subline?: string }) {
  return (
    <>
      {eyebrow && <p className="section-label reveal">{eyebrow}</p>}
      <Reveal><h2>{children}</h2></Reveal>
      {subline && <Reveal><p className="section-subline">{subline}</p></Reveal>}
    </>
  );
}

function TitleText({ title }: { title: [string, string, string] }) {
  if (title[1] === BRAND_MARK) {
    return (
      <>
        {title[0]}
        <em className="heading-brand">
          <img
            className="heading-wordmark"
            src="/assets/aarogya-wordmark-600.webp"
            srcSet="/assets/aarogya-wordmark-600.webp 600w, /assets/aarogya-wordmark.webp 1200w"
            sizes="240px"
            alt="Aarogya"
            width="600"
            height="136"
            loading="lazy"
            decoding="async"
          />
        </em>
        {title[2]}
      </>
    );
  }
  return <>{title[0]}<em>{title[1]}</em>{title[2]}</>;
}

export function About() {
  const { t } = useLanguage();
  const featureIcons = [Activity, BriefcaseMedical, HeartPulse, FlaskConical];
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-intro">
          <Heading><TitleText title={t.about.title} /></Heading>
          <Reveal>
            <p>{t.about.body}</p>
          </Reveal>
        </div>
        <div className="feature-grid">
          {featureIcons.map((FeatureIcon, index) => (
            <Reveal key={index}>
              <article className="feature-tile">
                <FeatureIcon className="icon" />
                <strong>{t.about.features[index]}</strong>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal><a className="button button-outline" href="#doctors"><span>{t.about.meetDoctors}</span><Icon name="arrow" /></a></Reveal>
      </div>
    </section>
  );
}

export function OurStory() {
  const { t } = useLanguage();
  const founded = HOSPITAL_INFO.foundingYear;
  const currentYear = new Date().getFullYear();
  const years = currentYear - founded;
  const milestoneIcons = [Sprout, TrendingUp, Building2];
  const milestoneYears = [founded, founded, currentYear];
  const stats = [
    { value: String(founded), label: t.story.stats.established },
    { value: `${years}`, label: t.story.stats.years(years) },
    { value: String(DOCTORS.length), label: t.story.stats.doctors },
    { value: '4.9★', label: t.story.stats.rating },
  ];
  return (
    <section className="section story-section" id="our-story">
      <div className="container story-grid">
        <div className="story-copy">
          <p className="section-label reveal">{t.story.label}</p>
          <Reveal><h2><TitleText title={t.story.title} /></h2></Reveal>
          <Reveal>
            <p className="story-lead">{t.story.lead(founded)}</p>
          </Reveal>
          <Reveal>
            <p>{t.story.body(years)}</p>
          </Reveal>
          <Reveal>
            <figure className="story-quote">
              <Quote aria-hidden="true" />
              <blockquote lang={t.story.quoteLang}>{t.story.quote}</blockquote>
              <figcaption>{t.story.quoteTranslation && <span>{t.story.quoteTranslation}</span>}{t.story.quoteSource}</figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="story-side">
          <ol className="story-timeline">
            {t.story.milestones.map((milestone, index) => {
              const MilestoneIcon = milestoneIcons[index];
              return (
                <li className="story-step reveal" key={index}>
                  <span className="story-node"><MilestoneIcon aria-hidden="true" /></span>
                  <p className="story-when">{milestone.when(milestoneYears[index])}</p>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.copy}</p>
                </li>
              );
            })}
          </ol>
          <dl className="story-stats reveal">
            {stats.map((stat, index) => (
              <div key={index}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLanguage();
  const cardIcons = [Stethoscope, HeartPulse, Syringe];
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Heading subline={t.services.subline}><TitleText title={t.services.title} /></Heading>
        <div className="services-grid">
          {t.services.cards.map((card, cardIndex) => {
            const CardIcon = cardIcons[cardIndex];
            return (
            <article className="service-card reveal" key={cardIndex}
              onPointerMove={(event) => {
                if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                const bounds = event.currentTarget.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                const y = (event.clientY - bounds.top) / bounds.height - 0.5;
                event.currentTarget.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
                event.currentTarget.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
                event.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
              }}
              onPointerLeave={(event) => { event.currentTarget.style.transform = ''; }}>
              <div className="service-icon-well"><CardIcon className="icon" /></div>
              <h3>{card.title}</h3>
              <ul className="service-list">
                {card.services.map((service, index) => <li key={index}><Check className="icon" />{service}</li>)}
              </ul>
              <ArrowUpRight className="icon service-arrow" />
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Doctors() {
  const { t } = useLanguage();

  return (
    <section className="section doctors-section" id="doctors">
      <div className="container">
        <Heading subline={t.doctors.subline}><TitleText title={t.doctors.title} /></Heading>
        <div className="doctors-grid">
        {DOCTORS.map((doctor, index) => {
            const imageOnLeft = index % 2 === 0;
            // Base path; each photo has -800.webp and -1152.webp versions plus the original .png fallback.
            const photo = doctor.photo;
            const text = t.doctors.list[doctor.initials];
            return (
            <article
              className={`doctor-card reveal doctor-card--image-${imageOnLeft ? 'left' : 'right'}`}
              key={doctor.initials}
              style={{ '--card-delay': `${index * 120}ms` } as CSSProperties}
            >
              <div className="doctor-portrait">
                <picture className="doctor-photo-picture">
                  <source type="image/webp" srcSet={`${photo}-800.webp 800w, ${photo}-1152.webp 1152w`} sizes="(max-width: 767px) 92vw, 560px" />
                  <img
                    className="doctor-photo"
                    src={`${photo}.png`}
                    alt={t.doctors.photoAlt(text.name, text.department)}
                    loading="lazy"
                    decoding="async"
                    width="1152"
                    height="768"
                  />
                </picture>
              </div>
              <div className="doctor-details">
                <p className="doctor-specialty">{text.department}</p>
                <h3>{text.name}</h3>
                <p className="doctor-credentials" lang="en">{doctor.degree}</p>
                <hr className="doctor-divider" />
                <h4>{t.doctors.areasOfCare}</h4>
                <p className="doctor-care"><Check aria-hidden="true" />{text.care}</p>
                <div className="doctor-availability" aria-label={t.doctors.timingsAria}>
                  {text.timings.map((timing, slot) => <span className="doctor-time-slot" key={slot}><Clock3 aria-hidden="true" />{timing}</span>)}
                </div>
                <a
                  className="button doctor-book"
                  href={TEL}
                  onPointerMove={(event) => {
                    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                    const bounds = event.currentTarget.getBoundingClientRect();
                    const x = event.clientX - bounds.left - bounds.width / 2;
                    const y = event.clientY - bounds.top - bounds.height / 2;
                    event.currentTarget.style.setProperty('--magnet-x', `${x * .12}px`);
                    event.currentTarget.style.setProperty('--magnet-y', `${y * .12}px`);
                  }}
                  onPointerLeave={(event) => {
                    event.currentTarget.style.setProperty('--magnet-x', '0px');
                    event.currentTarget.style.setProperty('--magnet-y', '0px');
                  }}
                >{t.doctors.callToBook}</a>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const { t } = useLanguage();
  const reasonIcons = [Ambulance, Stethoscope, FlaskConical, UsersRound];
  return (
    <section className="section why-section" id="why-choose-us">
      <div className="container">
        <Heading subline={t.why.subline}><TitleText title={t.why.title} /></Heading>
        <div className="why-grid">
          {t.why.reasons.map((reason, index) => {
            const ReasonIcon = reasonIcons[index];
            return (
            <article className="why-card reveal" key={index}>
              <span className="why-icon"><ReasonIcon aria-hidden="true" /></span>
              <h3>{reason.title}</h3>
              <p>{reason.line}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <Heading><TitleText title={t.faq.title} /></Heading>
        <div className="faq-list">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <article className="faq-item reveal" key={index}>
                <h3>
                  <button id={triggerId} className="faq-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                    <span>{item.question}</span>
                    <span className={`faq-toggle${isOpen ? ' is-open' : ''}`} aria-hidden="true"><Plus /></span>
                  </button>
                </h3>
                <div id={panelId} className={`faq-panel${isOpen ? ' is-open' : ''}`} role="region" aria-labelledby={triggerId} aria-hidden={!isOpen}>
                  <div className="faq-panel-inner"><p>{item.answer}</p></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type GalleryPhoto = { src: string; srcSet?: string; width: number; height: number };

// The four photos always shown in the main grid.
const featuredPhotos: GalleryPhoto[] = [
  { src: '/assets/gallery/hospital-exterior.png', srcSet: '/assets/gallery/hospital-exterior-480.webp 480w, /assets/gallery/hospital-exterior-1200.webp 1200w', width: 1302, height: 768 },
  { src: '/assets/gallery/hospital-exterior-dusk.png', srcSet: '/assets/gallery/hospital-exterior-dusk-480.webp 480w, /assets/gallery/hospital-exterior-dusk-1200.webp 1200w', width: 1585, height: 768 },
  { src: '/assets/gallery/pharmacy.png', srcSet: '/assets/gallery/pharmacy-480.webp 480w, /assets/gallery/pharmacy-1200.webp 1200w', width: 1615, height: 768 },
  { src: '/assets/gallery/reception.png', srcSet: '/assets/gallery/reception-480.webp 480w, /assets/gallery/reception-768.webp 768w', width: 768, height: 1610 },
];

// Extra photos behind "View more photos": every image file in src/assets/gallery-more/, ordered by file name.
// Their real size is learned when they load; 4:3 is only the starting guess.
const morePhotoUrls = import.meta.glob<string>('../assets/gallery-more/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true, query: '?url', import: 'default' });
const morePhotos: GalleryPhoto[] = Object.keys(morePhotoUrls)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((file) => ({ src: morePhotoUrls[file], width: 1200, height: 900 }));

const galleryPhotos = [...featuredPhotos, ...morePhotos];
const measuredSizes = new Map<number, { width: number; height: number }>();

function photoSize(index: number) {
  return measuredSizes.get(index) ?? galleryPhotos[index];
}

function rememberSize(index: number, image: HTMLImageElement) {
  if (image.naturalWidth && image.naturalHeight) measuredSizes.set(index, { width: image.naturalWidth, height: image.naturalHeight });
}

const galleryImageCache = new Map<number, Promise<HTMLImageElement>>();
const gallerySizes = '(max-width: 1100px) 90vw, 1080px';

function loadDecodedGalleryPhoto(index: number) {
  const cached = galleryImageCache.get(index);
  if (cached) return cached;
  const photo = galleryPhotos[index];
  const image = new Image();
  const ready = new Promise<HTMLImageElement>((resolve, reject) => {
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load ${photo.src}`));
    image.sizes = gallerySizes;
    if (photo.srcSet) image.srcset = photo.srcSet;
    image.src = photo.src;
    if (image.complete && image.naturalWidth) resolve(image);
  }).then(async (loadedImage) => {
    if (typeof loadedImage.decode === 'function') await loadedImage.decode();
    rememberSize(index, loadedImage);
    return loadedImage;
  }).catch((error: unknown) => {
    galleryImageCache.delete(index);
    throw error;
  });
  galleryImageCache.set(index, ready);
  return ready;
}

function getLightboxSize(width: number, height: number) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const mobile = viewportWidth < 768;
  const maxWidth = mobile ? viewportWidth - 24 : Math.min(viewportWidth * 0.92, viewportWidth - 176);
  const maxHeight = mobile ? Math.max(100, viewportHeight * 0.85 - 72) : viewportHeight * 0.88;
  const scale = Math.min(maxWidth / width, maxHeight / height);
  return { width: Math.round(width * scale), height: Math.round(height * scale) };
}

export function HospitalGallery() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [frameSize, setFrameSize] = useState<{ width: number; height: number } | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const moreButtonRow = useRef<HTMLDivElement | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const dialog = useRef<HTMLDivElement | null>(null);
  const incomingImage = useRef<HTMLImageElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const finishSwitchTimer = useRef<number | null>(null);
  const unlockSwitchTimer = useRef<number | null>(null);
  const switchLocked = useRef(false);
  const pendingIndexRef = useRef<number | null>(null);
  const switchRequest = useRef(0);

  const clearSwitch = useCallback(() => {
    switchRequest.current += 1;
    switchLocked.current = false;
    pendingIndexRef.current = null;
    if (finishSwitchTimer.current !== null) window.clearTimeout(finishSwitchTimer.current);
    if (unlockSwitchTimer.current !== null) window.clearTimeout(unlockSwitchTimer.current);
    finishSwitchTimer.current = null;
    unlockSwitchTimer.current = null;
    setPendingIndex(null);
    setIsCrossfading(false);
  }, []);

  const movePhoto = useCallback((direction: number) => {
    if (activeIndex === null || switchLocked.current || isClosing) return;
    const nextIndex = (activeIndex + direction + galleryPhotos.length) % galleryPhotos.length;
    switchLocked.current = true;
    const request = ++switchRequest.current;
    void loadDecodedGalleryPhoto(nextIndex).then((decodedImage) => {
      if (request !== switchRequest.current) return;
      const width = decodedImage.naturalWidth || photoSize(nextIndex).width;
      const height = decodedImage.naturalHeight || photoSize(nextIndex).height;
      pendingIndexRef.current = nextIndex;
      setPendingIndex(nextIndex);
      setFrameSize(getLightboxSize(width, height));
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setActiveIndex(nextIndex);
        pendingIndexRef.current = null;
        setPendingIndex(null);
        switchLocked.current = false;
        return;
      }
      const beginCrossfade = (attempt: number) => {
        if (request !== switchRequest.current) return;
        const image = incomingImage.current;
        if (!image) {
          if (attempt < 3) requestAnimationFrame(() => beginCrossfade(attempt + 1));
          else {
            pendingIndexRef.current = null;
            setPendingIndex(null);
            setFrameSize(getLightboxSize(photoSize(activeIndex).width, photoSize(activeIndex).height));
            switchLocked.current = false;
          }
          return;
        }
        const decoded = typeof image.decode === 'function' ? image.decode() : Promise.resolve();
        void decoded.then(() => {
          if (request !== switchRequest.current) return;
          setIsCrossfading(true);
          finishSwitchTimer.current = window.setTimeout(() => {
            if (request !== switchRequest.current) return;
            setActiveIndex(nextIndex);
            pendingIndexRef.current = null;
            setPendingIndex(null);
            setIsCrossfading(false);
            finishSwitchTimer.current = null;
          }, 350);
          unlockSwitchTimer.current = window.setTimeout(() => {
            if (request === switchRequest.current) switchLocked.current = false;
            unlockSwitchTimer.current = null;
          }, 450);
        }).catch(() => {
          if (request !== switchRequest.current) return;
          pendingIndexRef.current = null;
          setPendingIndex(null);
          setFrameSize(getLightboxSize(photoSize(activeIndex).width, photoSize(activeIndex).height));
          switchLocked.current = false;
        });
      };
      requestAnimationFrame(() => beginCrossfade(0));
    }).catch(() => {
      if (request === switchRequest.current) switchLocked.current = false;
    });
  }, [activeIndex, isClosing]);

  const closeLightbox = useCallback(() => {
    if (closeTimer.current !== null) return;
    clearSwitch();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveIndex(null);
      requestAnimationFrame(() => opener.current?.focus());
      return;
    }
    setIsClosing(true);
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      setActiveIndex(null);
      setIsClosing(false);
      requestAnimationFrame(() => opener.current?.focus());
    }, 300);
  }, [clearSwitch]);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') { event.preventDefault(); movePhoto(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); movePhoto(-1); }
      if (event.key === 'Tab' && dialog.current) {
        const focusable = [...dialog.current.querySelectorAll<HTMLElement>('button:not(:disabled)')];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, closeLightbox, movePhoto]);

  useEffect(() => {
    if (activeIndex === null) return;
    [
      (activeIndex + 1) % galleryPhotos.length,
      (activeIndex - 1 + galleryPhotos.length) % galleryPhotos.length,
    ].forEach((index) => { void loadDecodedGalleryPhoto(index).catch(() => undefined); });
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const resizeFrame = () => {
      const photo = photoSize(pendingIndexRef.current ?? activeIndex);
      setFrameSize(getLightboxSize(photo.width, photo.height));
    };
    window.addEventListener('resize', resizeFrame);
    return () => window.removeEventListener('resize', resizeFrame);
  }, [activeIndex]);

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    if (finishSwitchTimer.current !== null) window.clearTimeout(finishSwitchTimer.current);
    if (unlockSwitchTimer.current !== null) window.clearTimeout(unlockSwitchTimer.current);
  }, []);

  // Named photos use their caption; extra photos are described by number.
  const photoLabel = (index: number) => t.gallery.captions[index] ?? t.gallery.photo(index + 1);
  const photoAlt = (index: number) => t.gallery.alt(photoLabel(index));

  const openPhoto = (index: number, trigger: HTMLButtonElement) => {
    opener.current = trigger;
    clearSwitch();
    setIsClosing(false);
    setFrameSize(getLightboxSize(photoSize(index).width, photoSize(index).height));
    setActiveIndex(index);
    // Extra photos have no size until loaded; correct the frame once the real size is known.
    void loadDecodedGalleryPhoto(index).then(() => {
      setFrameSize((current) => (current ? getLightboxSize(photoSize(index).width, photoSize(index).height) : current));
    }).catch(() => undefined);
  };

  const toggleMore = () => {
    const closing = showMore;
    setShowMore(!showMore);
    // After collapsing, keep the button in view instead of leaving the visitor far down the page.
    if (closing) requestAnimationFrame(() => moreButtonRow.current?.scrollIntoView({ block: 'center' }));
  };

  const renderTile = (photo: GalleryPhoto, index: number, className: string, sizes: string) => (
    <button
      className={`gallery-tile ${className} reveal`}
      type="button"
      key={photo.src}
      aria-label={t.gallery.open(photoLabel(index))}
      onClick={(event) => openPhoto(index, event.currentTarget)}
    >
      <picture>
        {photo.srcSet && <source type="image/webp" srcSet={photo.srcSet} sizes={sizes} />}
        <img
          src={photo.src}
          alt={photoAlt(index)}
          loading="lazy"
          decoding="async"
          width={photo.width}
          height={photo.height}
          onLoad={(event) => rememberSize(index, event.currentTarget)}
        />
      </picture>
    </button>
  );

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <Heading subline={t.gallery.subline}><TitleText title={t.gallery.title} /></Heading>
        <div className="gallery-grid">
          {featuredPhotos.map((photo, index) => renderTile(photo, index, `gallery-tile-${index + 1}`, index === 0 ? '(max-width: 767px) 100vw, 50vw' : '(max-width: 767px) 50vw, 24vw'))}
        </div>
        {showMore && (
          <div className="gallery-more-grid" id="gallery-more-grid">
            {morePhotos.map((photo, offset) => renderTile(photo, featuredPhotos.length + offset, 'gallery-more-tile', '(max-width: 767px) 50vw, 25vw'))}
          </div>
        )}
        {morePhotos.length > 0 && (
          <div className="gallery-more" ref={moreButtonRow}>
            <button
              className={`button button-outline gallery-more-toggle${showMore ? ' is-open' : ''}`}
              type="button"
              aria-expanded={showMore}
              aria-controls="gallery-more-grid"
              onClick={toggleMore}
            >
              <span>{showMore ? t.gallery.less : t.gallery.more(morePhotos.length)}</span><Icon name="down" />
            </button>
          </div>
        )}
      </div>
      {activeIndex !== null && (
        <div
          className={`gallery-lightbox${isClosing ? ' is-closing' : ''}`}
          ref={dialog}
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.dialog}
          onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
          onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            const end = event.changedTouches[0]?.clientX;
            if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 45) movePhoto(end < touchStart.current ? 1 : -1);
            touchStart.current = null;
          }}
        >
            <button className="gallery-arrow gallery-arrow-prev" type="button" aria-label={t.gallery.previous} onClick={() => movePhoto(-1)}>‹</button>
            <div
              className={`gallery-lightbox-image${isCrossfading ? ' is-crossfading' : ''}`}
              style={frameSize ? { width: `${frameSize.width}px`, height: `${frameSize.height}px` } : undefined}
              onClick={(event) => event.stopPropagation()}
            >
              {[activeIndex, ...(pendingIndex === null ? [] : [pendingIndex])].map((index) => {
                const photo = galleryPhotos[index];
                const isIncoming = index === pendingIndex;
                return (
                  <picture className={`gallery-lightbox-photo${isIncoming ? ' is-incoming' : ' is-outgoing'}`} key={photo.src}>
                    {photo.srcSet && <source type="image/webp" srcSet={photo.srcSet} sizes={gallerySizes} />}
                    <img ref={isIncoming ? incomingImage : undefined} src={photo.src} alt={photoAlt(index)} width={photoSize(index).width} height={photoSize(index).height} />
                  </picture>
                );
              })}
              <button className="gallery-close" ref={closeButton} type="button" aria-label={t.gallery.close} onClick={closeLightbox}>×</button>
            </div>
            <button className="gallery-arrow gallery-arrow-next" type="button" aria-label={t.gallery.next} onClick={() => movePhoto(1)}>›</button>
        </div>
      )}
    </section>
  );
}

export function Reviews() {
  const { t } = useLanguage();
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <Heading subline={t.reviews.subline}><TitleText title={t.reviews.title} /></Heading>
        <div className="reviews-layout">
        <Reveal className="reviews-summary-reveal">
          <div className="reviews-summary" aria-label={t.reviews.summaryAria}>
            <div className="reviews-score">
              <strong>4.9</strong>
              <span className="rating-stars" aria-label={t.reviews.starsAria}>★★★★★</span>
              <span className="rating-count">{t.reviews.count}</span>
            </div>
            <div className="reviews-breakdown" aria-hidden="true">
              {[['5', '100%'], ['4', '7%'], ['3', '1%'], ['2', '1%'], ['1', '3%']].map(([rating, fill], index) => (
                <div className="rating-row" key={rating} style={{ '--rating-delay': `${index * 90}ms` } as CSSProperties}>
                  <span>{rating}</span>
                  <span className="rating-track"><span className="rating-fill" style={{ '--rating-fill': fill } as CSSProperties} /></span>
                </div>
              ))}
            </div>
            <a className="write-review-button" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">
              <SquarePen aria-hidden="true" />
              <span>{t.reviews.write}</span>
            </a>
          </div>
        </Reveal>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card reveal" key={review.author}>
              <div className="stars" aria-label={t.reviews.cardStarsAria}>
                {[0, 1, 2, 3, 4].map((star) => <span className="star" key={star} aria-hidden="true">★</span>)}
              </div>
              {/* Patients' own words stay exactly as they wrote them. */}
              <p className="review-copy" lang={review.lang}>{review.copy}</p>
              <div className="review-author"><span>{review.author}</span><time>{t.reviews.times[index]}</time></div>
            </article>
          ))}
        </div>
        <Reveal className="review-cta">
          <a className="button button-outline" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">
            <span>{t.reviews.readMore}</span><Icon name="external" />
          </a>
        </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Facilities() {
  const { t } = useLanguage();
  const facilityIcons = [Truck, FlaskConical, Pill, HeartPulse, Syringe];
  return (
    <section className="facilities-band" aria-label={t.facilities.aria}>
      <div className="container facilities-grid">
        {facilityIcons.map((FacilityIcon, index) => <div className="facility-item reveal" key={index}><FacilityIcon className="icon" /><span>{t.facilities.items[index]}</span></div>)}
      </div>
    </section>
  );
}

export function Visit() {
  const { t } = useLanguage();
  const [mapActive, setMapActive] = useState(false);
  return (
    <section className="section visit-section" id="visit">
      <div className="container">
        <div className="visit-grid">
          <div className="visit-copy">
            <div className="reveal">
              <p className="section-label">{t.visit.label}</p>
              <h2 className="visit-heading"><TitleText title={t.visit.title} /></h2>
              <p className="visit-subline">{t.visit.subline}</p>
            </div>
            <p className="address-block reveal">
              <strong>{t.visit.address}</strong>
              <span>{t.visit.addressLine}</span>
            </p>
            <div className="reveal">
              <a className="phone-primary button magnetic" href={TEL} onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}>{PHONE}</a>
              <div className="other-phones">
                <a href="tel:+919966193444">+91 99661 93444</a>              </div>
            </div>
            <ClinicHours className="visit-hours reveal" />
            <a className="visit-emergency reveal magnetic" href={TEL} onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}>{t.visit.emergency}</a>
            <a className="instagram-card reveal" href={HOSPITAL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={t.instagram.aria}>
              <span className="instagram-card-icon"><Icon name="instagram" /></span>
              <span className="instagram-card-copy">
                <strong>{t.instagram.follow}</strong>
                <span>{t.instagram.blurb}</span>
                <span className="instagram-card-handle">{HOSPITAL_INFO.instagramHandle}</span>
              </span>
              <Icon name="external" className="instagram-card-arrow" />
            </a>
          </div>
          <div>
            <div className="map-card reveal" onClick={() => setMapActive(true)} onPointerLeave={() => setMapActive(false)}>
              <div className="map-shimmer" />
              <a className="button button-small map-directions" href={DIRECTIONS} target="_blank" rel="noopener noreferrer">{t.visit.goToLocation}</a>
              <iframe
                title={t.visit.mapTitle}
                src={HOSPITAL_MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={(event) => event.currentTarget.classList.add('loaded')}
                style={{ pointerEvents: mapActive ? 'auto' : 'none' }}
              />
            </div>
            <div className="map-controls">
              <a className="button" href={TEL}>{t.visit.callNow}</a>
              <a className="button button-outline" href={DIRECTIONS} target="_blank" rel="noopener noreferrer"><span>{t.visit.directions}</span><Icon name="pin" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
