import { useState, useEffect } from "react";
import { X, Clock, CheckCircle2, Calendar, Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import { clinic } from "../content/clinic";

export default function TreatmentModal({ service, onClose, onSelectBooking }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F3B4A]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#F6FBFC] rounded-[32px] overflow-hidden max-w-2xl w-full shadow-elevated border border-[#DCEFF7] animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#DCEFF7] via-[#D6EFE3] to-[#F6FBFC] border-b border-[#DCEFF7] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-[#0F3B4A] transition shadow-sm"
            aria-label="Close treatment details"
          >
            <X size={20} />
          </button>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/80 text-[#1F5A4A] shadow-sm mb-3">
            {service.category}
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F3B4A]">
            {service.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-[#1F5A4A] font-medium">
            <span className="flex items-center gap-1.5">
              <Clock size={16} /> Expected Time: <strong>{service.duration}</strong>
            </span>
            <span>•</span>
            <span>
              Treatment from: <strong>₹{service.priceFrom.toLocaleString("en-IN")}</strong>
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-heading font-semibold text-base text-[#0F3B4A] mb-2">
              Procedure Overview
            </h4>
            <p className="text-sm sm:text-base text-[#33525C] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Advantages / Features */}
          {service.features && (
            <div>
              <h4 className="font-heading font-semibold text-base text-[#0F3B4A] mb-3">
                Key Clinical Advantages
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#33525C] bg-white p-3 rounded-2xl border border-[#DCEFF7]"
                  >
                    <CheckCircle2 size={16} className="text-[#1F5A4A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Transparent Pricing Promise */}
          <div className="bg-[#D6EFE3]/60 p-4 rounded-2xl border border-[#B7E4CC]/60 flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#1F5A4A] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#1F5A4A]">
              <strong>Transparent Care Commitment:</strong> Every patient receives a comprehensive diagnosis with high-definition intraoral camera photos and a written, fixed-price plan before treatment commences.
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 sm:p-6 bg-white border-t border-[#DCEFF7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#33525C]/75">Transparent Price Estimate</p>
            <p className="font-heading text-2xl font-bold text-[#1F5A4A]">
              From ₹{service.priceFrom.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto gap-2"
              onClick={() => {
                onClose();
                if (onSelectBooking) onSelectBooking(service);
              }}
            >
              <Calendar size={16} />
              <span>Book This Treatment</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

