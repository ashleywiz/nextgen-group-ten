import { Camera, MapPin, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      step: "01",
      title: "Send Photos",
      description:
        "Send one bird's-eye view photo or a photo of the boxes containing your waste. No need to send photos of each item.",
    },
    {
      icon: MapPin,
      step: "02",
      title: "Share Location",
      description:
        "Share your Google Maps location pin so we can plan the most efficient route.",
    },
    {
      icon: User,
      step: "03",
      title: "Provide Details",
      description:
        "Type your full name, pickup address, and contact number for our logistics team.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            How Pickup Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Simple Steps to Schedule Your Pickup
          </h2>
          <p className="text-muted-foreground text-lg">
            We use WhatsApp to keep the process simple for you and efficient for our routing.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-8 eco-shadow-md border border-border hover:border-primary/30 transition-all text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-secondary/50 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <p className="text-foreground mb-6">
            Once we receive these details, we'll club your pickup with others on the same route.
            <span className="block text-muted-foreground mt-2">
              Pickups aren't on fixed days, but we aim to get to you ASAP.
            </span>
          </p>

          <a
            href="https://wa.me/919373521448?text=Hi,%20I%20want%20to%20schedule%20a%20waste%20pickup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5" />
              Start on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
