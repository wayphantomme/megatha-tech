export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Megatha Tech",
    url: "https://megatha-tech.vercel.app",
    logo: "https://megatha-tech.vercel.app/Megatha-Logo-Black.svg",
    description:
      "Software house berbasis di Bali, Indonesia. Spesialis pembuatan web app, sistem otomasi bisnis, dan platform digital.",
    foundingLocation: {
      "@type": "Place",
      name: "Bali, Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+62-896-8807-2039",
      email: "wayanphantomme@gmail.com",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [
      "https://www.instagram.com/megatha.tech/",
      "http://linkedin.com/company/megathatech/",
      "https://x.com/megathatech",
      "https://github.com/wayphantomme",
    ],
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      { "@type": "AdministrativeArea", name: "Bali" },
    ],
    knowsAbout: [
      "Web Application Development",
      "AI Automation",
      "Business Process Automation",
      "Digital Platform Development",
      "Software as a Service",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
