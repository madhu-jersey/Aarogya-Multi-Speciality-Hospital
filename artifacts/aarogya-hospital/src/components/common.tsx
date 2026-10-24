import { type PointerEvent as ReactPointerEvent, type ReactNode, useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, HeartPulse, Instagram, MapPin, Menu, Phone, X } from 'lucide-react';
import { GOOGLE_REVIEWS, HOSPITAL_ADDRESS_DISPLAY, HOSPITAL_DIRECTIONS, HOSPITAL_INFO, HOSPITAL_TEL } from '@/lib/hospital';
import { LanguageToggle, useLanguage } from '@/lib/i18n';

export const HOSPITAL = HOSPITAL_INFO.name;
export const TELUGU = HOSPITAL_INFO.teluguName;
export const PHONE = HOSPITAL_INFO.phone;
export const TEL = HOSPITAL_TEL;
export const DIRECTIONS = HOSPITAL_DIRECTIONS;
export const ADDRESS = HOSPITAL_ADDRESS_DISPLAY;
export { GOOGLE_REVIEWS };

export function Logo({ className = '' }: { className?: string }) {
  return (
    <picture className="logo-picture">
      <source type="image/webp" srcSet={HOSPITAL_INFO.logoWebp} />
      <img className={className} src={HOSPITAL_INFO.logo} alt={`${HOSPITAL_INFO.name} logo in ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.nearbyCity}, ${HOSPITAL_INFO.region}`} width="1222" height="1287" />
    </picture>
  );
}

export function Icon({ name, className = '' }: { name: 'check' | 'heart' | 'clock' | 'pin' | 'arrow' | 'down' | 'phone' | 'external' | 'instagram'; className?: string }) {
  const props = { className: `icon ${className}`, 'aria-hidden': true as const };
  if (name === 'check') return <Check {...props} />;
  if (name === 'heart') return <HeartPulse {...props} />;
  if (name === 'clock') return <Clock3 {...props} />;
  if (name === 'pin') return <MapPin {...props} />;
  if (name === 'arrow') return <ArrowRight {...props} />;
  if (name === 'down') return <ArrowDown {...props} />;
  if (name === 'phone') return <Phone {...props} />;
  if (name === 'instagram') return <Instagram {...props} />;
  return <ArrowUpRight {...props} />;
}

export function InstagramLink({ className = '', children }: { className?: string; children?: ReactNode }) {
  const { t } = useLanguage();
  return (
    <a className={className} href={HOSPITAL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={children ? undefined : t.instagram.aria}>
      <Icon name="instagram" />
      {children}
    </a>
  );
}

export function magneticPointerMove(event: ReactPointerEvent<HTMLAnchorElement>) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - bounds.left - bounds.width / 2;
  const y = event.clientY - bounds.top - bounds.height / 2;
  event.currentTarget.style.setProperty('--magnet-x', `${x * .1}px`);
  event.currentTarget.style.setProperty('--magnet-y', `${y * .1}px`);
}

export function magneticPointerLeave(event: ReactPointerEvent<HTMLAnchorElement>) {
  event.currentTarget.style.setProperty('--magnet-x', '0px');
  event.currentTarget.style.setProperty('--magnet-y', '0px');
}

const NAV_IDS = ['services', 'doctors', 'gallery', 'reviews', 'visit', 'faq'] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const labels: Record<(typeof NAV_IDS)[number], string> = {
    services: t.nav.services,
    doctors: t.nav.doctors,
    gallery: t.nav.gallery,
    reviews: t.nav.reviews,
    visit: t.nav.visit,
    faq: t.nav.faq,
  };

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        const line = document.querySelector<HTMLElement>('.top-progress');
        if (line) line.style.transform = `scaleX(${progress})`;
        setScrolled(window.scrollY > 40);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (current) setActive(current.target.id);
    }, { rootMargin: '-28% 0px -60% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label={t.header.homeAria}>
          <Logo />
          <span className="brand-copy">
            <span className="brand-name">{HOSPITAL}</span>
          <span className="brand-telugu telugu" lang="te">{TELUGU}</span>
          </span>
        </a>
        <nav className="nav" aria-label={t.header.mainNav}>
          {NAV_IDS.map((id) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>{labels[id]}</a>)}
        </nav>
        <LanguageToggle className="header-lang" />
        <InstagramLink className="header-instagram" />
        <a className="button button-small header-call" href={TEL} aria-label={t.header.callAria(PHONE)}><Icon name="phone" />{t.header.call}</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>
      <nav className={`mobile-panel ${menuOpen ? 'open' : ''}`} aria-label={t.header.mobileNav}>
        {NAV_IDS.map((id) => <a key={id} href={`#${id}`} onClick={closeMenu}>{labels[id]}</a>)}
        <InstagramLink className="mobile-instagram">
          <span>{t.instagram.follow}</span>
        </InstagramLink>
      </nav>
    </header>
  );
}
