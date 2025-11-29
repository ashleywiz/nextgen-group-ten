import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, CheckCircle, Leaf } from "lucide-react";
const HeroSection = () => {
  const highlights = ["First e-waste dismantling centre in Goa", "Operating since 2010", "GSPCB & GWMC registered", "Zero landfill policy for e-waste"];
  return <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 eco-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">E-waste recycling in Goa</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Group Tenplus
Recycling Solutions from E-waste to Dry waste      
         
   
 
 
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-accent mb-6">
              Join the green side.
            </p>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              Group Tenplus is Goa's first e-waste dismantling company and the longest running e-waste center in the state. We handle e-waste, dry waste including metal and plastic scrap, and demolition waste for homes, offices, and businesses across Goa. We are GSPCB (Goa State Pollution Control Board) and GWMC (Goa Waste Management Corporation) registered.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://wa.me/917972949655" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for Pickup
                </Button>
              </a>
              <a href="tel:+919373521448">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </a>
              <a href="mailto:info@grouptenplus.com">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </a>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => <div key={index} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>)}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden lg:flex justify-center animate-scale-in stagger-2">
            <div className="relative">
              <div className="w-[400px] h-[400px] rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center p-8 animate-float">
                <div className="text-center text-primary-foreground/70">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Leaf className="w-16 h-16" />
                  </div>
                  <p className="text-sm font-medium">
                    [Hero Image: E-waste recycling team in Goa sorting electronics, green environment, professional workers with safety gear]
                  </p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card text-foreground px-4 py-3 rounded-xl shadow-lg">
                <p className="text-xs text-muted-foreground">Since</p>
                <p className="text-2xl font-bold text-primary">2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;