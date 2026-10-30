import { useState } from "react";
import {
  Calendar,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
  Send,
  Navigation
} from "lucide-react";
import confetti from "canvas-confetti";
import { clinic } from "../content/clinic";
import Container from "./ui/Container";
import Button from "./ui/Button";

const timeSlots = [
  "10:30 AM", "11:30 AM", "12:30 PM",
  "02:00 PM", "04:30 PM", "05:30 PM", "06:30 PM", "07:30 PM"
];

export default function Contact({ preselectedTreatment }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: preselectedTreatment?.title || "Check-up & Consultation",
    date: new Date().toISOString().split("T")[0],
    time: "11:30 AM",
    message: "",
    honeypot: "" // Anti-spam bot trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.date) {
      newErrors.date = "Please select a preferred date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spambot check: honeypot field must be empty
    if (formData.honeypot) return;

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Fire festive celebration confetti
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#1F5A4A", "#B7E4CC", "#1F6F99", "#DCEFF7"]
      });
    } catch {}

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const openWhatsAppConfirmation = () => {
    const text = `Hi Dr. Gupta's Clinic! I requested an appointment on your website:%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Treatment:* ${encodeURIComponent(formData.treatment)}%0A*Preferred Slot:* ${encodeURIComponent(formData.date)} at ${encodeURIComponent(formData.time)}%0A*Notes:* ${encodeURIComponent(formData.message || "None")}%0A%0APlease confirm my slot!`;
    window.open(`https://wa.me/${clinic.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <Container>
        {/* Large Rounded 40px Container with Sky-100 -> Mint-100 Gradient */}
        <div className="rounded-[40px] bg-gradient-to-br from-[#DCEFF7] via-[#D6EFE3]/80 to-[#BFE3F2]/60 p-6 sm:p-10 lg:p-14 border border-[#B7E4CC]/60 shadow-elevated">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Clinic Contact Details & Map (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/80 text-[#1F5A4A] shadow-sm mb-3">
                  <Calendar size={13} />
                  <span>ONLINE RESERVATION</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B4A] tracking-tight leading-tight">
                  Book your appointment.
                </h2>

                <p className="mt-3 text-base sm:text-lg text-[#1F5A4A] font-medium">
                  We confirm your slot within <strong>30 minutes</strong> during clinic hours.
                </p>

                {/* Details List */}
                <div className="mt-8 space-y-4 text-sm text-[#33525C]">
                  {/* Address */}
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white">
                    <div className="w-9 h-9 rounded-xl bg-[#D6EFE3] text-[#1F5A4A] flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#0F3B4A]">Clinic Location</h4>
                      <p className="text-xs sm:text-sm text-[#33525C] mt-0.5 leading-relaxed">
                        {clinic.address}, {clinic.city} - {clinic.pincode}
                      </p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white">
                    <div className="w-9 h-9 rounded-xl bg-[#DCEFF7] text-[#1F6F99] flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#0F3B4A]">Phone & WhatsApp Helpline</h4>
                      <p className="text-xs sm:text-sm text-[#33525C] mt-0.5">
                        <a href={`tel:${clinic.whatsapp}`} className="font-semibold text-[#1F5A4A] hover:underline">
                          {clinic.phone}
                        </a>
                      </p>
                      <p className="text-[11px] text-[#1F6F99] mt-0.5 font-medium">
                        Emergency same-day calls accommodated
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white">
                    <div className="w-9 h-9 rounded-xl bg-[#D6EFE3] text-[#1F5A4A] flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#0F3B4A]">Consulting Hours</h4>
                      <p className="text-xs text-[#33525C] mt-0.5">
                        <strong>Mon – Sat:</strong> 10:00 AM – 08:30 PM <br />
                        <strong>Sunday:</strong> 10:30 AM – 02:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed Box */}
              <div className="mt-8 rounded-2xl overflow-hidden border-2 border-white shadow-sm bg-white h-48 w-full relative">
                <iframe
                  title="Dr. Gupta's Dental Clinic Map"
                  src={clinic.mapEmbedUrl}
                  loading="lazy"
                  className="w-full h-full border-0"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-semibold text-[#0F3B4A] shadow-sm flex items-center justify-between">
                  <span>Dr. Gupta's Dental Clinic</span>
                  <a
                    href={clinic.social.google}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1F6F99] hover:underline flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <Navigation size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: White Form Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[28px] p-6 sm:p-10 shadow-card border border-[#E3F1F6]">
                {isSubmitted ? (
                  /* Success Confirmation View */
                  <div className="text-center py-8 animate-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#D6EFE3] text-[#1F5A4A] flex items-center justify-center mx-auto mb-5 shadow-sm">
                      <CheckCircle2 size={36} />
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F3B4A]">
                      Appointment Requested, {formData.name}!
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#33525C] max-w-md mx-auto leading-relaxed">
                      Thank you for trusting Dr. Gupta's Dental Clinic. We have received your request for{" "}
                      <strong>{formData.treatment}</strong> on <strong>{formData.date}</strong> at{" "}
                      <strong>{formData.time}</strong>. Our care coordinator will call or WhatsApp you within 30 minutes to confirm your visit.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button
                        onClick={openWhatsAppConfirmation}
                        variant="primary"
                        size="md"
                        className="w-full sm:w-auto gap-2 bg-[#1F5A4A]"
                      >
                        <MessageCircle size={16} />
                        <span>Instant Confirm on WhatsApp</span>
                      </Button>

                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            treatment: "Check-up & Consultation",
                            date: new Date().toISOString().split("T")[0],
                            time: "11:30 AM",
                            message: "",
                            honeypot: ""
                          });
                        }}
                        variant="secondary"
                        size="md"
                        className="w-full sm:w-auto"
                      >
                        Book Another Slot
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Interactive Booking Form */
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-2xl text-[#0F3B4A]">
                        Request Your Visit
                      </h3>
                      <p className="text-xs sm:text-sm text-[#33525C] mt-1">
                        Fill in your details below. No upfront payment required.
                      </p>
                    </div>

                    {/* Anti-spam honeypot */}
                    <input
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      className="hidden"
                    />

                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F3B4A] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aditi Sharma"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: null });
                          }}
                          className={`w-full bg-[#F6FBFC] border rounded-2xl px-4 py-3 text-sm text-[#0F3B4A] placeholder:text-[#33525C]/40 focus:outline-none focus:ring-2 focus:ring-[#1F5A4A]/50 transition ${
                            errors.name ? "border-red-400 bg-red-50/20" : "border-[#DCEFF7]"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F3B4A] mb-1.5">
                          Phone Number (10 Digits) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: null });
                          }}
                          className={`w-full bg-[#F6FBFC] border rounded-2xl px-4 py-3 text-sm text-[#0F3B4A] placeholder:text-[#33525C]/40 focus:outline-none focus:ring-2 focus:ring-[#1F5A4A]/50 transition ${
                            errors.phone ? "border-red-400 bg-red-50/20" : "border-[#DCEFF7]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>

                      {/* Treatment Select */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F3B4A] mb-1.5">
                          Select Dental Treatment
                        </label>
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full bg-[#F6FBFC] border border-[#DCEFF7] rounded-2xl px-4 py-3 text-sm text-[#0F3B4A] focus:outline-none focus:ring-2 focus:ring-[#1F5A4A]/50 transition cursor-pointer"
                        >
                          <option value="Check-up & Consultation">General Dental Check-up & Consultation</option>
                          {clinic.services.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title} (From ₹{s.priceFrom.toLocaleString("en-IN")})
                            </option>
                          ))}
                          <option value="Not sure — Need advice">Not sure — Need Doctor's Advice</option>
                          <option value="Emergency Toothache Relief">🚨 Emergency Toothache Relief</option>
                        </select>
                      </div>

                      {/* Date & Time Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F3B4A] mb-1.5">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-[#F6FBFC] border border-[#DCEFF7] rounded-2xl px-4 py-3 text-sm text-[#0F3B4A] focus:outline-none focus:ring-2 focus:ring-[#1F5A4A]/50 transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F3B4A] mb-1.5">
                            Preferred Time Slot
                          </label>
                          <select
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full bg-[#F6FBFC] border border-[#DCEFF7] rounded-2xl px-4 py-3 text-sm text-[#0F3B4A] focus:outline-none focus:ring-2 focus:ring-[#1F5A4A]/50 transition cursor-pointer"
                          >
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Notes / Message */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F3B4A] mb-1.5">
                          Symptoms or Special Notes (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g. Mild pain in upper left tooth, sensitive to cold water..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-[#F6FBFC] border border-[#DCEFF7] rounded-2xl px-4 py-3 text-sm text-[#0F3B4A] placeholder:text-[#33525C]/40 focus:outline-none focus:ring-2 focus:ring-[#1F5A4A]/50 transition resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button (Deep Pill, 52px high) */}
                    <div className="mt-8 pt-4 border-t border-[#DCEFF7]">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full min-h-[52px] bg-[#1F5A4A] hover:bg-[#17483B] text-white rounded-full font-semibold text-sm sm:text-base uppercase tracking-wider transition-all shadow-pill hover:shadow-lg hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Reserving Your Slot...</span>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Request Appointment</span>
                          </>
                        )}
                      </button>

                      <p className="mt-3 text-center text-xs text-[#33525C]/75">
                        Free rescheduling • Zero cancellation fee • Strictly confidential
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

