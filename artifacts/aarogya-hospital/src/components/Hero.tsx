import { DIRECTIONS, HOSPITAL, Icon, Logo, magneticPointerLeave, magneticPointerMove, PHONE, TEL, TELUGU } from './common';
import { HOSPITAL_INFO } from '@/lib/hospital';

function ClinicHours({ className = '', hero = false }: { className?: string; hero?: boolean }) {
  return (
    <aside className={`hours-card hero-hours ${className}`} aria-label="Clinic hours">
      <div className="hours-heading">
        <strong>Clinic hours</strong>
        <span className="emergency-pill">Emergency 24/7</span>
      </div>
      <div className="hours-row">
        <b><i className="status-dot" />Emergency</b>
        <span>24 hours, 7 days</span>
      </div>
      {hero ? (
        <>
          <div className="hours-row hospital-timings-heading"><b>Hospital timings</b></div>
          <div className="hours-row hospital-timing-slot"><span>Daily, 9:00 AM to 2:00 PM</span></div>
          <div className="hours-row hospital-timing-slot"><span>Daily, 6:00 PM to 9:00 PM</span></div>
        </>
      ) : (
        <div className="hours-row">
          <b>Urology OPD (Dr. V.D. Prasad Muthyala)</b>
          <span>5:00 PM to 8:00 PM, daily</span>
        </div>
      )}
    </aside>
  );
}

export { ClinicHours };

export function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="hero-pill"><i aria-hidden="true" />{HOSPITAL} · Sajjapuram</div>
            <h1 className="hero-title">
              <span className="hero-title-mask"><span className="hero-title-name">Aarogya</span></span>
              <span className="hero-title-mask"><span className="hero-title-serif">Multi Speciality</span></span>
              <span className="hero-title-mask"><span className="hero-title-serif">Hospital</span></span>
            </h1>
            <p className="hero-telugu telugu" lang="te">{TELUGU}</p>
            <p className="hero-lead">Corporate-level medical care for everyone, provided by specialist doctors.</p>
            <div className="hero-actions">
              <a className="button magnetic" href={TEL} onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}><Icon name="phone" />Call now</a>
              <a className="button button-outline magnetic" href={DIRECTIONS} target="_blank" rel="noopener noreferrer" onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}><Icon name="pin" /><span>Get directions</span></a>
            </div>
            <p className="hero-emergency">For emergencies, call <a href={TEL}>{PHONE}</a>, 24 hours a day.</p>
          </div>
          <div className="hero-visual">
            <div className="photo-wrap">
            <div
              className="hero-photo"
              onPointerMove={(event) => {
                if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                const bounds = event.currentTarget.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                const y = (event.clientY - bounds.top) / bounds.height - 0.5;
                event.currentTarget.style.setProperty('--tilt-x', `${-y * 8}deg`);
                event.currentTarget.style.setProperty('--tilt-y', `${x * 8}deg`);
                event.currentTarget.style.setProperty('--parallax-x', `${x * 6}px`);
                event.currentTarget.style.setProperty('--parallax-y', `${y * 6}px`);
              }}
              onPointerLeave={(event) => {
                event.currentTarget.style.setProperty('--tilt-x', '0deg');
                event.currentTarget.style.setProperty('--tilt-y', '0deg');
                event.currentTarget.style.setProperty('--parallax-x', '0px');
                event.currentTarget.style.setProperty('--parallax-y', '0px');
              }}
            >
              <div className="hero-image-motion">
                <picture className="hero-image-picture">
                  <source type="image/webp" srcSet={HOSPITAL_INFO.imageWebpSrcSet} sizes="(max-width: 767px) 100vw, 50vw" />
                  <img
                    className="hero-image is-intro"
                    src={HOSPITAL_INFO.image}
                    alt={`Exterior of ${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="851"
                    height="768"
                    onAnimationEnd={(event) => event.currentTarget.classList.remove('is-intro')}
                    onError={(event) => { event.currentTarget.style.display = 'none'; }}
                  />
                </picture>
              </div>
              <picture className="logo-picture">
                <source type="image/webp" srcSet={HOSPITAL_INFO.logoWebp} />
                <img className="hero-watermark" src={HOSPITAL_INFO.logo} alt="" aria-hidden="true" width="1222" height="1287" />
              </picture>
            </div>
            <div className="hero-badge"><Logo /></div>
            </div>
            <ClinicHours hero />
          </div>
        </div>
      </section>
      <div className="trust-band">
        <div className="container">
          <div className="trust-strip">
            <div className="trust-item reveal" style={{ transitionDelay: '0ms' }}><Icon name="heart" />24/7 emergency services</div>
            <div className="trust-item reveal" style={{ transitionDelay: '100ms' }}><Icon name="pin" />24/7 ambulance</div>
            <div className="trust-item reveal" style={{ transitionDelay: '200ms' }}><Icon name="heart" />ICU and HDU</div>
            <div className="trust-item reveal" style={{ transitionDelay: '300ms' }}><Icon name="clock" />Advanced operation theatres</div>
          </div>
        </div>
      </div>
    </>
  );
}
