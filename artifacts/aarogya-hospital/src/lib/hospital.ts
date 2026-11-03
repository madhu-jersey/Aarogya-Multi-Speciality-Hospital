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
    // 24px preview shown blurred while the photo loads.
    placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAIAAACDRijCAAAEMUlEQVR42j3R229UVRQG8PNHqIlPavpijAmJRiEiiUiCD2J8UC4aCgIKJWqUi+XWO/Q6bVAaaGmgpUAptBSmhXYQKMPMtDNn7mfP2Xufffbe5zJnOm1n2ilzK5X4YqZNTNbbWvnly7eEyYEm58BZt/0KCPtNa47rCU2PW9bs7OwCZUZnZ1dtTYPbNaVrJmcapVxVuUIYRCQWwwipRNUhZmEJCZ6htumhZtFxHUaD8cScZiQ0zTDNRCIxW3Gwouytt9947fWyd8ouXezSNGPNUhQKIY7JaE2MAhQISYJ3xOYbbgo+ug4jPjOeZNxglOsly9q0fv1j2x/in8cbyr+srqqmlCkKwUiBECOkEEI1zaTMwITHIBF892zi3abgo34UFQ0zwTVT47ppmJaV+GXnVx3HDw0f33vxxMHuS5cMw+RcZ4yrKlUUVVFUzg3KdEzYKnS3xTd8LujogxHfKhRnjOuaHtd1sasGXG2Z6m58aDupyGAV0qhKCVEVhSiYMKapVEOYxmRF8A43e+80BBx9ctir6SZlOlVVzpihGxPdLb1Hy1v37bp2bLeqYF3XOddUohKFYFwaSjlROUJqCZoaapwerPNP9IHgFOeGSjlZzY0gcjiefb1l83efb2iuPqlpOmecMU6IirGCEEYQE5WV+oYExJDguX3WfatGHL8a9bsZ04nKMUIJKwEAzmTy+09fXvfue+s+/HTc8YRRttYOQhhCBP+HEJEAFJw3axxXj04Mtj0Y7VdLC5rJZAvFV7n8Pw6Ha9j+9JOPNn6weaft/BWnS6SUr34NyTKEMiKkdA/hKuTo+b3p1LZv971/pnaP2+tizCgUSsrCYmHy6fPUfHrXT2cqKm0QMRkyy5qLxSCQAJBADMgYEwgVAGAkGhPud/587rcvNm19s/LEXhkqhjmTzS7n8iuZTHHa5VQV3j8mfn/0r5WVfz3PvX0XLigyjkSAJAGwBqFSQZGoLAy0HjhfuXPy7/HbN68BgDQtnn1RzOdfFouvUuncUqYw9gxsO9yxvPxqsqvF3X4khREhPBgIhcMRWUYxGUsSDIWBsHXLZxs3fOx4MLpj+479Bw7duTOylMlnFvO57PK8NRMf733ce/HIsdpi/mXaNNNxq1BYWVzM+Xx+vxiISnI0KgdDklcMCT/+UL5/z+721tbDFYdPVFZ2tLXOWLNLmXwut/ziRTHDsDHU/uv2b1goOJ/KJRILppFMzqQ97mmPZzoYjPoDEa8Ycnl8gq35bO/lzrG7N9xPRgPuRz7nuBz2z80upFNLqflMLrecXSp4PQFJDC+ksxqLS2Hg9fh6untu9N+4NzJqtz+w2x/eu/9QGBsZmLAPTjvHRdeE6JrwTo4iCXBqJGdSc8m0ZSbjxkzcTKIYdj1xjg3dGrzW097c0FhfU3XqZNXpqprq+rq6xtr6pv8A2s9fY2Lc6OEAAAAASUVORK5CYII=',
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
    // 24px preview shown blurred while the photo loads.
    placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAIAAACDRijCAAAEGklEQVR42i3Q6U8cdRjA8fkPfK+JL/wHfGHiW1KjxgSPFoPRBnuB0mot0AaEqpXGpBwRUqtQpNWGq0JTIWVhufaEZZbtAnsvO7Mz85vjN/ObY8+ZWRbYJTEDJp88r5588+TBWIgaGr9u6/vjVv/Qrf7fG75tw/04UhRJlpEsB7eDoyMPpybHAKAFgeU4mmFSVDpOEhEiFYpFt5dc7hXvxtqGH+NE+cLFi581XKg/8eHZc1uBAFJUpKi2hYUrtTVTXc2bw3e6W5pYjuF4BjAERSXTRJQkIrHY7qp3w+Hzu/AgBuUMzfJpBpAURaTJFEkIEkKKhhRtZOBecOimuvQkszbpH+ryeFwcD4C1mCStUDSeCDt9uNsf9AZ2MahkoaxBWT2hQFkVFU2yqDOj9zubGoc6Wr6/1DLa2b7hsLMcwzBkOp0kyRhJxOLJiAsPeF/urAcjmIA0AakCUgRZFWRrQkUVFVWUlaW/BtyDP6/1tm89uBt63BNyLwKWougUScZTRDRFRGPJqAPftK3b3YFdjJMUXlJ4dErmkSxYdykQycuz//RePffT+dq+5i/+/rE5Gg7SDEmmkykilkyGtiOeOffIk8Xhvul2+4bPerZFUjgkWySZtyBeQhQADWffa6x7v/HTD364fpkGaZJKpYh4Yi8SiuDjtrs9E19eG6zpmbgzbp/GAEQsRKwosxJiJcSdEiVelOj43mj3ja9q3+74/Mzyg9uiIKSIRGIvEontBILu2ZXhll/fqet69VLPuzeHrlghACUgSuwpKEJZzRZM4PTvOnwB18rG4DfbQ61J3xokGb1gQAmGI8EV58z9se/q2t840/xKXedb/ZN9GBAkCxSBAIEAoazpZgW6AnsLHmrVL6ICHw+THjtSdCoQzTPi/sGxbpY3ccfjp92tvR99cv21jt+uTi3aMEb4P8HwPMPxSDPz+pEs5RRBK+pHRaNSNCqGeWSUqpmX8VJhv1Q+NsvHaZqem/1z4FFrffvrl3+pGZ+fxRheYHgBWBUuDaCAiqJcVDQjkyvrpapuVs1StVQ+LhqVmC9UNI6KZiWvH2m5A9v8+OSzh01db94bvf3UvoIxHAcsLMMCWsgAIef1BRN7IJ7idPM0VDFKVaTqtmWvmjWzhUMRFTP5Qxz3PJ+dfPFiZtntfbbkxQK4e2vT5fc5wuFdTtJPQjsJEiJtP29U8npFL1WKZvVUwahCVASsquUOCAqMjY8GdmIuf3jS5sTWFp47F/912mej0QSPdIbL+oOJUJymuYySLef1inESyhsVLX8oKSYNVBHpsrqvZMsT448865vXbrR9XH8e23Qs4M5F3GVPEhxEBRpo675gMi0BmFcy+7nikblfKZycpmbLWu4gFqfTlAwlXc0e4G67a3HauzrnWZ3/DxYlifZVeqJ6AAAAAElFTkSuQmCC',
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
    // 24px preview shown blurred while the photo loads.
    placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAIAAACDRijCAAAEVElEQVR42iXO+U9TBwDA8fcHGcXEZXHGLdmyI4tbtsiMbnOIiMsys0QCOBEF1BCMA+SSQxGJglBKaeUqLdDj9Xivd9/dd7avJ6/tO2ov2C8LWfL9+ZMvsBsMWny+bci76fG8d9hNS+Po+CVsoSubywX8gXWjkaJojo+zLE/gBEnxBJlAMCYUxiNRihUyuXwpr1RSORWwBkPmYwjehqD3IGjSTaJjl/B39z0u1+fnzn3ScOrK9xfoGBNPJKkYTTNxihZxUoiiNIKxLJ9JZeX0gZZIF4GdQNDs823Bvi0YXne5TLqp8PBFbPFBx19/zLX/zL3tX+luGR0cFMU0zbAMm6DZNE7FEYxFcZ7hMvFUIZ4qcgkJMPv9mzC84YU2IcgEgoal58hIY2zl4dqznslbjdHpe/aRLvPKQiqVYViOZhMxNkVQCRTnUEKIsWkuIXFinhEOgE0YXvd6173eDQgygk794nh46EdK14tuzENjd3aedua3Z0XEn0xlaIaL0QIZEzFCiKIMgvMELVKMyPAZRsgC7z1ek9tjdLtNbrfBbtO9HfU9uYAt3INslhtff/zk6g8Tt5vSqfT/EBUTcCqO4kIEZRFcIOjk1MwcgpF4TASMbs+ay70GutZAcGV/b+H1sLPvS9TwT05SRgb6bn5zFtpYLhblGM3iOEVQ/PEOxoeidBQTMDJhsTrsTm8EFQAD6Fp1gqsOp8HhXLZatndMRQGtH/4bwRN5SUrsLjpW54MhREymgqEIQXIIzocRJhCmwijvhlGbA4YCZBiJAwYnqHc4j7PZlq0WtVQtl2uVSg0M8IurtkI2WZAOtixuRS1RMQYj2AjGBiM0HCCCUQYOUXs279r6vj/MAnq7Q2+36+123d7etstdlMvlSr1SrSOEGOPSUJBSFCWflyE/oaolFGciKOsPUW4I8QYIKEgEIrQ/wgQRHrDMdFqn2nYnbllHWuHVsZykynKpWqtrWlng+Ww2o6patVq37jpkWeOETAhhoQBpB0PvdMa5+cX1LRsIYf4IAxAL7eTyPXKlB9c/pnbfZHNasahVKjVNqxAUR+IoihKHR0ccwxwcFBW1HEQ4OEQ7PZhudWt5Zc1sBW2uCBymgc3Xw4bJR0tDf796+Od01zUCpRWlXK0damq5UFCz6ayqaKVSGccISZKrtcOsVGHiKi+WSDa/abbrTTvmfRiEEGDqxkcvfj9u+saZmdYzu0uzmaysqmVNLeUQWHQYX02O1etHHz5Ua/WjWq0eDoVnX7wcHhzq7enrvNv7bHj4bld3R/sdYOp6w+zN0y9vnp5paXjZ2jDf/RvLZw4kWZIK5XJVSXJzL2YkqagomiyrmlbqePTm7Hfdn158fL5x4LPGgba2tsuXrzQ3twKjV09MNp+cbjk13nRyounExkw/RvCCkMzlpHy+oCiqomi5nIS69t1O5+0Hr7749fm318a/+mXo/E9Pz1/s72jvbL7eer9n4D/rKmC/ykpyKwAAAABJRU5ErkJggg==',
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
    // 24px preview shown blurred while the photo loads.
    placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAIAAACDRijCAAADo0lEQVR42l3S22/bVBwHcP9tPPMIQkjjgdsLTFANRCXC1Al2kTYm1BZaCRYKYWkuzdV14mvixI7vzsWOT5w0W9YmXZu1uaclTeJUyEmJBNJXR8cvH3/P7xxIY2MGhwGeKAlESbRXUyTKElWRqQM1UVWTB2ryQElUZMoUCSDgBofqDFJIRe3Q8zUF5+kIpLFxg8NvIGEJkRUlUZbJnx/e/fLWOxuOlVTUbYok4LF/IbiQhm0lDS8C6Zm4weNgnpKAlwSiLJNlmawo1E/37yrr3zQ8T7VfHBurK4DHgIAXOVRbQCk4/z8ICATgCbBsJJFlmaooifW11brnScWzXdhae/TJ+wziAQJWzMQXUD4VzdGRpQXpGdSGboIDAb85mkxlNu/lt+8FHV/s3vnowYfvxXc2AI/qLFJI20o+FVlAi/wXsstjpkiYIlmWyBfIH4fuJ+zj7x5/8O5fX30soz6DRzV2f9ElR0eyyfB8Y3/Oh83jQCDmk8IAj5UWpWS7FL+5Bpw/Oj/71PXwW1PEi1y8wMCLLtlkWE2E1EQom7T3kMbGihxq8LjBYwaPAh61ofmYBDrZyqkhx23H2295nz4qCZjOIvm0/f85EVSooEIF7H0yBBUYRM+gc8W+WoNHTYmsV4rVg1d3vv5Bp8X6rie9+jmz7vQ8D5s5NZ/ezyZDChWQyT2Z2FPIgEIFFCoI5dOwbXGo3YtDAY/12q3J9DqOZU5O+vweNtJrNQ98yIFfnZFOd9podLM0LOE+CfdLuH9hyVQAytHRfBrW2JieiRUz8aomWNb1dHrd7lz2epPzs97IbPTZbKfZZ7hS9WXzdfMKFICIekTMK6BeEfOKuF8i/FA2GbbfAoNozL7OIkcV3ZrNxpPr3mB2dNiWZeO1aF6olcvhuHHSp5nseevqsD6UyBAfc3MxN4e4BdQrYD5ITYQWVzh/WvtHVdOyZlfD0dmbv2laO22O6+rLgVgaXc3qx/2d34ON48Gb84nCpFnYxcIuBnZxsV0+7oEkcm95hTk6UiuXJmOrQVPKsw1Tq5+ejpsvOgOheHExbTZH7fa015u0OhMTvGIiO6mwnXT0TwZ2QQLmW85MpYIllRuNrGNOkDa/L8DRdnvaaY66+drlcFQTJc7jP63V+4NZ7XBIh5zJ4LObhJxQBnnOxdwi5pVs0adQwXZ3Mhhavf60P5x1+1anZ521rE5nhD9YoTbv1w2zeT7RjDMq8Bvp2yK8W7h3i/Bt/wPHpnFCajIjygAAAABJRU5ErkJggg==',
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
