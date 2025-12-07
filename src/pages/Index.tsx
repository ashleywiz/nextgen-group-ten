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
          content="Group Tenplus is Goa's first and longest-running e-waste recycling and dismantling centre, offering eco-friendly pickup of electronics, dry waste, scrap, and demolition waste across Goa."
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
          content="Book e-waste pickup anywhere in Goa. First and longest-running e-waste dismantling centre."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grouptenplus.com" />
        <meta property="og:image" content="https://www.grouptenplus.com/thumbnail.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Waste Recycling in Goa | Group Tenplus"
        />
        <meta
          name="twitter:description"
          content="Eco-friendly e-waste recycling, scrap removal and dry waste collection across Goa."
        />
        <meta
          name="twitter:image"
          content="https://www.grouptenplus.com/thumbnail.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Group Tenplus",
            description: "E-waste recycling and waste management services across Goa.",
            url: "https://www.grouptenplus.com",
            image: "https://www.grouptenplus.com/thumbnail.png",
            telephone: "+91 79729 49655",
            email: "info@grouptenplus.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Beth-shalom, Abreovaddo",
              addressLocality: "Saligao",
              addressRegion: "Goa",
              postalCode: "403511",
              addressCountry: "IN",
            },
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