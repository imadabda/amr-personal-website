import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { name: "Behance", href: "https://www.behance.net/amrshendy431f2" },
    { name: "Instagram", href: "https://www.instagram.com/amr_shendy/" },
    { name: "LinkedIn", href: "https://eg.linkedin.com/in/amr-shendy-7604a2181/ar" },
    { name: "Mustaqil", href: "https://mostaql.com/u/DESINK_EG" },
  ];

  return (
    <footer className="py-8 sm:py-12 border-t border-border relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Logo" className="h-8 w-auto brightness-0 invert" />
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-right">
            © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
