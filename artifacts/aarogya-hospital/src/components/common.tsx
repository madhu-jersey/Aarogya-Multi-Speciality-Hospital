import { type PointerEvent as ReactPointerEvent, useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, HeartPulse, MapPin, Menu, Phone, X } from 'lucide-react';
import { GOOGLE_REVIEWS, HOSPITAL_ADDRESS_DISPLAY, HOSPITAL_DIRECTIONS, HOSPITAL_INFO, HOSPITAL_TEL } from '@/lib/hospital';

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

export function Icon({ name, className = '' }: { name: 'check' | 'heart' | 'clock' | 'pin' | 'arrow' | 'down' | 'phone' | 'external'; className?: string }) {
  const props = { className: `icon ${className}`, 'aria-hidden': true as const };
  if (name === 'check') return <Check {...props} />;
  if (name === 'heart') return <HeartPulse {...props} />;
  if (name === 'clock') return <Clock3 {...props} />;
  if (name === 'pin') return <MapPin {...props} />;
  if (name === 'arrow') return <ArrowRight {...props} />;
  if (name === 'down') return <ArrowDown {...props} />;
  if (name === 'phone') return <Phone {...props} />;
  return <ArrowUpRight {...props} />;
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const links = [
    { label: 'Services', id: 'services' },
    { label: 'Doctors', id: 'doctors' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Visit us', id: 'visit' },
    { label: 'FAQ', id: 'faq' },
  ];

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
    const sections = links.map((link) => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
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
        <a className="brand" href="#home" aria-label="Aarogya Hospital home">
          <Logo />
          <span className="brand-copy">
            <span className="brand-name">{HOSPITAL}</span>
          <span className="brand-telugu telugu" lang="te">{TELUGU}</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.id} className={active === link.id ? 'active' : ''} href={`#${link.id}`}>{link.label}</a>)}
        </nav>
        <a className="button button-small header-call" href={TEL} aria-label={`Call ${HOSPITAL} at ${PHONE}`}><Icon name="phone" />Call</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>
      <nav className={`mobile-panel ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>{link.label}</a>)}
      </nav>
    </header>
  );
}
