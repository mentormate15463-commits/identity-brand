import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

const offices = [
  {
    city: "Mumbai",
    address: "103, 1st Floor, Raheja Platinum, Marol, Andheri East",
    country: "India",
  },
  {
    city: "Dubai",
    address: "Suite 503, Latifa Tower, Sheikh Zayed Road",
    country: "UAE",
  },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-charcoal">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h2>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <a 
                href="tel:+919821629786" 
                className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body">+91 9821629786</span>
              </a>
              
              <a 
                href="mailto:info@identitybrand.in" 
                className="flex items-center gap-4 text-foreground/60 hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body">info@identitybrand.in</span>
              </a>
            </div>

            {/* Offices */}
            <div className="space-y-6 mb-12">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Our Studios
              </h3>
              {offices.map((office) => (
                <div key={office.city} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">
                      {office.city}, {office.country}
                    </p>
                    <p className="font-body text-sm text-foreground/60">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-secondary/80 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card/30">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm text-foreground/60 mb-2 block">
                      Your Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-secondary border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground/60 mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="bg-secondary border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/60 mb-2 block">
                    Company / Brand
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground/60 mb-2 block">
                    Project Details
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
