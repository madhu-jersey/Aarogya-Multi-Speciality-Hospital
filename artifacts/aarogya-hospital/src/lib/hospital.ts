export const HOSPITAL_INFO = {
  // Set the official website domain before public launch.
  siteDomain: 'YOUR-DOMAIN',
  facebookUrl: 'https://www.facebook.com/share/1BubDwUVjT/',
  noindex: true,
  name: 'Aarogya Multi Speciality Hospital',
  teluguName: 'ఆరోగ్య మల్టీ స్పెషాలిటీ హాస్పిటల్',
  address: 'Back Side of Padhma sri Function Hall, 34-10-4, Somanchi Vari street, opp. Lions Club of Sajjapuram, near Venkateswara Theatre, Venkatarayapuram',
  locality: 'Sajjapuram',
  nearbyCity: 'Tanuku',
  region: 'Andhra Pradesh',
  postalCode: '534211',
  country: 'IN',
  phone: '+91 76749 61013',
  telephone: '+917674961013',
  latitude: 16.7545944,
  longitude: 81.6809747,
  logo: '/assets/logo.png',
  logoWebp: '/assets/logo-256.webp',
  image: '/assets/hero.jpg',
  imageWebpSrcSet: '/assets/hero-480.webp 480w, /assets/hero-851.webp 851w',
  title: 'Aarogya Multi Speciality Hospital | Sajjapuram',
  description: 'Aarogya Multi Speciality Hospital in Sajjapuram, near Tanuku. Specialists in pulmonology, general medicine, surgery and urology, plus 24x7 emergency care.',
} as const;

export const HOSPITAL_ADDRESS_DISPLAY = `${HOSPITAL_INFO.address}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.region} ${HOSPITAL_INFO.postalCode}.`;
export const HOSPITAL_TEL = `tel:${HOSPITAL_INFO.telephone}`;
export const HOSPITAL_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${HOSPITAL_INFO.latitude},${HOSPITAL_INFO.longitude}`;
export const HOSPITAL_MAP_EMBED = `https://www.google.com/maps?q=${HOSPITAL_INFO.latitude},${HOSPITAL_INFO.longitude}&z=17&output=embed`;
export const GOOGLE_REVIEWS = `https://www.google.com/maps/place/Aarogya+Multi+Speciality+Hospital/@${HOSPITAL_INFO.latitude},${HOSPITAL_INFO.longitude},840m/data=!3m1!1e3!4m8!3m7!1s0x3a37b70fc7f1f9f5:0x633c1357f8270c29!8m2!3d${HOSPITAL_INFO.latitude}!4d${HOSPITAL_INFO.longitude}!9m1!1b1!16s%2Fg%2F11rfc_hq71?entry=ttu`;

export const DOCTORS = [
  {
    initials: 'RK',
    name: 'Dr. R.K. Naidu Puppala',
    department: 'Pulmonology',
    medicalSpecialty: 'https://schema.org/Pulmonary',
    degree: 'M.B.B.S., M.D., Pulmonology.',
    care: 'Lungs and respiratory diseases.',
    timings: ['Daily, 9:00 AM to 2:00 PM', 'Daily, 6:00 PM to 9:00 PM'],
  },
  {
    initials: 'SV',
    name: 'Dr. S. Visweswara Reddy',
    department: 'Surgery',
    medicalSpecialty: 'https://schema.org/Surgical',
    degree: 'M.B.B.S., D.N.B., F.M.A.S. (General and Laparoscopic Surgeon).',
    care: 'General surgery, laparoscopic surgery.',
    timings: ['Daily, 9:00 AM to 2:00 PM', 'Daily, 6:00 PM to 8:00 PM'],
  },
  {
    initials: 'BK',
    name: 'Dr. Bollineni Krishna',
    department: 'General Medicine',
    medicalSpecialty: 'https://schema.org/PrimaryCare',
    degree: 'M.B.B.S., M.D. (General Physician).',
    care: 'General medicine.',
    timings: ['Daily, 9:00 AM to 2:00 PM', 'Daily, 6:00 PM to 9:00 PM'],
  },
  {
    initials: 'VP',
    name: 'Dr. V.D. Prasad Muthyala',
    department: 'Urology',
    medicalSpecialty: 'https://schema.org/Urologic',
    degree: 'M.S., M.Ch. (Urology), Urologist.',
    care: 'Urology (urinary tract diseases).',
    timings: ['Daily, 5:00 PM to 8:00 PM'],
  },
] as const;

export const FAQ_ITEMS = [
  { question: 'Is the hospital open 24 hours?', answer: 'Emergency services are available 24 hours a day, 7 days a week. Clinic hours for each doctor are shown in the Clinic hours card above.' },
  { question: 'Is there an ambulance service?', answer: 'Yes. We offer 24/7 ambulance services.' },
  { question: 'Which departments are available?', answer: 'Pulmonology and general medicine, general and laparoscopic surgery, urology, gynaecology and obstetrics, visiting rheumatology, and 24x7 emergency care, including poison, snake bite, and accident cases.' },
  { question: 'How do I book an appointment?', answer: `Call ${HOSPITAL_INFO.phone} and use the Call to book button on a doctor's card.` },
  { question: 'Where is the hospital?', answer: `${HOSPITAL_ADDRESS_DISPLAY.slice(0, -1)}.` },
] as const;
