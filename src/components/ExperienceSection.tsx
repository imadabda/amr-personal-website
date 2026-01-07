import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const experiences = [
    {
        role: "Senior Graphic Designer",
        company: "Al-jahmi Design",
        period: "2025 - Present",
        location: "Saudi Arabia (Remote)",
        description: "Specializing in high-performance visual content and results-driven advertising for the Saudi market."
    },
    {
        role: "Senior Graphic Designer",
        company: "TaxiF",
        period: "2025 - Present",
        location: "Jordan (Remote)",
        description: "Leading visual storytelling and brand consistency, optimizing digital assets for maximum engagement."
    },
    {
        role: "Social Media Graphic Designer",
        company: "MU Services",
        period: "2021 - 2023",
        location: "Oman (Remote)",
        description: "Focused on data-driven design in the GCC market supporting growth and conversion."
    },
    {
        role: "Graphic Designer",
        company: "Pixels Crab",
        period: "2020 - 2022",
        location: "UAE (Remote)",
        description: "Created high-performance visuals for various branding projects."
    }
];

const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Mouse movement for parallax effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    return (
        <section id="experience" className="pt-8 sm:pt-12 pb-20 sm:pb-32 relative overflow-hidden" ref={ref}>
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Title Section - Now at the Top */}
                <motion.div
                    className="mb-16 sm:mb-24 lg:ml-12 text-center lg:text-left"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">My Resume</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
                        Real <span className="text-primary font-bold italic tracking-tighter">Problem Solutions</span> Experience
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">

                    {/* Left Column: Futuristic Interactive Logo */}
                    <div className="lg:w-1/3 flex justify-center lg:justify-start perspective-1000">
                        <motion.div
                            className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] rounded-full flex items-center justify-center group cursor-crosshair"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
                            style={{
                                rotateX: mousePos.y * -20,
                                rotateY: mousePos.x * 20,
                                transformStyle: "preserve-3d"
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Main Glass Circle */}
                            <div className="absolute inset-0 rounded-full bg-secondary/10 backdrop-blur-xl border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.3)]" />

                            {/* Rotating Energy Rings */}
                            <motion.div
                                className="absolute inset-2 rounded-full border-[2px] border-primary/20 border-t-primary/60 border-l-transparent"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-8 rounded-full border border-dashed border-primary/30"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Floating Particles Around Logo */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(244,85,53,0.8)]"
                                    animate={{
                                        x: [Math.cos(i) * 150, Math.cos(i + 1) * 180, Math.cos(i) * 150],
                                        y: [Math.sin(i) * 150, Math.sin(i + 1) * 180, Math.sin(i) * 150],
                                        opacity: [0.2, 0.8, 0.2]
                                    }}
                                    transition={{
                                        duration: 5 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}

                            {/* Glow Bloom Effect */}
                            <motion.div
                                className="absolute w-40 h-40 bg-primary/40 rounded-full blur-[60px]"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* The Logo Image with Parallax Movement */}
                            <motion.div
                                style={{
                                    x: mousePos.x * 40,
                                    y: mousePos.y * 40,
                                    translateZ: 100,
                                }}
                                className="z-10 relative flex items-center justify-center"
                            >
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-48 h-48 md:w-64 md:h-64 object-contain brightness-0 invert opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                />
                            </motion.div>

                            {/* Outer Pulse Ring */}
                            <motion.div
                                className="absolute inset-[-20px] rounded-full border border-primary/10"
                                animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Experience Card */}

                    {/* Right Column: Experience Card */}
                    <div className="lg:w-2/3 w-full">
                        <motion.div
                            className="bg-card/40 backdrop-blur-2xl border border-border/20 rounded-[3rem] p-8 sm:p-12 shadow-2xl relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12 relative">
                                {/* Vertical Divider for Desktop */}
                                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border/20 to-transparent -translate-x-1/2" />

                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        className="group relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center shrink-0 border border-border/50 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-all" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest opacity-80">{exp.period}</p>
                                                <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-sm font-bold text-muted-foreground group-hover:text-primary/70">{exp.company}</p>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground/80 text-sm sm:text-base leading-relaxed pl-14 font-medium">
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
