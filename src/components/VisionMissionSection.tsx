import { Target, Eye } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vision and Mission
          </h2>
          <p className="text-muted-foreground text-lg">
            Driving eco-friendly recycling in Goa through sustainable practices and community partnership.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl eco-shadow-md border border-border hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To propagate ecological sustainability initiatives and help our clients give back to society and to nature.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl eco-shadow-md border border-border hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To be the best in providing environmentally sound solutions and recycling to the society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;