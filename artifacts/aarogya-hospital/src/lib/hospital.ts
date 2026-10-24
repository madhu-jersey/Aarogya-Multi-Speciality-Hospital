export const HOSPITAL_INFO = {
  // Temporary Vercel domain. When the purchased domain is connected, set it here and set noindex to false;
  // canonical, robots.txt, sitemap, and structured data all follow these two values.
  siteDomain: 'aarogya-multi-speciality-hospital.vercel.app',
  facebookUrl: 'https://www.facebook.com/share/1BubDwUVjT/',
  instagramUrl: 'https://www.instagram.com/aarogyamultyspecialtyhospital/',
  instagramHandle: '@aarogyamultyspecialtyhospital',
  // Google Maps listing (CID) for this hospital, used to link the site to its Google Business Profile.
  googleMapsUrl: 'https://www.google.com/maps?cid=7150611576903896105',
  alternatePhone: '+919966193444',
  // Hidden from search engines until the purchased domain is live.
  noindex: true,
  name: 'Aarogya Multi Speciality Hospital',
  foundingYear: 2021,
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
  title: 'Aarogya Multi Speciality Hospital, Tanuku | 24x7 Emergency',
  description: '24x7 multi speciality hospital in Sajjapuram, Tanuku: emergency & ICU, pulmonology, general medicine, laparoscopic surgery, urology, gynaecology & delivery.',
} as const;

// Spellings people actually type when searching for the hospital.
export const HOSPITAL_ALTERNATE_NAMES = [
  HOSPITAL_INFO.teluguName,
  'Aarogya Hospital Tanuku',
  'Arogya Hospital Tanuku',
  'Aarogya Multispeciality Hospital',
  'Aarogya Multi Specialty Hospital',
  'Arogya Multi Speciality Hospital Sajjapuram',
];

export const AREAS_SERVED = ['Tanuku', 'Sajjapuram', 'Venkatarayapuram', 'West Godavari'];

export const SEO_KEYWORDS = [
  'Aarogya Multi Speciality Hospital', 'hospital in Tanuku', 'best hospital in Tanuku', 'multi speciality hospital Tanuku',
  'hospital in Sajjapuram', '24 hours hospital Tanuku', 'emergency hospital Tanuku', 'ICU Tanuku',
  'pulmonologist in Tanuku', 'chest specialist Tanuku', 'general physician Tanuku', 'laparoscopic surgeon Tanuku',
  'general surgeon Tanuku', 'urologist in Tanuku', 'gynaecologist in Tanuku', 'maternity hospital Tanuku',
  'normal delivery Tanuku', 'infertility treatment Tanuku', 'neurosurgeon Tanuku', 'oncology Tanuku',
  'snake bite treatment Tanuku', 'ambulance Tanuku', 'ఆరోగ్య హాస్పిటల్ తణుకు',
];

// Every service on the site, typed for schema.org so search engines can match "service + Tanuku" queries.
export const MEDICAL_SERVICES: { type: 'MedicalProcedure' | 'MedicalTest' | 'MedicalTherapy'; name: string }[] = [
  { type: 'MedicalTherapy', name: '24x7 emergency care' },
  { type: 'MedicalTherapy', name: 'Poison, snake bite, and accident treatment' },
  { type: 'MedicalTherapy', name: 'ICU and HDU care' },
  { type: 'MedicalTherapy', name: 'Ventilator support' },
  { type: 'MedicalTherapy', name: 'Pulmonology (lung and respiratory disease treatment)' },
  { type: 'MedicalTherapy', name: 'General medicine' },
  { type: 'MedicalTherapy', name: 'Rheumatology' },
  { type: 'MedicalTherapy', name: 'Oncology (cancer care)' },
  { type: 'MedicalTherapy', name: 'Urology (urinary tract disease treatment)' },
  { type: 'MedicalProcedure', name: 'General surgery' },
  { type: 'MedicalProcedure', name: 'Laparoscopic surgery' },
  { type: 'MedicalProcedure', name: 'Neurosurgery' },
  { type: 'MedicalTherapy', name: 'Obstetrics and gynaecology' },
  { type: 'MedicalTherapy', name: 'Pregnancy check-ups (antenatal care)' },
  { type: 'MedicalProcedure', name: 'Normal delivery' },
  { type: 'MedicalProcedure', name: 'Caesarean section' },
  { type: 'MedicalTherapy', name: 'Postnatal care' },
  { type: 'MedicalTherapy', name: 'Infertility treatment' },
  { type: 'MedicalProcedure', name: 'Laparoscopic gynaecological surgery' },
  { type: 'MedicalTest', name: 'Ultrasound scan' },
  { type: 'MedicalTest', name: 'Electronic foetal monitoring' },
  { type: 'MedicalTest', name: '2D Echo' },
  { type: 'MedicalTest', name: 'Laboratory tests' },
];

