import { InstagramLink, PHONE, TEL } from './common';
import { HOSPITAL_INFO } from '@/lib/hospital';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t } = useLanguage();
  const links = [
    { label: t.nav.ourStory, href: '#our-story' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.doctors, href: '#doctors' },
    { label: t.nav.whyChooseUs, href: '#why-choose-us' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.visit, href: '#visit' },
    { label: t.nav.faq, href: '#faq' },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="reveal">
            <div className="footer-brand-tile">
              <picture className="logo-picture">
                <source type="image/webp" srcSet={HOSPITAL_INFO.logoWebp} />
                <img src={HOSPITAL_INFO.logo} alt={`${HOSPITAL_INFO.name} logo in ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`} loading="lazy" width="1222" height="1287" />
              </picture>
            </div>
            <p className="footer-name">{t.footer.name}</p>
            <p className={`footer-telugu${t.footer.otherNameLang === 'te' ? ' telugu' : ''}`} lang={t.footer.otherNameLang}>{t.footer.otherName}</p>
            <p className="footer-loc">{t.footer.location}</p>
          </div>
          <div className="reveal">
            <h3>{t.footer.explore}</h3>
            <nav className="footer-nav" aria-label={t.footer.nav}>
              {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </div>
          <div className="footer-connect reveal">
            <h3>{t.footer.connect}</h3>
            <p><a href={TEL}>{t.footer.call(PHONE)}</a></p>
            <p>{t.visit.address}</p>
            <InstagramLink className="footer-instagram">
              <span>{HOSPITAL_INFO.instagramHandle}</span>
            </InstagramLink>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footer.disclaimer}</p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
