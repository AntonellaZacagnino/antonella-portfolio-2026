"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X, Star } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { profile } from "@/data/profile";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { copy, language, theme, toggleLanguage, toggleTheme } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigation = [
    { href: "#home", label: copy.navigation.home },
    { href: "#about", label: copy.navigation.about },
    { href: "#stack", label: copy.navigation.stack },
    { href: "#projects", label: copy.navigation.projects },
    { href: "#contact", label: copy.navigation.contact },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">{copy.navigation.skipToContent}</a>
      <a className={styles.wordmark} href="#home" aria-label={`${copy.navigation.home} — Portfolio`}>
        <span className={styles.wordmarkMark} aria-hidden="true"><Star size={17} /></span>
        <span className={styles.wordmarkLabel}>{profile.name}<span> / 2026</span></span>
      </a>
      <nav
        id="primary-navigation"
        className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
        aria-label={copy.navigation.navigationLabel}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
      </nav>
      <div className={styles.actions}>
        <span className={styles.availability}>
          <span className={styles.availabilityDot} aria-hidden="true" />
          <span>{copy.navigation.availability}</span>
        </span>
        <button
          className={styles.languageButton}
          type="button"
          onClick={toggleLanguage}
          aria-label={`${copy.navigation.language}: ${language === "es" ? "English" : "Español"}`}
        >
          <span className={language === "es" ? styles.languageActive : ""}>ES</span>
          <span className={styles.languageDivider}>/</span>
          <span className={language === "en" ? styles.languageActive : ""}>EN</span>
        </button>
        <button
          className={styles.iconButton}
          type="button"
          onClick={toggleTheme}
          aria-label={copy.navigation.theme}
          title={`${copy.navigation.theme}: ${theme === "dark" ? "Light" : "Dark"}`}
        >
          {theme === "dark" ? <Sun size={17} strokeWidth={1.7} /> : <Moon size={17} strokeWidth={1.7} />}
        </button>
        <button
          className={`${styles.iconButton} ${styles.menuButton}`}
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? copy.navigation.closeMenu : copy.navigation.menu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}
