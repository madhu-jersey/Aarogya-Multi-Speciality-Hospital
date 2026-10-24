import { Activity, FlaskConical, HeartPulse, Pill, Syringe, Truck } from 'lucide-react';
import { DIRECTIONS, Icon, Logo, magneticPointerLeave, magneticPointerMove, PHONE, TEL } from './common';
import { HOSPITAL_INFO } from '@/lib/hospital';
import { useLanguage } from '@/lib/i18n';

function ClinicHours({ className = '', hero = false }: { className?: string; hero?: boolean }) {
  const { t } = useLanguage();
  return (
    <aside className={`hours-card hero-hours ${className}`} aria-label={t.hours.aria}>
      <div className="hours-heading">
        <strong>{t.hours.title}</strong>
        <span className="emergency-pill">{t.hours.pill}</span>
      </div>
      <div className="hours-row">
        <b><i className="status-dot" />{t.hours.emergency}</b>
        <span>{t.hours.emergencyTime}</span>
      </div>
      {hero ? (
        <>
          <div className="hours-row hospital-timings-heading"><b>{t.hours.opTimings}</b></div>
          {t.hours.opSlots.map((slot, index) => (
            <div className="hours-row hospital-timing-slot" key={index}><span>{slot}</span></div>
          ))}
        </>
      ) : (
        <div className="hours-row">
          <b>{t.hours.urology}</b>
          <span>{t.hours.urologyTime}</span>
        </div>
      )}
    </aside>
  );
}

export { ClinicHours };

const trustIcons = [HeartPulse, Truck, Pill, FlaskConical, Activity, Syringe];

export function Hero() {
  const { t } = useLanguage();
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="hero-pill"><i aria-hidden="true" />{t.hero.pill}</div>
            <h1 className="hero-title">
              <span className="hero-title-mask">
                <span className="hero-title-name">
                  <img
                    className="hero-wordmark"
                    src="/assets/aarogya-wordmark.webp"
                    srcSet="/assets/aarogya-wordmark-600.webp 600w, /assets/aarogya-wordmark.webp 1200w"
                    sizes="(max-width: 767px) 90vw, 520px"
                    alt="Aarogya"
                    width="1200"
                    height="272"
                    fetchPriority="high"
                    decoding="async"
                  />
                </span>
              </span>
              {t.hero.titleLines.map((line, index) => (
                <span className="hero-title-mask" key={index}><span className="hero-title-sub">{line}</span></span>
              ))}
            </h1>
            <p className={`hero-telugu${t.hero.otherNameLang === 'te' ? ' telugu' : ''}`} lang={t.hero.otherNameLang}>{t.hero.otherName}</p>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <a className="button magnetic" href={TEL} onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}><Icon name="phone" />{t.hero.callNow}</a>
              <a className="button button-outline magnetic" href={DIRECTIONS} target="_blank" rel="noopener noreferrer" onPointerMove={magneticPointerMove} onPointerLeave={magneticPointerLeave}><Icon name="pin" /><span>{t.hero.directions}</span></a>
            </div>
            <p className="hero-emergency">{t.hero.emergency[0]}<a href={TEL}>{PHONE}</a>{t.hero.emergency[1]}</p>
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
                    alt={t.hero.photoAlt}
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
            {trustIcons.map((TrustIcon, index) => (
              <div className="trust-item reveal" key={index}><TrustIcon className="icon" aria-hidden="true" />{t.trust[index]}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
