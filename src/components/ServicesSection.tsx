import { Monitor, Package, Wrench, HardHat, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "E-Waste Recycling",
      subtitle: "Primary Service",
      description:
        "We collect, dismantle, and channel electronic waste to authorised co-processing and recycling partners. None of the electronics given to us for recycling are processed for resale. Every device that can hold data is shredded. 100% of equipment is recycled and kept out of landfills.",
      collects: [
        "Computers, laptops, tablets",
        "Servers, networking gear, routers",
        "Mobile phones and chargers",
        "Printers, scanners, fax machines",
        "TVs, monitors, cables",
        "Kitchen and home appliances",
        "Power tools, battery-operated devices",
      ],
      notCollects: [
        "CFL bulbs and tube lights",
        "Loose AA or AAA batteries",
        "Ink and toner cartridges",
        "CDs, DVDs, ribbon cartridges",
      ],
      featured: true,
    },
    {
      icon: Package,
      title: "Dry Waste Collection",
      description:
        "We collect sorted dry waste like paper, plastic, cardboard, packaging, and similar non-hazardous materials from homes, offices, and commercial spaces. Ideal if you want a regular or periodic clearance partner instead of ad-hoc junk runs.",
      idealFor: ["Homes", "Offices", "Shops"],
    },
    {
      icon: Wrench,
      title: "Scrap & Bulk Junk Removal",
      description:
        "We clear out metal scrap, old furniture, broken appliances, and renovation junk. Good for pre-renovation clearouts, store room cleanups, and office upgrades.",
      idealFor: ["Renovators", "Home clear-outs", "Businesses"],
    },
    {
      icon: HardHat,
      title: "Demolition Waste Handling",
      description:
        "We support contractors and civil projects with safe clearing of post-demolition debris. Our team coordinates with your site team so that concrete, bricks, and structural waste move out quickly and safely.",
      idealFor: ["Construction companies", "Contractors", "Civil projects"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Our Services – Waste Management Simplified
          </h2>
          <p className="text-muted-foreground text-lg">
            E-waste stays at the core of what we do. Other waste streams support the same goal — a cleaner and safer Goa.
          </p>
        </div>

        {/* Featured E-Waste Service */}
        <div className="bg-card rounded-3xl p-8 md:p-10 eco-shadow-lg border border-border mb-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full text-primary text-sm font-medium mb-4">
                <Monitor className="w-4 h-4" />
                Primary Service
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                E-Waste Recycling & Dismantling
              </h3>
              <p className="text-muted-foreground mb-6">
                {services[0].description}
              </p>
              
              {/* Image Placeholder */}
              <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center p-6 mb-6">
                <p className="text-sm text-muted-foreground text-center">
                  [Image: E-waste collection process showing workers sorting computers, phones, and electronic equipment in organized facility]
                </p>
              </div>

              <a
                href="https://wa.me/919373521448?text=Hi,%20I%20want%20to%20schedule%20an%20e-waste%20pickup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg">
                  Schedule E-Waste Pickup
                </Button>
              </a>
            </div>

            <div className="space-y-6">
              {/* What We Collect */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  What We Collect
                </h4>
                <ul className="space-y-2">
                  {services[0].collects?.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Don't Collect */}
              <div className="bg-destructive/5 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  What We Don't Collect
                </h4>
                <ul className="space-y-2">
                  {services[0].notCollects?.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(1).map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 eco-shadow-md border border-border hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              {service.idealFor && (
                <div className="flex flex-wrap gap-2">
                  {service.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
