import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProcessSection from "@/components/ProcessSection";
import StorySection from "@/components/StorySection";
import StandardsSection from "@/components/StandardsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import gtpLogo from "@/assets/gtplogo.jpg";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>E-Waste Recycling in Goa | Group Tenplus</title>
        <meta
          name="description"
          content="Group Tenplus is Goa's first e-waste recycler offering eco-conscious solutions for homes, offices, and businesses."
        />
        <meta
          name="keywords"
          content="e-waste recycling Goa, waste management Goa, scrap removal Goa, dry waste collection Goa, demolition waste disposal Goa, eco-friendly recycling Goa, e-waste pickup Goa, recycling contact Goa, authorized e-waste recycler Goa"
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
          content="Group Tenplus is Goa's first e-waste recycler offering eco-conscious solutions for homes, offices, and businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grouptenplus.com" />
        <meta property="og:image" content={gtpLogo} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Waste Recycling in Goa | Group Tenplus"
        />
        <meta
          name="twitter:description"
          content="Group Tenplus is Goa's first e-waste recycler offering eco-conscious solutions for homes, offices, and businesses."
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
            telephone: "+919373521448",
            email: "info@grouptenplus.com",
            founder: {
              "@type": "Person",
              name: "Ashley Delaney",
            },
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
            sameAs: [
              "https://www.linkedin.com/company/877210/",
              "https://www.facebook.com/ewastegoa/"
            ],
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
          <VisionMissionSection />
          <ServicesSection />
          <HowItWorksSection />
          <ProcessSection />
          <StorySection />
          <StandardsSection />
          <ResourcesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;