import { ArrowUpRight, Palette, Smartphone, Sparkles, Key } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      number: "01",
      title: "Brand Identity Design",
      description: "Creating unique visual identities and brand strategies that reflect your business personality.",
      icon: Palette,
    },
    {
      number: "02",
      title: "Social media designs",
      description: "High-performance visual content for social media designed to stop the scroll and drive engagement.",
      icon: Smartphone,
    },
    {
      number: "03",
      title: "Retouching",
      description: "Professional photo retouching and enhancement to ensure every detail of your brand visuals is perfect.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "master key visual (KvS)",
      description: "Developing powerful master key visuals that define the core aesthetic of your entire marketing campaign.",
      icon: Key,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Services</p>
          <h2 className="section-title">
            <span className="text-primary">Premium Services</span> For Your Business
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-3 sm:space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3 sm:gap-6">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Number */}
                <span className="text-muted-foreground text-sm sm:text-lg font-medium flex-shrink-0 hidden sm:block">
                  {service.number}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors truncate sm:whitespace-normal">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-none">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors"
                  animate={{
                    rotate: hoveredIndex === index ? 45 : 0,
                  }}
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
