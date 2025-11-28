import { Leaf, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "E-Waste Recycling",
    "Dry Waste Collection",
    "Scrap Removal",
    "Demolition Waste",
  ];

  return (
    <footer className="bg-eco-dark text-white">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">
                  GR<span className="text-accent">O</span>UP TENPLUS
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-5">
              Goa's first e-waste recycling company. Join the green side and make responsible waste disposal easy.
            </p>
            <a
              href="https://wa.me/917972949655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919823118321"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+91 98231 18321</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917972949655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-accent transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+91 79729 49655</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@grouptenplus.com"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>info@grouptenplus.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Beth-shalom, Abreovaddo, Saligao, Bardez, Goa. 403511</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Group Tenplus. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Following ISO 14001:2004 & OHSAS 18001:2007 standards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
