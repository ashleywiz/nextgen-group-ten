import { Monitor, Package, Wrench, HardHat, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ewasteRecyclingImg from "@/assets/ewasterecycling.png";
import drywasteImg from "@/assets/drywaste.png";
import scrapRemovalImg from "@/assets/scrapremoval.png";
import demolitionImg from "@/assets/demolitionteam.png";

const ServicesSection = () => {
  const services = [{
    icon: Monitor,
    title: "E-Waste Recycling and Dismantling",
    subtitle: "Primary Service",
    description: "We collect, dismantle, and channel electronic waste to authorised co-processing and recycling partners. None of the electronics given to us for recycling are processed for resale. Every device that can hold data is shredded. 100% of equipment is recycled and kept out of landfills.",
    collects: ["Computers, laptops, tablets", "Servers, networking gear, routers", "Mobile phones and chargers", "Printers, scanners, fax machines", "TVs, monitors, cables", "Kitchen and home appliances", "Power tools, battery-operated devices", "Air Conditioners (AC)"],
    notCollects: ["CFL bulbs and tube lights", "Loose AA or AAA batteries", "Ink and toner cartridges", "CDs, DVDs, ribbon cartridges"],
    featured: true,
    image: ewasteRecyclingImg,
    imageAlt: "E-waste recycling team in Goa sorting electronic equipment"
  }, {
    icon: Package,
    title: "Dry Waste Collection",
    description: "We collect sorted dry waste like paper, plastic, cardboard, packaging, and similar non-hazardous materials from homes, offices, and commercial spaces. Ideal for dry waste collection in Goa if you want a regular or periodic clearance partner instead of ad-hoc junk runs.",
    idealFor: ["Homes", "Offices", "Shops"],
    image: drywasteImg,
    imageAlt: "Group Tenplus dry waste collection truck in Goa"
  }, {
    icon: Wrench,
    title: "Scrap and Bulk Junk Removal",
    description: "We clear out metal scrap, old furniture, broken appliances, and renovation junk. Professional scrap removal in Goa for pre-renovation clearouts, store room cleanups, and office upgrades.",
    idealFor: ["Renovators", "Home clear-outs", "Businesses"],
    image: scrapRemovalImg,
    imageAlt: "Scrap removal service clearing bulk junk in Goa"
  }, {
    icon: HardHat,
    title: "Demolition Waste Handling",
    description: "We support contractors and civil projects with safe clearing of post-demolition debris. Whether it's renovations, restoring office space, or full teardowns, our demolition waste disposal in Goa coordinates with your site team so that concrete, bricks, and structural waste move out quickly and safely.",
    idealFor: ["Construction companies", "Contractors", "Civil projects"],
    image: demolitionImg,
    imageAlt: "Demolition waste handling team in Goa"
  }];

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg">
            E-waste recycling stays at the core of what we do. We accept other waste streams like scrap metals, plastics, paper and cardboard, that support the same goal of a cleaner and safer Goa through scientific, pollution-free resource recovery.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl p-8 eco-shadow-md border border-border mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Choose Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              GSPCB & GWMC registered
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Goa's first e-waste dismantling centre
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Closed-body trucks for safe transport
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Complete data destruction before recycling
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Zero resale of electronics
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Ethical disposal of waste materials
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Zero burning
            </li>
          </ul>
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
                E-Waste Recycling and Dismantling
              </h3>
              <p className="text-muted-foreground mb-4">
                Anything that has a wire, plug or battery, that has stopped working, or is part of a waste manufacturing process, that you probably are never going to use again is E-waste.
              </p>
              <p className="text-muted-foreground mb-6">
                {services[0].description}
              </p>
              
              {/* E-waste Team Image */}
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={services[0].image} 
                  alt={services[0].imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <a href="https://wa.me/917972949655?text=Hi,%20I%20want%20to%20schedule%20an%20e-waste%20pickup" target="_blank" rel="noopener noreferrer">
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
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
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
                  What We Don't Collect (from the General Public)
                </h4>
                <ul className="space-y-2">
                  {services[0].notCollects?.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
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
            <div key={index} className="bg-card rounded-2xl p-6 eco-shadow-md border border-border hover:border-primary/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              
              {/* Service Image */}
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img 
                  src={service.image} 
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {service.idealFor && (
                <div className="flex flex-wrap gap-2">
                  {service.idealFor.map((item, idx) => (
                    <span key={idx} className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground">
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
