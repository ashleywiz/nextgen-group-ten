import { useEffect, useState, useRef } from "react";
import { Users, Truck, Award } from "lucide-react";

interface StatItemProps {
  endValue: number;
  suffix: string;
  subtitle: string;
  icon: React.ReactNode;
}

const StatItem = ({ endValue, suffix, subtitle, icon }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = endValue / (duration / 16);
          
          const animate = () => {
            start += increment;
            if (start < endValue) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6 md:p-8">
      <div className="flex justify-center mb-3">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {subtitle}
      </div>
    </div>
  );
};

const StatsStrip = () => {
  const stats = [
    {
      endValue: 300,
      suffix: "+",
      subtitle: "Clients served across Goa",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      endValue: 2000,
      suffix: "+",
      subtitle: "Successful waste pickups and disposals",
      icon: <Truck className="w-8 h-8 text-primary" />,
    },
    {
      endValue: 15,
      suffix: "+",
      subtitle: "Years of responsible e-waste work",
      icon: <Award className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-primary/20">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              endValue={stat.endValue}
              suffix={stat.suffix}
              subtitle={stat.subtitle}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
