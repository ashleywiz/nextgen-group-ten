import { Building2, Home, Store } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg">
            You handle your work. We handle your waste, from pickup to final processing.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-secondary flex items-center justify-center p-8 eco-shadow-md">
              <div className="text-center text-muted-foreground">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-primary" />
                </div>
                <p className="text-sm">
                  [Image: Group Tenplus e-waste centre in Saligao Goa showing organized recycling facility]
                </p>
              </div>
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-5 rounded-xl eco-shadow-lg">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-foreground text-lg mb-6">
              Group Tenplus started as the first formal e-waste dismantling centre in Goa and has remained the longest running e-waste facility in the state. There was no organised way to dismantle and handle e-waste safely when we began. We built the first local e-waste dismantling centre in the state and kept it running over the years as electronics use exploded.
            </p>
            <p className="text-muted-foreground mb-8">
              Today, e-waste recycling in Goa is our main business. We work with homes, offices, corporates, IT departments, shops, and institutions across Goa. Our focus stays the same for every client: safe handling, clear communication, and full traceability for your e-waste. We also provide waste management services including dry waste collection, scrap removal, and demolition waste disposal in Goa.
            </p>

            {/* Client Types */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary">
                <Home className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Homes</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary">
                <Building2 className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Offices</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary">
                <Store className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Corporates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;