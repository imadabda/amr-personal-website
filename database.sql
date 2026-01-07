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
    cv_filename VARCHAR(255) DEFAULT 'CV.pdf'
);

-- Initialize default stats
INSERT IGNORE INTO stats (id, experience, advertising, projects, cv_filename) 
VALUES (1, '9+', '9+', '100+', 'CV.pdf');
