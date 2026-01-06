import { Palette, Camera, Megaphone, Image, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { text: "Brand Identity Design", icon: Palette },
    { text: "Professional Photography", icon: Camera },
    { text: "Advertising Campaigns", icon: Megaphone },
    { text: "Visual Content Creation", icon: Image },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-subtitle">About Me</p>
          <h2 className="section-title">
            Senior <span className="text-primary">Graphic Designer</span> With Extensive Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Senior graphic designer with more than 8 years of experience in Photoshop and photography, 
            plus 9 years in advertising and visual content creation. I help brands grow by delivering 
            clear professional messages, strong campaigns, and increasing revenue. Always looking forward to learn more.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-xl p-3 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="text-foreground text-sm sm:text-base font-medium">{service.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div 
            className="bg-card border border-border rounded-2xl p-4 sm:p-6 space-y-4 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer hover:bg-secondary/50 rounded-xl p-2 -m-2 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs sm:text-sm">Email</p>
                <p className="text-foreground text-sm sm:text-base truncate">contact@designer.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer hover:bg-secondary/50 rounded-xl p-2 -m-2 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs sm:text-sm">Phone</p>
                <p className="text-foreground text-sm sm:text-base">+966 XX XXX XXXX</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
