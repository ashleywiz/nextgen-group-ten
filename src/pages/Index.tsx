import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>E-Waste Recycling in Goa | Group Tenplus</title>
        <meta
          name="description"
          content="Group Tenplus is Goa's first e-waste recycler offering eco-conscious solutions for homes, offices, and businesses. Schedule your waste pickup today."
        />
        <meta
          name="keywords"
          content="e-waste recycling Goa, scrap removal Goa, dry waste collection Goa, eco-friendly recycling Goa, e-waste disposal Goa"
        />
        <meta name="author" content="Group Tenplus" />
        <link rel="canonical" href="https://www.grouptenplus.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="E-Waste Recycling in Goa | Group Tenplus"
        />
        <meta
          property="og:description"
          content="Goa's first e-waste recycler. Eco-conscious waste management solutions for homes, offices, and businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grouptenplus.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Waste Recycling in Goa | Group Tenplus"
        />
        <meta
          name="twitter:description"
          content="Goa's first e-waste recycler. Eco-conscious waste management solutions."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Group Tenplus",
            description:
              "Goa's first e-waste dismantling company offering e-waste recycling, dry waste collection, scrap removal, and demolition waste handling.",
            url: "https://www.grouptenplus.com",
            telephone: "+919823118321",
            email: "info@grouptenplus.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Beth-shalom, Abreovaddo",
              addressLocality: "Saligao, Bardez",
              addressRegion: "Goa",
              postalCode: "403511",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "15.5447",
              longitude: "73.7889",
            },
            openingHours: "Mo-Sa 09:00-18:00",
            sameAs: [],
            priceRange: "$$",
            areaServed: {
              "@type": "State",
              name: "Goa",
            },
            serviceType: [
              "E-Waste Recycling",
              "Dry Waste Collection",
              "Scrap Removal",
              "Demolition Waste Handling",
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <HowItWorksSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
