import { ADDRESS, HOSPITAL, PHONE, TEL, TELUGU } from './common';
import { HOSPITAL_INFO } from '@/lib/hospital';

export function Footer() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Why choose us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit us', href: '#visit' },
    { label: 'FAQ', href: '#faq' },
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
            <p className="footer-name">{HOSPITAL}</p>
            <p className="footer-telugu telugu" lang="te">{TELUGU}</p>
            <p className="footer-loc">Sajjapuram, Andhra Pradesh</p>
          </div>
          <div className="reveal">
            <h3>Explore</h3>
            <nav className="footer-nav" aria-label="Footer navigation">
              {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </div>
          <div className="footer-connect reveal">
            <h3>Connect</h3>
            <p><a href={TEL}>Call {PHONE}</a></p>
            <p>{ADDRESS}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Information only. This website does not replace a consultation or emergency care.</p>
          <p>© {HOSPITAL} · {HOSPITAL_INFO.locality}</p>
        </div>
      </div>
    </footer>
  );
}
