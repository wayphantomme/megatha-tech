"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";

const clients = [
  { id: 1,  name: "EduCLaaS Pte Ltd",          type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/educlaas_ofjonj.jpg" },
  { id: 2,  name: "Mainstreet Global",           type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431583/mainstreet-global_pbdxab.jpg" },
  { id: 3,  name: "Mainstreet Hospitality",      type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431583/mainstreet-hospitality_weixub.jpg" },
  { id: 4,  name: "Brittco Consulting Group",    type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/brittco-consulting_nxnixx.jpg" },
  { id: 5,  name: "Ken Gooz",                    type: "Portfolio Website",       srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/ken-gooz_ie4ln3.jpg" },
  { id: 6,  name: "Nara Land Property",          type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431585/nara-land_ls9euu.jpg" },
  { id: 7,  name: "Nine Planets Coffee",         type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431584/nine-planets_bokcj5.jpg" },
  { id: 8,  name: "Narie's Eatery & Coffee",     type: "E-commerce Website",      srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431584/naries_utcn8t.jpg" },
  { id: 9,  name: "Global Property Innovation",  type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/global-property_mqurxv.jpg" },
  { id: 10, name: "DM Agency",                   type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/dm-agency_c9ubjs.jpg" },
  { id: 11, name: "Devisa Global Services",      type: "Company Profile Website", srcUrl: "https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/devisa_ptmq4g.jpg" },
];

const INITIAL_COUNT = 6;

export default function ClientsSection() {
  const { t, lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? clients : clients.slice(0, INITIAL_COUNT);
  const remaining = clients.length - INITIAL_COUNT;

  const showMoreLabel = lang === "id"
    ? `Lihat ${remaining} proyek lainnya`
    : `Show ${remaining} more projects`;
  const showLessLabel = lang === "id" ? "Sembunyikan" : "Show less";

  return (
    <section
      id="clients"
      className="bg-white px-6 py-16 md:py-24"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <p
          id="clients-heading"
          className="text-center text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-12"
        >
          {t.clients.eyebrow}
        </p>

        {/* Grid — 3 columns, landscape cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence initial={false}>
            {visible.map((client, i) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35, delay: i < INITIAL_COUNT ? (i % 3) * 0.06 : 0 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
              >
                {/* Screenshot image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.srcUrl}
                  alt={client.name}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Bottom label */}
                <div className="px-4 py-3 flex items-center justify-between gap-2 border-t border-slate-100 bg-white">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#111111] truncate">{client.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{client.type}</p>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Megatha-Logo-Black.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-3.5 w-auto opacity-20 flex-shrink-0"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / less button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-slate-400 hover:text-[#111111] hover:shadow-sm"
          >
            {showAll ? showLessLabel : showMoreLabel}
            <motion.svg
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>
      </div>
    </section>
  );
}
