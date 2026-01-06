import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Camera, PenTool, FileImage, Sun, Film } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Photoshop", level: 95, icon: Palette, color: "#31a8ff" },
    { name: "Photography", level: 92, icon: Camera, color: "#c8ff00" },
    { name: "Illustrator", level: 88, icon: PenTool, color: "#ff9a00" },
    { name: "InDesign", level: 85, icon: FileImage, color: "#ff3366" },
    { name: "Lightroom", level: 90, icon: Sun, color: "#31a8ff" },
    { name: "After Effects", level: 80, icon: Film, color: "#9999ff" },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Skills</p>
          <h2 className="section-title">
            Tools of <span className="text-primary">Creativity</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-colors"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <skill.icon 
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  style={{ color: skill.color }}
                />
              </div>

              {/* Name */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-2 sm:mb-4">
                {skill.name}
              </h3>

              {/* Level bar */}
              <div className="bg-secondary rounded-full h-6 sm:h-8 overflow-hidden relative">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                />
                <span 
                  className="relative z-10 font-bold text-xs sm:text-sm flex items-center justify-center h-full text-foreground"
                >
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
