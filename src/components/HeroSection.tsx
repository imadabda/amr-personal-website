import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Camera, Palette, Download } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  const [stats, setStats] = useState([
    { number: "8+", label: "Years in Design", icon: Palette },
    { number: "9+", label: "Years in Advertising", icon: Sparkles },
    { number: "100+", label: "Projects Completed", icon: Camera },
  ]);

  const [cvLink, setCvLink] = useState("/cv.pdf");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats.php');
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setStats([
              { number: data.experience || "8+", label: "Years in Design", icon: Palette },
              { number: data.advertising || "9+", label: "Years in Advertising", icon: Sparkles },
              { number: data.projects || "100+", label: "Projects Completed", icon: Camera },
            ]);
            if (data.cv_filename) setCvLink(data.cv_filename);
          }
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };

    fetchStats();
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        const controls = animate(0, target, {
          duration: 3,
          delay: 1.5,
          ease: "easeOut",
          onUpdate: (value) => setCount(Math.round(value)),
        });
        return () => controls.stop();
      }
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  const title = "Amr Shendy";

  return (
    <section id="home" className="min-h-screen flex items-start pt-32 sm:pt-40 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Profile Image - Mobile First */}
          <motion.div
            className="relative flex justify-center items-center lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated background glows */}
            <motion.div
              className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-primary/30 via-orange-500/20 to-transparent rounded-full blur-[60px] sm:blur-[80px]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile image container */}
            <div className="relative z-10">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute -inset-3 sm:-inset-4 lg:-inset-6 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <motion.div className="relative">
                {/* Gradient border */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-primary via-orange-500 to-blue-500 rounded-full opacity-80"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Image */}
                <div className="relative bg-background rounded-full p-1">
                  <motion.img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full shadow-2xl"
                    initial={{ filter: "grayscale(100%)" }}
                    animate={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </div>
              </motion.div>

              {/* Floating badges - hidden on small mobile */}
              <motion.div
                className="absolute -right-2 top-2 sm:-right-4 sm:top-8 bg-card border border-border rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg hidden sm:flex"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                transition={{
                  opacity: { delay: 1.2 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex items-center gap-2">
                  <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-[10px] sm:text-xs font-medium">8+ Years</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-2 bottom-2 sm:-left-6 sm:bottom-8 bg-card border border-border rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg hidden sm:flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                transition={{
                  opacity: { delay: 1.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-[10px] sm:text-xs font-medium">Pro Photographer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-3 flex items-center justify-center lg:justify-start gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Hello, I'm a
            </motion.p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              <span className="text-primary inline-flex flex-wrap justify-center lg:justify-start">
                {title.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <br />
              <motion.span
                className="text-foreground/80 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold inline-block mt-2"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Senior graphic designer
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              className="text-muted-foreground/90 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I help brands turn attention into action
              With + 9 years of experience, I specialize in creating high-performance visual content for
              •social media and digital advertising, designed to stop the scroll and drive real results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="#contact">
                  Hire Me
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#portfolio">
                  View My Work
                  <ArrowUpRight />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group" asChild>
                <a href={cvLink} download>
                  Download CV
                  <Download className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            </motion.div>
            {/* Stats - Reverted to original position */}
            <motion.div
              className="bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-4 sm:p-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`text-center ${index !== stats.length - 1 ? 'border-r border-border/50' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                      <Counter
                        target={parseInt(stat.number)}
                        suffix={stat.number.replace(/[0-9]/g, '')}
                      />
                    </p>
                    <p className="text-muted-foreground text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section >
  );
};

export default HeroSection;
