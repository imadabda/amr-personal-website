import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Eye } from "lucide-react";

// Brand Identity
import wexaProperties from "@/assets/portfolio/wexa-properties.jpg";
import brandLogos from "@/assets/portfolio/brand-logos.jpg";
import lusense from "@/assets/portfolio/lusense.jpg";
import umani from "@/assets/portfolio/umani-branding.jpg";
import joy from "@/assets/portfolio/joy-branding.jpg";
import tropicana from "@/assets/portfolio/tropicana.jpg";
import appGuidelines from "@/assets/portfolio/app-guidelines.jpg";

// Social Media & Campaigns
import keepAwake from "@/assets/portfolio/keep-awake.jpg";
import simferSocial from "@/assets/portfolio/simfer-social.jpg";
import healthAwareness from "@/assets/portfolio/health-awareness.jpg";
import simferCars from "@/assets/portfolio/simfer-cars.jpg";
import simferPlasma from "@/assets/portfolio/simfer-plasma.jpg";
import socialTemplates from "@/assets/portfolio/social-templates.jpg";
import aloeVeraOffers from "@/assets/portfolio/aloe-vera-offers.jpg";
import sportsDesign from "@/assets/portfolio/sports-design.jpg";

// App & UI Design
import arnabApp from "@/assets/portfolio/arnab-app.jpg";
import arnabApp2 from "@/assets/portfolio/arnab-app-2.jpg";
import dozzCalendar from "@/assets/portfolio/dozz-calendar.jpg";

