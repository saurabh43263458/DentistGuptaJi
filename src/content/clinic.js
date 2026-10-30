// Clinic Content Configuration
// All clinic details, services, doctor credentials, and media live in this single file.

export const clinic = {
  name: "Dr. Gupta's Dental Clinic",
  shortName: "Dr. Gupta's",
  tagline: "Your Smile, Our Passion",
  logo: "/images/clinic-logo.png",
  foundedYear: 2013,
  experienceYears: "11+",
  phone: "+91 98765 43210",
  phoneFormatted: "+91-9876543210",
  whatsapp: "919876543210",
  email: "care@drguptadental.com",
  address: "Ground Floor, Gupta Healthcare Complex, Main Market Road, City Center",
  city: "Lucknow / NCR",
  pincode: "201001",
  mapEmbedUrl: "https://maps.google.com/maps?q=Dental+Clinic+Dr+Gupta&t=&z=15&ie=UTF8&iwloc=&output=embed",

  hours: [
    { days: "Mon – Sat", times: "10:00 AM – 08:30 PM", status: "Full Consultations & Surgeries" },
    { days: "Sunday", times: "10:30 AM – 02:00 PM", status: "Emergency & By Prior Appointment" }
  ],

  emergencyNote: "Emergency & severe toothache appointments accommodated same-day",

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    google: "https://maps.google.com"
  },

  hero: {
    badge: "Gentle, Modern & Laser Dental Care",
    headlinePrimary: "Healthy smiles,",
    headlineHighlight: "without the worry.",
    subhead: "Experience anxiety-free checkups, advanced painless laser dentistry, and honest personalized advice for children and adults. Serving families with warmth since 2013.",
    image: "/images/dr-j-gupta.png",
    operatoryImage: "/images/clinic-operatory.png",
    inActionImage: "/images/dr-gupta-treating.png",
    emblemImage: "/images/clinic-emblem-sign.png",
    stats: [
      { value: "11+", label: "Years of Trust", sub: "Serving since 2013" },
      { value: "15k+", label: "Happy Smiles", sub: "Patients treated" },
      { value: "4.9★", label: "Google Rating", sub: "Over 850+ reviews" }
    ],
    nextSlot: "Today, 04:30 PM"
  },

  trust: [
    { title: "Hospital-Grade Sterilization", desc: "100% autoclaved, single-use sealed kits" },
    { title: "Biolase Laser Technology", desc: "Minimal bleeding, rapid healing, zero drills" },
    { title: "Single-Visit Root Canals", desc: "IDA certified precision endodontics" },
    { title: "Transparent Treatment Pricing", desc: "Clear written estimates before treatment starts" }
  ],

  services: [
    {
      id: "laser-dentistry",
      slug: "laser-dentistry",
      title: "Advanced Laser Dentistry",
      category: "Specialized Care",
      shortDesc: "Painless gum contouring, tongue-tie release, and laser-assisted deep disinfection with zero bleeding and ultra-fast recovery.",
      description: "Certified by BIOLASE in laser dentistry innovation. We use specialized dental lasers for painless soft tissue procedures, bacteria elimination in gum pockets, and minimally invasive treatments without the vibration or anxiety of conventional scalpels.",
      priceFrom: 1800,
      duration: "30–45 mins",
      icon: "Zap",
      accent: "mint",
      features: [
        "Virtually painless with minimal anesthesia needed",
        "Zero surgical incisions or messy stitches",
        "Immediate coagulation and faster tissue regeneration",
        "Ideal for sensitive patients and children"
      ]
    },
    {
      id: "root-canal",
      slug: "root-canal-treatment",
      title: "Single-Visit Root Canal (RCT)",
      category: "Restorative",
      shortDesc: "Pain-free digital rotary endodontics designed to save infected teeth in a single comfortable sitting.",
      description: "Trained under Indian Dental Association (IDA) specialized endodontic modules, Dr. Gupta performs microscopic rotary root canal therapy that eliminates root canal pain rather than causing it, preserving your natural tooth structure for life.",
      priceFrom: 3500,
      duration: "45–60 mins",
      icon: "ShieldCheck",
      accent: "sky",
      features: [
        "Painless local anesthesia with digital rotary apex locators",
        "Completed in 1 appointment in 90% of cases",
        "High-density biocompatible gutta-percha seal",
        "Same-day ceramic crown measurement"
      ]
    },
    {
      id: "dental-implants",
      slug: "dental-implants-crowns",
      title: "Dental Implants & Zirconia Crowns",
      category: "Restorative",
      shortDesc: "Permanent, natural-looking tooth replacements with titanium implants and CAD-CAM precision zirconia crowns.",
      description: "Restore your chewing power and confident smile with lifetime-durable dental implants. Precision 3D-planned placement guarantees exact fit, stability, and zero bone loss.",
      priceFrom: 18000,
      duration: "2-stage visit",
      icon: "Sparkles",
      accent: "mint",
      features: [
        "Medical-grade titanium osseointegrated fixtures",
        "15-year warranty on premium Swiss & German implant systems",
        "Color-matched translucent Zirconia aesthetic crowns",
        "Feels, functions, and cleans just like natural teeth"
      ]
    },
    {
      id: "smile-design",
      slug: "teeth-whitening-makeovers",
      title: "Teeth Whitening & Smile Design",
      category: "Cosmetic",
      shortDesc: "Laser-activated instant teeth brightening and custom porcelain veneers for camera-ready confidence.",
      description: "Safely lift stubborn stains from coffee, tea, and smoking by up to 6–8 shades in just 45 minutes with our clinically monitored, enamel-safe LED and laser bleaching systems.",
      priceFrom: 4500,
      duration: "45 mins",
      icon: "Smile",
      accent: "sky",
      features: [
        "Enamel-safe pH neutral whitening gels",
        "Up to 8 shades whiter in a single clinic session",
        "Custom anti-sensitivity desensitizing polish",
        "Long-lasting shine with take-home maintenance kit"
      ]
    },
    {
      id: "orthodontics",
      slug: "braces-clear-aligners",
      title: "Braces & Invisible Clear Aligners",
      category: "Orthodontics",
      shortDesc: "Discreet clear aligners and modern ceramic braces to correct crooked, crowded, or spaced teeth comfortably.",
      description: "Straighten your smile discreetly without wire cuts or food restrictions. We provide customized 3D digital treatment plans showing your smile transformation before you begin.",
      priceFrom: 25000,
      duration: "6–14 months",
      icon: "LayoutGrid",
      accent: "mint",
      features: [
        "Nearly invisible removable custom clear aligners",
        "No dietary restrictions — eat and drink whatever you love",
        "3D digital scan with predicted outcome simulation",
        "Gentle, consistent tooth realignment without pain"
      ]
    },
    {
      id: "pediatric-dentistry",
      slug: "kids-dentistry",
      title: "Gentle Pediatric Dental Care",
      category: "Preventive",
      shortDesc: "Warm, anxiety-free dental visits for toddlers and teens with fluoride treatments and preventive pit-fissure sealants.",
      description: "We make dentistry joyful for children! Our gentle, patient approach builds lifelong positive oral hygiene habits while safeguarding developing milk and permanent teeth from cavities.",
      priceFrom: 1000,
      duration: "30 mins",
      icon: "HeartHandshake",
      accent: "sky",
      features: [
        "Friendly, patient explanation of every tool ('Mr. Thirsty' & 'Tooth Camera')",
        "Protective fluoride varnish against early childhood caries",
        "Painless pit and fissure cavity sealants",
        "Fun bravery badges and stickers for every young patient"
      ]
    },
    {
      id: "routine-hygiene",
      slug: "checkup-cleaning",
      title: "Ultrasonic Scaling & Oral Detox",
      category: "Preventive",
      shortDesc: "Comprehensive digital oral checkup, ultrasonic tartar removal, and anti-plaque polishing.",
      description: "Prevent gum bleeding, bad breath, and bone loss with our gentle ultrasonic scaling procedure that lifts hardened calculus without eroding tooth enamel.",
      priceFrom: 1200,
      duration: "30 mins",
      icon: "Activity",
      accent: "mint",
      features: [
        "High-frequency ultrasonic wave water cavitation",
        "Gentle subgingival stain removal",
        "Fluoride micro-polishing for smooth enamel",
        "Complimentary high-definition intraoral camera diagnosis"
      ]
    },
    {
      id: "wisdom-teeth",
      slug: "wisdom-teeth-surgery",
      title: "Wisdom Tooth Removal & Extraction",
      category: "Surgical",
      shortDesc: "Gentle surgical extractions of impacted wisdom teeth with quick recovery and minimal post-op swelling.",
      description: "Relieve jaw stiffness, localized pain, and crowding. Dr. Gupta utilizes gentle atraumatic extraction techniques with suture precision for minimal downtime.",
      priceFrom: 2500,
      duration: "35 mins",
      icon: "Scissors",
      accent: "sky",
      features: [
        "Targeted digital pain block anesthesia",
        "Atraumatic bone preservation technique",
        "Dissolvable comfortable sutures",
        "Comprehensive post-extraction care kit and medication"
      ]
    }
  ],

  doctor: {
    name: "Dr. J. Gupta",
    role: "Chief Dental Surgeon & Laser Specialist",
    experience: "11+ Years of Clinical Practice (Since 2013)",
    photo: "/images/dr-j-gupta.png",
    photoFull: "/images/dr-j-gupta-full.png",
    treatingPhoto: "/images/dr-gupta-treating.png",
    certificatesPhoto: "/images/dr-gupta-certificates.png",
    bio: "Dr. J. Gupta founded Dr. Gupta's Dental Clinic in 2013 with a simple, steadfast mission: to make dental care pain-free, transparent, and approachable for every generation. Backed by specialized training from BIOLASE USA in cutting-edge laser dentistry and IDA certification in single-visit rotary endodontics, Dr. Gupta has successfully treated over 15,000 patients with a gentle, patient-first approach.",
    philosophy: "I believe no patient should ever fear visiting their dentist. When modern technology meets genuine empathy and clear explanations, dentistry transforms from a dread into a delightful experience.",
    credentials: [
      {
        title: "BDS, Senior Dental Surgeon",
        issuer: "Premier Dental Institute",
        detail: "11+ years devoted to restorative & aesthetic dentistry"
      },
      {
        title: "Certified Laser Specialist",
        issuer: "BIOLASE Innovations USA",
        detail: "Minimally invasive soft tissue laser procedures & pocket disinfection"
      },
      {
        title: "Single-Visit Endodontist Fellow",
        issuer: "Indian Dental Association (IDA)",
        detail: "Painless microscopic rotary root canal therapy"
      },
      {
        title: "Active IDA Member",
        issuer: "Indian Dental Association",
        detail: "Committed to ongoing global clinical continuing education"
      }
    ]
  },

  team: [
    {
      name: "Dr. Priya Sharma",
      role: "Associate Dental Surgeon",
      specialty: "Cosmetic & Preventive Dentistry"
    },
    {
      name: "Sonia Verma",
      role: "Head Dental Hygienist & Sterilization Lead",
      specialty: "Infection Control & Patient Comfort"
    },
    {
      name: "Rahul Chauhan",
      role: "Clinical Coordinator & Patient Concierge",
      specialty: "Appointments & Post-Op Followups"
    }
  ],

  process: [
    {
      step: "01",
      title: "Easy Booking & Welcome",
      desc: "Book your convenient slot online or via WhatsApp. Same-day emergency appointments are readily available."
    },
    {
      step: "02",
      title: "HD Digital Exam & Honest Advice",
      desc: "See what we see with intraoral cameras. You receive a transparent, written treatment plan with fixed prices."
    },
    {
      step: "03",
      title: "Pain-Free Gentle Treatment",
      desc: "Relax in our ergonomic operatory with laser technology, gentle numbing, and zero-rushed clinical care."
    },
    {
      step: "04",
      title: "Care Follow-Up & Smile Warranty",
      desc: "We check on your recovery the very next day, sending preventive reminders so your smile stays radiant."
    }
  ],

  gallery: [
    {
      id: "res-01",
      title: "Complete Front Tooth Restoration & Laser Whitening",
      treatment: "Porcelain Veneers & Laser Brightening",
      duration: "2 Visits",
      before: "Yellowed, chipped incisors with mild fluorosis",
      after: "Radiant, natural translucent white smile alignment",
      beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600",
      afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600"
    },
    {
      id: "res-02",
      title: "Single-Visit Root Canal & Zirconia Crown",
      treatment: "IDA Single-Visit Endodontics",
      duration: "60 mins",
      before: "Severe deep molar decay with intense nocturnal throbbing",
      after: "Fully restored chewing molar with precision Zirconia crown",
      beforeImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600",
      afterImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600"
    },
    {
      id: "res-03",
      title: "Discreet Clear Aligner Spacing Correction",
      treatment: "Clear Aligners Therapy",
      duration: "8 Months",
      before: "Noticeable midline gap and overlapping lower canine",
      after: "Harmonious arch alignment with confident symmetry",
      beforeImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600",
      afterImg: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600"
    }
  ],

  reviews: [
    {
      id: "rev-01",
      name: "Rameshwar Dayal",
      treatment: "Single-Visit Root Canal",
      rating: 5,
      date: "October 2026",
      text: "I was terrified of root canals because of past horror stories. Dr. Gupta made the entire procedure completely painless. He showed me the laser monitor and explained every step. The clinic is spotless and feels very reassuring.",
      verified: true
    },
    {
      id: "rev-02",
      name: "Meenakshi Agarwal",
      treatment: "Laser Teeth Whitening & Cleaning",
      rating: 5,
      date: "September 2026",
      text: "Dr. Gupta's clinic has been treating our entire family since 2015! The laser scaling was so gentle, with zero tooth sensitivity afterwards. The staff is polite, and appointments always run on time.",
      verified: true
    },
    {
      id: "rev-03",
      name: "Col. Sanjeev Kapoor (Retd.)",
      treatment: "Dental Implants & Crown",
      rating: 5,
      date: "August 2026",
      text: "True professionalism. Dr. J. Gupta gave me a clear written estimate with no hidden costs. The implant feels as strong and natural as my original tooth. Highest recommendation for honest dental care.",
      verified: true
    }
  ],

  faqs: [
    {
      q: "Is dental treatment painful at Dr. Gupta's Clinic?",
      a: "Not at all. We utilize gentle computerized local anesthesia, BIOLASE dental lasers for soft tissue procedures, and micro-rotary equipment. In fact, most of our root canal and laser patients report feeling nothing more than slight pressure, with zero sharp pain."
    },
    {
      q: "How soon can I get an appointment for severe toothache?",
      a: "We maintain daily reserved slots for dental emergencies. If you are experiencing severe pain, swelling, or a broken tooth, call or message us immediately on WhatsApp — we will accommodate you on the same day."
    },
    {
      q: "How does a Single-Visit Root Canal work?",
      a: "Using advanced digital apex locators and flexible rotary nickel-titanium instruments, Dr. Gupta can thoroughly clean, shape, disinfect, and seal infected tooth canals in a single 45–60 minute appointment, sparing you multiple painful injections."
    },
    {
      q: "Are your prices transparent with no surprise charges?",
      a: "Yes, 100%. Before starting any treatment, you receive a written care plan specifying the exact procedure, expected duration, and total cost. We never recommend unnecessary procedures."
    },
    {
      q: "Do you treat children who are scared of the dentist?",
      a: "Yes! Pediatric dentistry is one of our key passions. We use a gentle 'tell-show-do' approach, introduce young patients to the equipment in a fun way, and ensure their visit is full of smiles and positive reinforcement."
    },
    {
      q: "What sterilization protocols do you follow?",
      a: "We follow strict international Class-B autoclave sterilization. Instruments are ultrasonic-cleaned, vacuum-autoclaved, and sealed in individual sterile pouches opened directly in front of you. All gloves, needles, masks, and suction tips are 100% single-use disposable."
    }
  ],

  seo: {
    title: "Dr. Gupta's Dental Clinic | Advanced Laser & Gentle Dental Care Since 2013",
    description: "Gentle dental checkups, painless laser treatments, single-visit root canals, implants, and smile makeovers by Dr. J. Gupta. Book your appointment today.",
    areaName: "City Center, Hazratganj & NCR"
  }
};

