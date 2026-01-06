import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const contactItems = [
    { icon: Mail, label: "Email", value: "contact@shendystudio.com" },
    { icon: Phone, label: "Phone", value: "+20 109 894 4917" },
    { icon: MapPin, label: "Location", value: "Egypt" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `مرحباً، أنا ${formData.name}
البريد الإلكتروني: ${formData.email}
${formData.service ? `الخدمة: ${formData.service}` : ''}

الرسالة:
${formData.message}`;

    const whatsappUrl = `https://wa.me/201098944917?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: "جاري الفتح...",
      description: "سيتم فتح WhatsApp لإرسال رسالتك",
    });

    // Clear form
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subtitle">Contact</p>
            <h2 className="section-title">
              Have a <span className="text-primary">Project</span> in Mind?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-10">
              I'm here to help transform your ideas into reality.
              Get in touch and let's start the creative journey together.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 bg-card/50 border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-xs sm:text-sm">{item.label}</p>
                    <p className="text-foreground text-sm sm:text-base md:text-lg font-medium truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-foreground text-sm sm:text-base mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground text-sm sm:text-base mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground text-sm sm:text-base mb-2 font-medium">Service Type</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="branding">Brand Identity</option>
                  <option value="photo">Photography</option>
                  <option value="ads">Advertising Design</option>
                  <option value="content">Visual Content</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground text-sm sm:text-base mb-2 font-medium">Your Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button variant="hero" size="lg" className="w-full" type="submit">
                Send via WhatsApp
                <ArrowUpRight />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
