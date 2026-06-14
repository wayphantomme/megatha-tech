import Image from 'next/image';

const clientLogos = [
  { 
    id: 1, 
    name: 'EduCLaaS Pte Ltd', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/educlaas_ofjonj.jpg' 
  },
  { 
    id: 2, 
    name: 'Mainstreet Global', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431583/mainstreet-global_pbdxab.jpg' 
  },
  { 
    id: 3, 
    name: 'Mainstreet Hospitality', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431583/mainstreet-hospitality_weixub.jpg' 
  },
  { 
    id: 4, 
    name: 'Brittco Consulting', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/brittco-consulting_nxnixx.jpg' 
  },
  { 
    id: 5, 
    name: 'Ken Gooz', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/ken-gooz_ie4ln3.jpg' 
  },
  { 
    id: 6, 
    name: 'Nara Land Property', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431585/nara-land_ls9euu.jpg' 
  },
  { 
    id: 7, 
    name: 'Nine Planets Coffee', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431584/nine-planets_bokcj5.jpg' 
  },
  { 
    id: 8, 
    name: 'Narie\'s Eatery & Coffee', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431584/naries_utcn8t.jpg' 
  },
  { 
    id: 9, 
    name: 'Global Property Innovation', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/global-property_mqurxv.jpg' 
  },
  { 
    id: 10, 
    name: 'DM Agency', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/dm-agency_c9ubjs.jpg' 
  },
  { 
    id: 11, 
    name: 'Devisa', 
    srcUrl: 'https://res.cloudinary.com/dwsapeq3m/image/upload/v1781431582/devisa_ptmq4g.jpg' 
  },
];

export default function ClientsSection() {
  return (
    <section id="projects" className="py-16 bg-white w-full border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h4 className="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-12">
          PREVIOUS CLIENTS AND PROJECTS
        </h4>
        
        {/* Marquee Slider */}
        <div className="marquee-outer overflow-hidden relative w-full flex py-4">
          {/* Edge gradients for smooth fade out */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-track flex gap-12 md:gap-20 items-center px-6">
            {/* Render logos twice for seamless infinite scroll */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="relative w-48 md:w-64 h-24 md:h-32 shrink-0 flex items-center justify-center p-2 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-105 cursor-pointer"
                title={logo.name}
              >
                <Image
                  src={logo.srcUrl}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                  unoptimized // Ensures Next.js bypasses cache optimization issues for external Cloudinary links
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
