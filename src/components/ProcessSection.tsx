import { Truck, Shield, HardDrive, Recycle, Factory } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Truck,
      title: "Collection & Transport",
      description: "We use closed-body trucks for transport to prevent spillage and pilferage. Your e-waste is handled safely from the moment we pick it up.",
    },
    {
      icon: Shield,
      title: "Safe Dismantling",
      description: "We dismantle all electronics in our facility following proper protocols. None of the electronics given to us for recycling are processed for resale.",
    },
    {
      icon: HardDrive,
      title: "Data Security",
      description: "Devices that can hold data (phones, computers, hard drives, etc.) are shredded to protect data security. Complete destruction guaranteed.",
    },
    {
      icon: Factory,
      title: "Partner Recycling",
      description: "We work with multiple authorised co-processing partner recyclers to keep the circular chain intact and ensure responsible processing.",
    },
    {
      icon: Recycle,
      title: "Zero Landfill",
      description: "We follow a zero landfill approach for e-waste. All equipment is processed and kept out of landfills. 100% recycled.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How We Process E-Waste
          </h2>
          <p className="text-muted-foreground text-lg">
            From collection to final recycling, every step is designed for safety, security, and environmental responsibility.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 eco-shadow-md border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Message */}
        <div className="bg-primary/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-foreground text-lg font-medium">
            We welcome individuals and organisations in Goa to join this effort to promote environmental sustainability. Every item you recycle with us stays out of the landfill.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;