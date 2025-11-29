import { Shield, Award, Users, CheckCircle } from "lucide-react";

const StandardsSection = () => {
  const standards = [
    {
      icon: Shield,
      title: "ISO 14001:2004 Principles",
      description: "Our internal processes follow ISO 14001:2004 principles for environmental management systems.",
    },
    {
      icon: Award,
      title: "OHSAS 18001:2007 Principles",
      description: "We follow OHSAS 18001:2007 principles for occupational health and safety management.",
    },
    {
      icon: Users,
      title: "Authorised Partners",
      description: "We work with multiple authorised co-processing partner recyclers to keep the circular chain intact.",
    },
  ];

  const commitments = [
    "GSPCB (Goa State Pollution Control Board) registered",
    "GWMC (Goa Waste Management Corporation) registered",
    "Zero landfill policy for all e-waste",
    "Closed-body transport to prevent spillage",
    "Complete data destruction for storage devices",
    "No resale of any recycled electronics",
  ];

  return (
    <section id="standards" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Standards and Partners
          </h2>
          <p className="text-muted-foreground text-lg">
            While we are not certified, our internal processes follow internationally recognized standards for environmental and occupational health management.
          </p>
        </div>

        {/* Standards Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 eco-shadow-md border border-border text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <standard.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {standard.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitments */}
        <div className="bg-card rounded-2xl p-8 eco-shadow-md border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Our Commitments</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;