"use client";

import { ArrowDown, ArrowRight, BriefcaseBusiness, Code2, Download } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { profile, profileLinks } from "@/data/profile";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const { copy } = usePortfolio();

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowMarker} aria-hidden="true" />
          <span className={styles.eyebrowName}>{profile.name}</span>
          <span aria-hidden="true">·</span>
          <span>{copy.hero.eyebrow}</span>
        </p>
        <h1 id="hero-title">{copy.hero.title}<br /><span>{copy.hero.titleAccent}</span></h1>
        <div className={styles.heroFooter}>
          <p className={styles.description}>{copy.hero.description}</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#about">{copy.hero.primaryAction}<ArrowRight size={16} aria-hidden="true" /></a>
            <a className={styles.cvAction} href="/CV%20Antonella%20Zacagnino.pdf" download="CV-Antonella-Zacagnino.pdf">
              {copy.hero.cvDownload}<Download size={15} aria-hidden="true" />
            </a>
            <a className={styles.secondaryAction} href="#stack">{copy.hero.secondaryAction}</a>
            {profileLinks.github && (
              <a className={styles.socialAction} href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Code2 size={18} aria-hidden="true" />
              </a>
            )}
            {profileLinks.linkedin && (
              <a className={styles.socialAction} href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <BriefcaseBusiness size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
      <a className={styles.scrollCue} href="#about"><span>{copy.hero.scrollLabel}</span><ArrowDown size={15} aria-hidden="true" /></a>
    </section>
  );
}
