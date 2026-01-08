-- Database Schema for Creative Canvas Studio
-- Create this database on Hostinger via phpMyAdmin

CREATE TABLE IF NOT EXISTS portfolio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category ENUM('branding', 'social', 'retouching', 'kv') NOT NULL,
    tag VARCHAR(100),
    image LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stats (
    id INT PRIMARY KEY DEFAULT 1,
    experience VARCHAR(50) DEFAULT '9+',
    advertising VARCHAR(50) DEFAULT '9+',
    projects VARCHAR(50) DEFAULT '100+',
    cv_filename VARCHAR(255) DEFAULT 'CV.pdf',
    hero_title VARCHAR(255) DEFAULT 'Amr Shendy',
    hero_subtitle VARCHAR(255) DEFAULT 'Senior graphic designer',
    hero_description TEXT,
    about_title VARCHAR(255) DEFAULT 'About Me',
    about_heading VARCHAR(255) DEFAULT 'With +9 years of experience',
    about_description TEXT,
    about_bullets TEXT,
    contact_email VARCHAR(255) DEFAULT 'CEO@Shendystudio.com',
    contact_phone VARCHAR(255) DEFAULT '+20 10 67385584'
);

-- Initialize default stats
INSERT IGNORE INTO stats (id, experience, advertising, projects, cv_filename, hero_title, hero_subtitle, hero_description, about_title, about_heading, about_description, about_bullets, contact_email, contact_phone) 
VALUES (1, '9+', '9+', '100+', 'CV.pdf', 'Amr Shendy', 'Senior graphic designer', 'I help brands turn attention into action\nWith + 9 years of experience, I specialize in creating high-performance visual content for\n•social media and digital advertising, designed to stop the scroll and drive real results.', 'About Me', 'With +9 years of experience', 'I help brands turn attention into action. With 9+ years of experience, I specialize in creating high-performance visual content for social media and digital advertising, designed to stop the scroll and drive real results.\n\nI’ve worked extensively with brands in the GCC market (KSA, UAE, Oman), focusing on data-driven design that supports growth, engagement, and conversion.', 'Creative direction for 50+ monthly ad campaigns\nUp to 25% increase in ROAS for e-commerce clients\n40% growth in organic engagement through strategic visuals', 'CEO@Shendystudio.com', '+20 10 67385584');
