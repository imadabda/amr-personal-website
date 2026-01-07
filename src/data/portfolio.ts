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

// Advertising Design
import wadaanFurniture from "@/assets/portfolio/wadaan-furniture.jpg";
import foodRealestate from "@/assets/portfolio/food-realestate.jpg";
import sunriseResorts from "@/assets/portfolio/sunrise-resorts.jpg";
import golfClub from "@/assets/portfolio/golf-club.jpg";
import belyBurger from "@/assets/portfolio/bely-burger.jpg";
import aloeVeraMedical from "@/assets/portfolio/aloe-vera-medical.jpg";
import sunriseEgypt from "@/assets/portfolio/sunrise-egypt.jpg";
import arabicTypography from "@/assets/portfolio/arabic-typography.jpg";

export interface PortfolioItem {
    id: string;
    image: string;
    title: string;
    category: "branding" | "social" | "retouching" | "kv";
    tag: string;
    glow: string;
    isDefault?: boolean;
}

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
    // Brand Identity
    { id: "b1", image: wexaProperties, title: "WEXA Properties", category: "branding", tag: "Identity", glow: "from-orange-500/40 via-yellow-500/30 to-red-500/20", isDefault: true },
    { id: "b2", image: brandLogos, title: "Brand Logos Collection", category: "branding", tag: "Logos", glow: "from-blue-500/40 via-purple-500/30 to-pink-500/20", isDefault: true },
    { id: "b3", image: lusense, title: "LUSENSE", category: "branding", tag: "Identity", glow: "from-cyan-500/40 via-blue-500/30 to-indigo-500/20", isDefault: true },
    { id: "b4", image: umani, title: "UMANI Branding", category: "branding", tag: "Identity", glow: "from-emerald-500/40 via-teal-500/30 to-cyan-500/20", isDefault: true },
    { id: "b5", image: joy, title: "JOY Brand", category: "branding", tag: "Identity", glow: "from-pink-500/40 via-rose-500/30 to-red-500/20", isDefault: true },
    { id: "b6", image: appGuidelines, title: "Brand Guidelines", category: "branding", tag: "Identity", glow: "from-violet-500/40 via-indigo-500/30 to-blue-500/20", isDefault: true },

    // Social Media Designs
    { id: "s1", image: simferSocial, title: "Simfer Social", category: "social", tag: "Social Ads", glow: "from-violet-500/40 via-purple-500/30 to-fuchsia-500/20", isDefault: true },
    { id: "s2", image: simferCars, title: "Simfer Rental", category: "social", tag: "Social Ads", glow: "from-blue-500/40 via-indigo-500/30 to-violet-500/20", isDefault: true },
    { id: "s3", image: socialTemplates, title: "Content Templates", category: "social", tag: "Social Ads", glow: "from-lime-500/40 via-green-500/30 to-emerald-500/20", isDefault: true },
    { id: "s4", image: aloeVeraOffers, title: "Medical Offers", category: "social", tag: "Social Ads", glow: "from-teal-500/40 via-cyan-500/30 to-blue-500/20", isDefault: true },
    { id: "s5", image: sportsDesign, title: "Sports Social", category: "social", tag: "Social Ads", glow: "from-sky-500/40 via-blue-500/30 to-indigo-500/20", isDefault: true },
    { id: "s6", image: healthAwareness, title: "Health Awareness", category: "social", tag: "Social Ads", glow: "from-green-500/40 via-emerald-500/30 to-teal-500/20", isDefault: true },

    // Retouching
    { id: "r1", image: belyBurger, title: "Bely Burger", category: "retouching", tag: "Retouching", glow: "from-orange-500/40 via-red-500/30 to-yellow-500/20", isDefault: true },
    { id: "r2", image: aloeVeraMedical, title: "Medical Retouching", category: "retouching", tag: "Retouching", glow: "from-teal-500/40 via-green-500/30 to-emerald-500/20", isDefault: true },
    { id: "r3", image: tropicana, title: "Tropicana", category: "retouching", tag: "Retouching", glow: "from-yellow-500/40 via-orange-500/30 to-red-500/20", isDefault: true },
    { id: "r4", image: arabicTypography, title: "Typography Art", category: "retouching", tag: "Artistic", glow: "from-slate-500/40 via-gray-500/30 to-zinc-500/20", isDefault: true },

    // Key Visuals (KvS)
    { id: "k1", image: keepAwake, title: "Keep Awake", category: "kv", tag: "Key Visual", glow: "from-amber-500/40 via-orange-500/30 to-red-500/20", isDefault: true },
    { id: "k2", image: simferPlasma, title: "Plasma & Cars", category: "kv", tag: "Key Visual", glow: "from-red-500/40 via-orange-500/30 to-yellow-500/20", isDefault: true },
    { id: "k3", image: wadaanFurniture, title: "Wadaan", category: "kv", tag: "Key Visual", glow: "from-amber-500/40 via-yellow-500/30 to-orange-500/20", isDefault: true },
    { id: "k4", image: sunriseResorts, title: "Sunrise Resorts", category: "kv", tag: "Key Visual", glow: "from-yellow-500/40 via-amber-500/30 to-orange-500/20", isDefault: true },
    { id: "k5", image: sunriseEgypt, title: "Sunrise Egypt", category: "kv", tag: "Key Visual", glow: "from-amber-500/40 via-yellow-500/30 to-lime-500/20", isDefault: true },
    { id: "k6", image: foodRealestate, title: "Food & Realestate", category: "kv", tag: "Key Visual", glow: "from-rose-500/40 via-pink-500/30 to-orange-500/20", isDefault: true },
    { id: "k7", image: golfClub, title: "Golf Club", category: "kv", tag: "Key Visual", glow: "from-green-500/40 via-emerald-500/30 to-teal-500/20", isDefault: true },
];
