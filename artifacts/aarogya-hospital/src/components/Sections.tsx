import { type CSSProperties, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Activity, Ambulance, ArrowUpRight, BriefcaseMedical, Check, Clock3, FlaskConical, HeartPulse, Pill, Plus, SquarePen, Stethoscope, Syringe, Truck, UsersRound } from 'lucide-react';
import { ADDRESS, DIRECTIONS, GOOGLE_REVIEWS, Icon, magneticPointerLeave, magneticPointerMove, PHONE, TEL } from './common';
import { ClinicHours } from './Hero';
import { DOCTORS, FAQ_ITEMS, HOSPITAL_INFO, HOSPITAL_MAP_EMBED } from '@/lib/hospital';

const reviews = [
  {
    author: 'venkateswararao pulagam',
    time: '6 months ago',
    copy: 'Had a very good experience at a hospital in Tanuku. The staff were extremely supportive, and I would especially like to appreciate Nurse Revathi for her kindness and polite behavior. She took great care of my sister after her laparoscopic operation and made us feel comfortable throughout. She truly deserves recognition for her patience and dedication. Special thanks to the doctor as well for providing the best treatment and ensuring a smooth recovery. Thank you so much for your excellent care',
  },
  {
    author: 'Chaitanya Dimple',
    time: '4 months ago',
    copy: 'Hospital chala ante chala clean ga undhi, staff chala care tisukunnaru. Doctors chala friendly..motham hospital ki, doctor ki ,staff ki service mothaniki 100 ki 500 marks. Motham last lo bill yekkuva avuthundhi yemo entha bavundhi kadha anukunnam,but chala thakkuva bill tho chala baga chusukunnaru. Midnight lo emergency ga join ayam..aa time lo doctors vachi full care tisukunnaru sontha vallani chusukunnatlu..chala nacchindhi. Tanuku lo elanti hospital ledhu.',
  },
  {
    author: 'PURNA K',
    time: '4 months ago',
    copy: 'The hospital facilities are very clean and well maintained good receiving doctors also very friendly especially samrin madam she is very good with patients well explained everything\nLow cost billing with higher quality treatment\nThank you arogya multi speciality hospital everyone.',
  },
  {
    author: 'Kayala Akhil',
    time: '3 months ago',
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

export function About() {
  const features = [
    { icon: <Activity className="icon" />, label: 'Pulmonology and general medicine' },
    { icon: <BriefcaseMedical className="icon" />, label: 'Surgery and urology' },
    { icon: <HeartPulse className="icon" />, label: "Women's and emergency care" },
    { icon: <FlaskConical className="icon" />, label: 'Laboratory, pharmacy, and ICU' },
  ];
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-intro">
          <Heading>About <em>Aarogya</em> Multi Speciality Hospital</Heading>
          <Reveal>
            <p>{HOSPITAL_INFO.name} in {HOSPITAL_INFO.locality}, near {HOSPITAL_INFO.nearbyCity}, offers corporate-level medical services for everyone, with specialist doctors across pulmonology, general medicine, surgery, urology, and gynaecology, and 24x7 emergency care.</p>
          </Reveal>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.label}>
              <article className="feature-tile" style={{ transitionDelay: `${index * 90}ms` }}>
                {feature.icon}
                <strong>{feature.label}</strong>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal><a className="button button-outline" href="#doctors"><span>Meet our doctors</span><Icon name="arrow" /></a></Reveal>
      </div>
    </section>
  );
}

