import { Camera, Mail, Phone, Sparkles, Key, Palette, Smartphone, Megaphone, Fingerprint, Film } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import portrait from "@/assets/amr_shendy_creative_director_final.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = (ref.current as HTMLElement).getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const services = [
    { text: "Social media designs", icon: Smartphone },
    { text: "Brand Identity Design", icon: Palette },
    { text: "Retouching", icon: Sparkles },
    { text: "master key visual (KvS)", icon: Key },
  ];

  return (
    <section
      id="about"
      className="pt-16 sm:pt-24 pb-8 sm:pb-12 relative overflow-hidden bg-[#000000]"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Light Tracking */}
      <div
        className="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          opacity: isInView ? 1 : 0
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative z-20"
          >
            <p className="section-subtitle">About Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-primary leading-[1.1] whitespace-nowrap">
              With +9 years of experience
            </h2>
            <div className="space-y-6 text-muted-foreground text-sm sm:text-lg leading-relaxed mb-10 max-w-2xl font-light">
              <p>
                I help brands turn attention into action.{"\n"}
                With 9+ years of experience, I specialize in creating high-performance visual content for social media and digital advertising, designed to stop the scroll and drive real results.
              </p>

              <p>
                I’ve worked extensively with brands in the GCC market (KSA, UAE, Oman), focusing on data-driven design that supports growth, engagement, and conversion.
              </p>

              <div className="space-y-4 pt-4">
                <p className="font-semibold text-foreground tracking-wide">What I bring to the table:</p>
                <div className="space-y-3">
                  {[
                    "Creative direction for 50+ monthly ad campaigns",
                    "Up to 25% increase in ROAS for e-commerce clients",
                    "40% growth in organic engagement through strategic visuals"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_var(--primary)]" />
                      <p className="flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2x2 Grid Tag Cloud */}
            <div className="grid grid-cols-2 gap-3 mb-12 sm:w-fit">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <service.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-foreground text-xs sm:text-sm font-medium tracking-wide">{service.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Compact Contact (Footer Style) */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8 border-t border-white/5 opacity-80">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Collaboration</span>
                <span className="text-foreground text-sm font-medium">CEO@Shendystudio.com</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Direct Line</span>
                <span className="text-foreground text-sm font-medium">+20 10 67385584</span>
              </div>
            </div>
          </motion.div>

          {/* Specialized Ultimate Portrait - Senior Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-full flex items-center justify-center lg:justify-end py-10 perspective-2000"
          >
            {/* Soft Breathing Ambient Glow - Placed behind for depth */}
            <motion.div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[130%] bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.18)_0%,transparent_75%)] blur-[140px] pointer-events-none z-0"
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="relative w-full max-w-[500px] lg:scale-110 xl:scale-125 select-none z-10"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                rotateY: 8,
                rotateX: -5,
                scale: 1.05
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Cinematic Glow Mist */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] z-10 animate-pulse pointer-events-none" />

              {/* The "Transparent" Portrait Integration - Mathematically Screened */}
              <img
                src={portrait}
                alt="Amr Shendy"
                className="w-full h-auto object-contain relative z-20 transition-all duration-1000 group-hover:brightness-110"
                style={{
                  mixBlendMode: "screen", // Perfectly makes black invisible
                  maskImage: "radial-gradient(ellipse at 50% 35%, black 40%, transparent 95%)",
                  WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 40%, transparent 95%)",
                }}
              />

              {/* Deep Bottom Fade */}
              <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-30 pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
