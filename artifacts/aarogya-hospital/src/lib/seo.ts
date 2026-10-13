import { DOCTORS, FAQ_ITEMS, HOSPITAL_INFO } from './hospital';

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.content = content;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (hreflang) link.hreflang = hreflang;
    document.head.append(link);
  }
  link.href = href;
}

export function updateSearchMetadata(pathname: string, configuredSiteUrl?: string) {
  const siteOrigin = HOSPITAL_INFO.siteDomain === 'YOUR-DOMAIN'
    ? window.location.origin
    : `https://${HOSPITAL_INFO.siteDomain}`;
  const origin = new URL(configuredSiteUrl || siteOrigin).origin;
  const pageUrl = new URL(pathname || '/', `${origin}/`).href;
  const isHome = pathname === '/' || pathname === '';
  const isLocal = /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
  const logoUrl = new URL(HOSPITAL_INFO.logo, `${origin}/`).href;
  const imageUrl = new URL(HOSPITAL_INFO.image, `${origin}/`).href;

  document.documentElement.lang = 'en';
  document.title = HOSPITAL_INFO.title;
  setMeta('meta[name="description"]', 'name', 'description', HOSPITAL_INFO.description);
  const robotsContent = HOSPITAL_INFO.noindex || isLocal ? 'noindex, nofollow' : isHome ? 'index, follow' : 'noindex, nofollow';
  setMeta('meta[name="robots"]', 'name', 'robots', robotsContent);
  setMeta('meta[name="theme-color"]', 'name', 'theme-color', '#A8195F');
  setMeta('meta[property="og:title"]', 'property', 'og:title', HOSPITAL_INFO.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', HOSPITAL_INFO.description);
  setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMeta('meta[property="og:url"]', 'property', 'og:url', pageUrl);
  setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
  setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', HOSPITAL_INFO.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', HOSPITAL_INFO.description);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
  setLink('canonical', pageUrl);
  setLink('alternate', pageUrl, 'en-IN');

  const existingSchema = document.getElementById('aarogya-jsonld') as HTMLScriptElement | null;
  if (!isHome) {
    existingSchema?.remove();
    return;
  }

  const hospitalId = `${origin}/#hospital`;
  const graph = [
    {
      '@type': 'Hospital',
      '@id': hospitalId,
      name: HOSPITAL_INFO.name,
      alternateName: HOSPITAL_INFO.teluguName,
      url: pageUrl,
      telephone: HOSPITAL_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: HOSPITAL_INFO.address,
        addressLocality: HOSPITAL_INFO.locality,
        addressRegion: HOSPITAL_INFO.region,
        postalCode: HOSPITAL_INFO.postalCode,
        addressCountry: HOSPITAL_INFO.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: HOSPITAL_INFO.latitude,
        longitude: HOSPITAL_INFO.longitude,
      },
      logo: logoUrl,
      image: imageUrl,
      description: '24x7 emergency services',
      sameAs: [],
    },
    ...DOCTORS.map((doctor, index) => ({
      '@type': 'Physician',
      '@id': `${origin}/#physician-${index + 1}`,
      name: doctor.name,
      medicalSpecialty: { '@id': doctor.medicalSpecialty },
      worksFor: { '@id': hospitalId },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Medical qualification',
        name: doctor.degree,
      },
    })),
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];

  const script = existingSchema ?? document.createElement('script');
  script.id = 'aarogya-jsonld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  if (!existingSchema) document.head.append(script);
}
