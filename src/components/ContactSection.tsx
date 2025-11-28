import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  FileDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917972949655?text=${message}`, "_blank");
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your message on WhatsApp to reach us.",
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 79729 49655",
      href: "https://wa.me/917972949655",
      highlight: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9373521448 / 7972949655 / 98231 18321",
      href: "tel:+919373521448",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@grouptenplus.com",
      href: "mailto:info@grouptenplus.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Beth-shalom, Abreovaddo, Saligao, Bardez, Goa. 403511",
      href: "https://maps.google.com/?q=Saligao,Goa",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to schedule a pickup? WhatsApp is the fastest way to reach us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all ${
                    item.highlight
                      ? "bg-[#25D366]/10 border-2 border-[#25D366]/30 hover:border-[#25D366]"
                      : "bg-card border border-border hover:border-primary/30"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.highlight ? "bg-[#25D366]" : "bg-primary/10"
                    }`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        item.highlight ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps?q=Group+Tenplus,+Abreovaddo,+Saligao,+Bardez,+Goa+403511&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Group Tenplus Location"
              />
            </div>

            {/* Download Section */}
            <div className="mt-6 p-4 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <FileDown className="w-5 h-5 text-primary" />
                Downloadable Resources
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Download our comprehensive e-waste collection list to know what we accept.
              </p>
              <Button variant="outline" size="sm">
                E-Waste Collection List PDF
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 eco-shadow-lg border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Name
                </label>
                <Input
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your waste pickup needs..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