export function Services() {
  const cards = [
    {
      icon: <Stethoscope className="icon" />,
      title: 'Medical and surgical care',
      services: ['Pulmonology', 'Rheumatology', 'Urology', 'General medicine', 'General surgery (laparoscopic)'],
    },
    {
      icon: <HeartPulse className="icon" />,
      title: "Women's and emergency care",
      services: ['Gynaecology and obstetric care', '24x7 emergency services', 'Poison cases, snake bite cases, and accident cases'],
    },
    {
      icon: <Syringe className="icon" />,
      title: 'Facilities and support',
      services: ['Laparoscopic surgery', '2D Echo', 'Ventilator facility', 'Advanced operation theatres', 'ICU, laboratory, and pharmacy', 'Visiting services', 'Duty doctor available at night'],
    },
  ];
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Heading subline="Specialist care across medical, surgical, and emergency services.">Our <em>services</em></Heading>
        <div className="services-grid">
          {cards.map((card, cardIndex) => (
            <article className="service-card reveal" key={card.title} style={{ transitionDelay: `${cardIndex * 150}ms` }}
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
              <div className="service-icon-well">{card.icon}</div>
              <h3>{card.title}</h3>
              <ul className="service-list">
                {card.services.map((service) => <li key={service}><Check className="icon" />{service}</li>)}
              </ul>
              <ArrowUpRight className="icon service-arrow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Doctors() {
  const doctorPhotos: Record<string, string> = {
    RK: '/assets/doctors/dr-r-k-naidu-puppala.png',
    SV: '/assets/doctors/dr-s-visweswara-reddy.png',
    BK: '/assets/doctors/dr-bollineni-krishna.png',
    VP: '/assets/doctors/dr-v-d-prasad-muthyala.png',
  };

  return (
    <section className="section doctors-section" id="doctors">
      <div className="container">
        <Heading subline="Specialist doctors at Aarogya Multi Speciality Hospital.">Our <em>doctors</em></Heading>
        <div className="doctors-grid">
        {DOCTORS.map((doctor, index) => {
            const imageOnLeft = index % 2 === 0;
            const photo = doctorPhotos[doctor.initials];
            return (
            <article
              className={`doctor-card reveal doctor-card--image-${imageOnLeft ? 'left' : 'right'}`}
              key={doctor.initials}
              style={{ '--card-delay': `${index * 120}ms` } as CSSProperties}
            >
              <div className="doctor-portrait">
                {photo ? (
                  <img
                    className="doctor-photo"
                    src={photo}
                    alt={`${doctor.name}, ${doctor.department}, Aarogya Multi Speciality Hospital`}
                    loading="lazy"
                    decoding="async"
                    width="1152"
                    height="768"
                  />
                ) : (
                  <span className="doctor-monogram" role="img" aria-label={`Monogram for ${doctor.name}`}>{doctor.initials}</span>
                )}
              </div>
              <div className="doctor-details">
                <p className="doctor-specialty">{doctor.department}</p>
                <h3>{doctor.name}</h3>
                <p className="doctor-credentials">{doctor.degree}</p>
                <hr className="doctor-divider" />
                <h4>Areas of care</h4>
                <p className="doctor-care"><Check aria-hidden="true" />{doctor.care}</p>
                <div className="doctor-availability" aria-label="Doctor timings">
                  {doctor.timings.map((timing) => <span className="doctor-time-slot" key={timing}><Clock3 aria-hidden="true" />{timing}</span>)}
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
                >Call to book</a>
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
  const reasons = [
    { icon: <Ambulance aria-hidden="true" />, title: '24/7 emergency care', line: 'Emergency services run around the clock, with 24/7 ambulance support.' },
    { icon: <Stethoscope aria-hidden="true" />, title: 'Specialist doctors', line: 'Pulmonology, general medicine, surgery, urology, and gynaecology under one roof.' },
    { icon: <FlaskConical aria-hidden="true" />, title: 'Complete facilities', line: 'ICU and HDU, laboratory, pharmacy, and advanced operation theatres.' },
    { icon: <UsersRound aria-hidden="true" />, title: 'Care for everyone', line: 'Corporate-level medical services for everyone in Sajjapuram.' },
  ];
  return (
    <section className="section why-section" id="why-choose-us">
      <div className="container">
        <Heading subline="Corporate-level medical care for everyone, provided by specialist doctors.">Why choose <em>Aarogya</em></Heading>
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <article className="why-card reveal" key={reason.title} style={{ '--item-delay': `${index * 100}ms` } as CSSProperties}>
              <span className="why-icon">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <Heading>Frequently <em>asked</em> questions</Heading>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <article className="faq-item reveal" key={item.question} style={{ '--item-delay': `${index * 80}ms` } as CSSProperties}>
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

const galleryPhotos = [
  { src: '/assets/gallery/hospital-exterior.png', srcSet: '/assets/gallery/hospital-exterior-480.webp 480w, /assets/gallery/hospital-exterior-1200.webp 1200w', caption: 'Hospital exterior', alt: `Hospital exterior at ${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`, width: 1302, height: 768 },
  { src: '/assets/gallery/consultation-room.png', srcSet: '/assets/gallery/consultation-room-480.webp 480w, /assets/gallery/consultation-room-1200.webp 1200w', caption: 'Consultation room', alt: `Consultation room at ${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`, width: 1213, height: 768 },
  { src: '/assets/gallery/hospital-exterior-dusk.png', srcSet: '/assets/gallery/hospital-exterior-dusk-480.webp 480w, /assets/gallery/hospital-exterior-dusk-1200.webp 1200w', caption: 'Hospital exterior at dusk', alt: `Hospital exterior at dusk at ${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`, width: 1585, height: 768 },
  { src: '/assets/gallery/pharmacy.png', srcSet: '/assets/gallery/pharmacy-480.webp 480w, /assets/gallery/pharmacy-1200.webp 1200w', caption: 'Pharmacy', alt: `Pharmacy counter at ${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`, width: 1615, height: 768 },
  { src: '/assets/gallery/reception.png', srcSet: '/assets/gallery/reception-480.webp 480w, /assets/gallery/reception-768.webp 768w', caption: 'Reception', alt: `Reception desk at ${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`, width: 768, height: 1610 },
];

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
    image.srcset = photo.srcSet;
    image.src = photo.src;
    if (image.complete && image.naturalWidth) resolve(image);
  }).then(async (loadedImage) => {
    if (typeof loadedImage.decode === 'function') await loadedImage.decode();
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [frameSize, setFrameSize] = useState<{ width: number; height: number } | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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
      const width = decodedImage.naturalWidth || galleryPhotos[nextIndex].width;
      const height = decodedImage.naturalHeight || galleryPhotos[nextIndex].height;
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
            setFrameSize(getLightboxSize(galleryPhotos[activeIndex].width, galleryPhotos[activeIndex].height));
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
          setFrameSize(getLightboxSize(galleryPhotos[activeIndex].width, galleryPhotos[activeIndex].height));
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
      const photo = galleryPhotos[pendingIndexRef.current ?? activeIndex];
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

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <Heading subline="A look at our hospital.">Inside <em>Aarogya</em></Heading>
        <div className="gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <button
              className={`gallery-tile gallery-tile-${index + 1} reveal`}
              type="button"
              key={photo.src}
              style={{ transitionDelay: `${index * 90}ms` }}
              aria-label={`Open ${photo.caption} photo`}
              onClick={(event) => {
                opener.current = event.currentTarget;
                clearSwitch();
                setIsClosing(false);
                setFrameSize(getLightboxSize(photo.width, photo.height));
                setActiveIndex(index);
              }}
            >
              <picture>
                <source type="image/webp" srcSet={photo.srcSet} sizes={index === 0 ? '(max-width: 767px) 100vw, 50vw' : '(max-width: 767px) 50vw, 24vw'} />
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width={photo.width} height={photo.height} />
              </picture>
              <span className="gallery-caption">{photo.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <div
          className={`gallery-lightbox${isClosing ? ' is-closing' : ''}`}
          ref={dialog}
          role="dialog"
          aria-modal="true"
          aria-label="Hospital gallery"
          onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
          onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            const end = event.changedTouches[0]?.clientX;
            if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 45) movePhoto(end < touchStart.current ? 1 : -1);
            touchStart.current = null;
          }}
        >
            <button className="gallery-arrow gallery-arrow-prev" type="button" aria-label="Previous photo" onClick={() => movePhoto(-1)}>‹</button>
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
                    <source type="image/webp" srcSet={photo.srcSet} sizes={gallerySizes} />
                    <img ref={isIncoming ? incomingImage : undefined} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
                  </picture>
                );
              })}
              <span className="gallery-lightbox-caption">{galleryPhotos[pendingIndex ?? activeIndex].caption}</span>
              <button className="gallery-close" ref={closeButton} type="button" aria-label="Close gallery" onClick={closeLightbox}>×</button>
            </div>
            <button className="gallery-arrow gallery-arrow-next" type="button" aria-label="Next photo" onClick={() => movePhoto(1)}>›</button>
        </div>
      )}
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <Heading subline="Read more reviews on Google.">What patients <em>say</em></Heading>
        <div className="reviews-layout">
        <Reveal className="reviews-summary-reveal">
          <div className="reviews-summary" aria-label="Google rating: 4.9 out of 5 from 114 reviews">
            <div className="reviews-score">
              <strong>4.9</strong>
              <span className="rating-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <span className="rating-count">114 reviews</span>
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
              <span>Write a review</span>
            </a>
          </div>
        </Reveal>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card reveal" key={review.author}>
              <div className="stars" aria-label="Five stars">
                {[0, 1, 2, 3, 4].map((star) => <span className="star" key={star} aria-hidden="true">★</span>)}
              </div>
              <p className="review-copy">{review.copy}</p>
              <div className="review-author"><span>{review.author}</span><time>{review.time}</time></div>
            </article>
          ))}
        </div>
        <Reveal className="review-cta">
          <a className="button button-outline" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">
            <span>Read more reviews on Google</span><Icon name="external" />
          </a>
        </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Facilities() {
  const items = [
    { icon: <Truck className="icon" />, label: '24/7 ambulance' },
    { icon: <FlaskConical className="icon" />, label: 'Laboratory services' },
    { icon: <Pill className="icon" />, label: 'Pharmacy' },
    { icon: <HeartPulse className="icon" />, label: 'ICU and HDU' },
    { icon: <Syringe className="icon" />, label: 'Advanced operation theatres' },
  ];
  return (
    <section className="facilities-band" aria-label="Hospital facilities">
      <div className="container facilities-grid">
        {items.map((item, index) => <div className="facility-item reveal" key={item.label} style={{ transitionDelay: `${index * 90}ms` }}>{item.icon}<span>{item.label}</span></div>)}
      </div>
    </section>
  );
}

