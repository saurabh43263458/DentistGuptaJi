# 🦷 Dr. Gupta's Dental Clinic — Modern, Sleek & Engaging Website

A clean, modern, and high-converting single-page website template for **Dr. Gupta's Dental Clinic** (Serving smiles with trust since 2013).

Built with **React 19**, **Vite 6**, **Tailwind CSS v4**, **Lucide Icons**, and **Canvas Confetti**.

---

## 🌟 Features & Section Walkthrough

1. **Top Bar (`TopBar.jsx`)**
   - Full-width dark-green (`#1F5A4A`) strip with operating hours ("Mon–Sat: 10:00 AM – 08:30 PM | Sun: 10:30 AM – 02:00 PM").
   - Direct tap-to-call link for emergency appointments.
   - Live pulse indicator for same-day emergency slots.

2. **Sticky Header Navigation (`Navbar.jsx`)**
   - Mint rounded square logo with tooth mark emblem + clinic brand in Outfit font.
   - Smooth anchor navigation links with active scroll-spy.
   - Pill "Book Appointment" CTA button.
   - Mobile-first responsive slide-over drawer with keyboard Escape and click-outside listeners.

3. **Hero Section (`Hero.jsx`)**
   - Two-column desktop layout / stacked mobile layout.
   - Pill badge: *"Gentle, Modern & Laser Dental Care"*.
   - Catchy H1: *"Healthy smiles, without the worry."* with decorative hand-drawn underline.
   - Stat counters: **11+ Years of Trust**, **15,000+ Happy Smiles**, **4.9★ Google Rating**.
   - Right visual panel: 36px rounded gradient card showcasing Dr. J. Gupta's clinic portrait, BIOLASE certification badge, and a floating *"Next Free Consultation Slot"* card.

4. **Trust Strip (`TrustStrip.jsx`)**
   - 4 essential patient confidence pillars: Hospital-Grade Sterilization, BIOLASE Laser Tech, Single-Visit Root Canals, and 100% Transparent Pricing.

5. **Treatments Repertoire (`Services.jsx` & `TreatmentModal.jsx`)**
   - Interactive category pill filters (*Specialized Care, Restorative, Cosmetic, Orthodontics, Preventive*).
   - 8 comprehensive treatments with starting prices, duration, and icon cards.
   - Pop-up **Treatment Detail Modal** with procedure overview, clinical advantages, transparent price guarantee, and direct booking trigger.

6. **Meet the Doctor (`About.jsx`)**
   - In-depth profile of **Dr. J. Gupta** (Chief Dental Surgeon & Laser Specialist, 11+ years clinical experience).
   - Real clinic photos: Doctor portrait, operatory in action, BIOLASE USA laser credentials, and IDA (Indian Dental Association) single-visit root canal fellowship.
   - Clinic team showcase (*Associate Dentist, Head Hygienist, Patient Concierge*).

7. **The Patient Journey (`Process.jsx`)**
   - Full-width deep green band with 4 translucent glass cards explaining the seamless 4-step visit journey (*Booking -> Digital Exam & Written Estimate -> Pain-free Treatment -> Follow-up & Smile Warranty*).

8. **Smile Transformations Gallery (`SmileGallery.jsx`)**
   - Interactive Before & After comparison slider with real clinical treatment outcomes (Whitening, Single-Visit RCT + Zirconia Crown, Invisible Aligners).
   - Written patient consent badge.

9. **Kind Words / Testimonials (`Reviews.jsx`)**
   - Alternating mint/sky rounded cards featuring verified patient reviews, star ratings, and treatment tags.
   - Direct link to Google Reviews (4.9★ from 850+ reviews).

10. **Questions Answered FAQ (`Faq.jsx`)**
    - Accessible accordion with keyboard navigation and smooth toggle.
    - WhatsApp quick help card for instant doctor advice.

11. **Online Reservation Suite (`Contact.jsx`)**
    - 40px rounded container with sky-to-mint gradient.
    - Clinic address, hotline, operating hours, and embedded Google Maps iframe.
    - Form with real-time validation (Full name, 10-digit Indian phone number, treatment select, date & time picker, notes).
    - Anti-spam honeypot protection.
    - Celebratory confetti burst on submission + instant WhatsApp booking confirmation dispatch.

12. **Footer (`Footer.jsx`)**
    - Deep teal `#0F3B4A` background with clinical credentials, treatment links, emergency hotlines, and smooth scroll-to-top button.

13. **Floating Concierge Actions (`FloatingActions.jsx`)**
    - Mobile & desktop floating WhatsApp instant chat button with pulsing indicator.
    - Emergency direct tap-to-call button.
    - Dynamic scroll-to-top button appearing after 500px scroll.

---

## 🎨 Design Tokens & Palette

Inspired by modern hygienic clinic scrubs & dental operatory aesthetics:
- `sky-100` (`#DCEFF7`): Soft background tiles & cards
- `sky-200` (`#BFE3F2`): Gradients and card accents
- `mint-100` (`#D6EFE3`): Hygiene highlights & badges
- `mint-300` (`#B7E4CC`): Brand accents & emblem
- `deep` (`#1F5A4A`): Primary surgical green buttons & process band
- `link` (`#1F6F99`): Interactive links & category tags
- `ink` (`#0F3B4A`): Deep teal-navy for prominent headings
- `body` (`#33525C`): High-contrast paragraph text
- `ground` (`#F6FBFC`): Calming page backdrop
- **Fonts**: **Outfit** (Headings, 600/700) and **Inter** (Body, 400/500/600) via Google Fonts.

---

## 📁 Single Content Contract: `src/content/clinic.js`

To customize clinic name, doctor bio, phone numbers, hours, prices, or photos, simply edit **[`src/content/clinic.js`](file:///c:/Users/sm427/OneDrive/Desktop/CompanyTT/dentistGuptaji/src/content/clinic.js)**. The entire website updates automatically.

---

## 🚀 Running Locally

```bash
# Navigate to the folder
cd dentistGuptaji

# Start Vite dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

