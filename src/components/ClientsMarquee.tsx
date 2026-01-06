import { motion } from "framer-motion";

// Original logos
import damanLogo from "@/assets/logos/daman-original.png";
import conexLogo from "@/assets/logos/conex-original.png";
import wexaLogo from "@/assets/logos/wexa-original.png";

import khazanaLogo from "@/assets/logos/khazana-original.png";
import gaithLogo from "@/assets/logos/gaith-original.png";
import pizza88Logo from "@/assets/logos/pizza88-original.png";

const clientLogos = [
  { image: wexaLogo, name: "WEXA Properties" },
  { image: conexLogo, name: "Conex" },
  { image: damanLogo, name: "ضمان" },
  { image: khazanaLogo, name: "خزنة" },
  { image: gaithLogo, name: "Gaith Tours" },
  { image: pizza88Logo, name: "Pizza 88" },
];

const ClientsMarquee = () => {
  // Duplicate for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-card/30 border-y border-border/30">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 mb-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Trusted By</p>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Brands I've <span className="text-primary">Worked With</span>
          </h3>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling content */}
        <motion.div 
          className="flex items-center gap-6 sm:gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-border/30 hover:border-primary transition-all duration-300 w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] flex items-center justify-center p-3 hover:shadow-[0_0_25px_hsl(75,100%,50%,0.4)]">
                {/* Inner border frame with logo inside */}
                <div className="w-full h-full rounded-xl border-2 border-white/30 group-hover:border-primary/50 flex items-center justify-center p-4 transition-all duration-300">
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
