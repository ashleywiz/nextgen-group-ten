import { User } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Story
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 eco-shadow-lg border border-border">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Founder Info */}
              <div className="text-center md:text-left">
                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Ashley Delaney</h3>
                <p className="text-sm text-muted-foreground">Founder & Proprietor</p>
              </div>

              {/* Story Content */}
              <div className="md:col-span-2 space-y-4">
                <p className="text-foreground text-lg">
                  Group Tenplus was founded by Ashley Delaney, who continues to run the company as proprietor and founding member.
                </p>
                <p className="text-muted-foreground">
                  Group Tenplus started as the first formal e-waste dismantling centre in Goa and has remained the longest running e-waste facility in the state. When we began in 2010, there was no organised way to handle e-waste safely in Goa.
                </p>
                <p className="text-muted-foreground">
                  We built the infrastructure, established relationships with authorised recyclers, and created a system that ensures every piece of electronic waste is processed responsibly. Over the years, as electronics use exploded, we grew with Goa's needs while staying true to our core mission: keeping e-waste out of landfills and protecting the environment.
                </p>
                <p className="text-muted-foreground">
                  Today, we serve homes, offices, corporates, IT departments, shops, and institutions across Goa with the same commitment to safe handling, clear communication, and full traceability that we started with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;