// Advertising Design
import wadaanFurniture from "@/assets/portfolio/wadaan-furniture.jpg";
import foodRealestate from "@/assets/portfolio/food-realestate.jpg";
import sunriseResorts from "@/assets/portfolio/sunrise-resorts.jpg";
import golfClub from "@/assets/portfolio/golf-club.jpg";
import belyBurger from "@/assets/portfolio/bely-burger.jpg";
import aloeVeraMedical from "@/assets/portfolio/aloe-vera-medical.jpg";
import sunriseEgypt from "@/assets/portfolio/sunrise-egypt.jpg";
import arabicTypography from "@/assets/portfolio/arabic-typography.jpg";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Brand Identity" },
    { id: "social", label: "Social Media" },
    { id: "advertising", label: "Advertising" },
    { id: "app", label: "App Design" },
  ];

  const portfolioItems = [
    // Brand Identity
    { image: wexaProperties, title: "WEXA Properties", category: "branding", tag: "Real Estate", glow: "from-orange-500/40 via-yellow-500/30 to-red-500/20" },
    { image: brandLogos, title: "Brand Logos Collection", category: "branding", tag: "Logo Design", glow: "from-blue-500/40 via-purple-500/30 to-pink-500/20" },
    { image: lusense, title: "LUSENSE", category: "branding", tag: "Brand Identity", glow: "from-cyan-500/40 via-blue-500/30 to-indigo-500/20" },
    { image: umani, title: "UMANI Branding", category: "branding", tag: "Brand Identity", glow: "from-emerald-500/40 via-teal-500/30 to-cyan-500/20" },
    { image: joy, title: "JOY Brand", category: "branding", tag: "Brand Identity", glow: "from-pink-500/40 via-rose-500/30 to-red-500/20" },
    { image: tropicana, title: "Tropicana", category: "branding", tag: "Brand Identity", glow: "from-yellow-500/40 via-orange-500/30 to-red-500/20" },
    { image: appGuidelines, title: "App Brand Guidelines", category: "branding", tag: "Guidelines", glow: "from-violet-500/40 via-indigo-500/30 to-blue-500/20" },

    // Social Media & Campaigns
    { image: keepAwake, title: "Keep Awake Campaign", category: "social", tag: "Creative Campaign", glow: "from-amber-500/40 via-orange-500/30 to-red-500/20" },
    { image: simferSocial, title: "Simfer Social Media", category: "social", tag: "Social Media", glow: "from-violet-500/40 via-purple-500/30 to-fuchsia-500/20" },
    { image: healthAwareness, title: "Health Awareness", category: "social", tag: "Awareness Campaign", glow: "from-green-500/40 via-emerald-500/30 to-teal-500/20" },
    { image: simferCars, title: "Simfer Car Rental", category: "social", tag: "Social Media", glow: "from-blue-500/40 via-indigo-500/30 to-violet-500/20" },
    { image: simferPlasma, title: "Simfer Plasma & Cars", category: "social", tag: "Social Media", glow: "from-red-500/40 via-orange-500/30 to-yellow-500/20" },
    { image: socialTemplates, title: "Social Media Templates", category: "social", tag: "Templates", glow: "from-lime-500/40 via-green-500/30 to-emerald-500/20" },
    { image: aloeVeraOffers, title: "Aloe Vera Medical Offers", category: "social", tag: "Healthcare Ads", glow: "from-teal-500/40 via-cyan-500/30 to-blue-500/20" },
    { image: sportsDesign, title: "Sports Campaign", category: "social", tag: "Sports", glow: "from-sky-500/40 via-blue-500/30 to-indigo-500/20" },

    // App & UI Design
    { image: arnabApp, title: "ARNAB App", category: "app", tag: "App UI/UX", glow: "from-violet-500/40 via-purple-500/30 to-fuchsia-500/20" },
    { image: arnabApp2, title: "ARNAB App Screens", category: "app", tag: "App UI/UX", glow: "from-pink-500/40 via-purple-500/30 to-indigo-500/20" },
    { image: dozzCalendar, title: "Dozz Calendar App", category: "app", tag: "App Design", glow: "from-blue-500/40 via-cyan-500/30 to-teal-500/20" },

    // Advertising Design
    { image: wadaanFurniture, title: "Wadaan Furniture", category: "advertising", tag: "Interior Design", glow: "from-amber-500/40 via-yellow-500/30 to-orange-500/20" },
    { image: foodRealestate, title: "Food & Real Estate", category: "advertising", tag: "Mixed Ads", glow: "from-rose-500/40 via-pink-500/30 to-orange-500/20" },
    { image: sunriseResorts, title: "Sunrise Resorts", category: "advertising", tag: "Tourism", glow: "from-yellow-500/40 via-amber-500/30 to-orange-500/20" },
    { image: sunriseEgypt, title: "Sunrise Egypt Campaign", category: "advertising", tag: "Tourism", glow: "from-amber-500/40 via-yellow-500/30 to-lime-500/20" },
    { image: golfClub, title: "Golf Club", category: "advertising", tag: "Sports", glow: "from-green-500/40 via-emerald-500/30 to-teal-500/20" },
    { image: belyBurger, title: "Bely Burger", category: "advertising", tag: "Food & Beverage", glow: "from-orange-500/40 via-red-500/30 to-yellow-500/20" },
    { image: aloeVeraMedical, title: "Aloe Vera Medical Center", category: "advertising", tag: "Healthcare", glow: "from-teal-500/40 via-green-500/30 to-emerald-500/20" },
    { image: arabicTypography, title: "Arabic Typography", category: "advertising", tag: "Typography", glow: "from-slate-500/40 via-gray-500/30 to-zinc-500/20" },
  ];

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === cat.id 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                className="relative group cursor-pointer break-inside-avoid"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item.image)}
              >
                {/* Glow effect behind the card */}
                <div className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-br ${item.glow} rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 backdrop-blur-sm">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay - always visible at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Eye icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </motion.div>
                    </div>
                    
                    {/* Info - always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <span className="inline-block px-2.5 py-1 bg-primary/30 backdrop-blur-sm rounded-full text-primary text-xs font-medium mb-1.5 shadow-sm">
                        {item.tag}
                      </span>
                      <h3 className="text-foreground text-sm sm:text-base font-bold drop-shadow-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Portfolio work"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;