export function Visit() {
  const [mapActive, setMapActive] = useState(false);
  return (
    <section className="section visit-section" id="visit">
      <div className="container">
        <div className="visit-grid">
          <div className="visit-copy">
            <div className="reveal">
              <p className="section-label">Visit us</p>
              <h2 className="visit-heading">We're here when <em>you need us.</em></h2>
              <p className="visit-subline">Plan your visit or call the hospital for assistance.</p>
            </div>
            <p className="address-block reveal">
              <strong>{ADDRESS}</strong>
              <span>Sajjapuram, Andhra Pradesh 534211</span>
            </p>
            <div className="reveal">
              <a className="phone-primary button magnetic" href={TEL} onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}>{PHONE}</a>
              <div className="other-phones">
                <a href="tel:+919966193444">+91 99661 93444</a>
                <a href="tel:+918374972243">+91 83749 72243</a>
              </div>
            </div>
            <ClinicHours className="visit-hours reveal" />
            <a className="visit-emergency reveal magnetic" href={TEL} onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}>24x7 emergency services</a>
          </div>
          <div>
            <div className="map-card reveal" onClick={() => setMapActive(true)} onPointerLeave={() => setMapActive(false)}>
              <div className="map-shimmer" />
              <a className="button button-small map-directions" href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Go to location</a>
              <iframe
                title="Aarogya Multi Speciality Hospital, Sajjapuram"
                src={HOSPITAL_MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={(event) => event.currentTarget.classList.add('loaded')}
                style={{ pointerEvents: mapActive ? 'auto' : 'none' }}
              />
            </div>
            <div className="map-controls">
              <a className="button" href={TEL}>Call now</a>
              <a className="button button-outline" href={DIRECTIONS} target="_blank" rel="noopener noreferrer"><span>Get directions</span><Icon name="pin" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