// schema.org MedicalSpecialty values covered by the hospital.
export const MEDICAL_SPECIALTIES = ['Emergency', 'PrimaryCare', 'Pulmonary', 'Rheumatologic', 'Oncologic', 'Urologic', 'Surgical', 'Neurologic', 'Gynecologic', 'Obstetric'];

export const GALLERY_IMAGES = [
  { path: '/assets/hero.jpg', caption: 'Aarogya Multi Speciality Hospital building, Sajjapuram, Tanuku' },
  { path: '/assets/gallery/hospital-exterior-1200.webp', caption: 'Hospital exterior' },
  { path: '/assets/gallery/consultation-room-1200.webp', caption: 'Consultation room' },
  { path: '/assets/gallery/hospital-exterior-dusk-1200.webp', caption: 'Hospital exterior at dusk' },
  { path: '/assets/gallery/pharmacy-1200.webp', caption: 'Pharmacy' },
  { path: '/assets/gallery/reception-768.webp', caption: 'Reception' },
];

export const HOSPITAL_ADDRESS_DISPLAY = `${HOSPITAL_INFO.address}, ${HOSPITAL_INFO.locality}, ${HOSPITAL_INFO.region} ${HOSPITAL_INFO.postalCode}.`;
export const HOSPITAL_TEL = `tel:${HOSPITAL_INFO.telephone}`;
export const HOSPITAL_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${HOSPITAL_INFO.latitude},${HOSPITAL_INFO.longitude}`;
export const HOSPITAL_MAP_EMBED = `https://www.google.com/maps?q=${HOSPITAL_INFO.latitude},${HOSPITAL_INFO.longitude}&z=17&output=embed`;
export const GOOGLE_REVIEWS = `https://www.google.com/maps/place/Aarogya+Multi+Speciality+Hospital/@${HOSPITAL_INFO.latitude},${HOSPITAL_INFO.longitude},840m/data=!3m1!1e3!4m8!3m7!1s0x3a37b70fc7f1f9f5:0x633c1357f8270c29!8m2!3d${HOSPITAL_INFO.latitude}!4d${HOSPITAL_INFO.longitude}!9m1!1b1!16s%2Fg%2F11rfc_hq71?entry=ttu`;

export const DOCTORS = [
  {
    initials: 'RK',
    photo: '/assets/doctors/dr-r-k-naidu-puppala',
    name: 'Dr. R.K. Naidu Puppala',
    department: 'Pulmonology',
    medicalSpecialty: 'https://schema.org/Pulmonary',
    degree: 'M.B.B.S., M.D., Pulmonology.',
    care: 'Lungs and respiratory diseases.',
    timings: ['Daily, 9:00 AM to 2:00 PM', 'Daily, 6:00 PM to 9:00 PM'],
  },
  {
    initials: 'SV',
    photo: '/assets/doctors/dr-s-visweswara-reddy',
    name: 'Dr. S. Visweswara Reddy',
    department: 'Surgery',
    medicalSpecialty: 'https://schema.org/Surgical',
    degree: 'M.B.B.S., D.N.B., F.M.A.S. (General and Laparoscopic Surgeon).',
    care: 'General surgery, laparoscopic surgery.',
    timings: ['Daily, 9:00 AM to 2:00 PM', 'Daily, 6:00 PM to 8:00 PM'],
  },
  {
    initials: 'BK',
    photo: '/assets/doctors/dr-bollineni-krishna',
    name: 'Dr. Bollineni Krishna',
    department: 'General Medicine',
    medicalSpecialty: 'https://schema.org/PrimaryCare',
    degree: 'M.B.B.S., M.D. (General Physician).',
    care: 'General medicine.',
    timings: ['Daily, 9:00 AM to 2:00 PM', 'Daily, 6:00 PM to 9:00 PM'],
  },
  {
    initials: 'VP',
    photo: '/assets/doctors/dr-v-d-prasad-muthyala',
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
  { question: 'Which departments are available?', answer: 'General medicine, pulmonology, visiting rheumatology, oncology, urology, general and laparoscopic surgery, neurosurgery, gynaecology, pregnancy and infertility care, and 24x7 emergency care, including poison, snake bite, and accident cases.' },
  { question: 'How do I book an appointment?', answer: `Call ${HOSPITAL_INFO.phone} and use the Call to book button on a doctor's card.` },
  { question: 'Where is the hospital?', answer: `${HOSPITAL_ADDRESS_DISPLAY.slice(0, -1)}.` },
] as const;
