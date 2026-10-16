"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock3, Code2, MapPin, Sparkles } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import styles from "./AboutSection.module.scss";

function useBuenosAiresTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Argentina/Buenos_Aires", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    });
    const updateTime = () => setTime(formatter.format(new Date()));
    updateTime();
    const intervalId = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(intervalId);
  }, []);
  return time;
}

export default function AboutSection() {
  const { copy } = usePortfolio();
  const { about } = copy;
  const localTime = useBuenosAiresTime();

  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{about.eyebrow}</p>
        <h2 id="about-title">{about.title}</h2>
      </div>
      <div className={styles.bentoGrid}>
        <article className={`${styles.card} ${styles.profileCard}`}>
          <div className={styles.cardTopline}><span>{about.profileLabel}</span><Code2 size={17} aria-hidden="true" /></div>
          <div className={styles.profileIntro}>
            <h3>{about.profileTitle}</h3>
            <div className={styles.portraitFrame}>
              <Image
                className={styles.portrait}
                src="/images/fotocv.jpg"
                alt="Antonella Zacagnino"
                fill
                sizes="(max-width: 48rem) 6.5rem, 9rem"
              />
            </div>
          </div>
          <p>{about.profileBody}</p>
          <div className={styles.cardFoot}><span>{about.profileDetail}</span><ArrowUpRight size={15} aria-hidden="true" /></div>
        </article>
        <article className={`${styles.card} ${styles.locationCard}`}>
          <div className={styles.cardTopline}><span>{about.locationLabel}</span><MapPin size={17} aria-hidden="true" /></div>
          <h3>{about.locationTitle}</h3>
          <p>{about.locationBody}</p>
          <div className={styles.clockPanel}>
            <span className={styles.clockLabel}><Clock3 size={12} aria-hidden="true" />{about.localTime}</span>
            <time className={styles.clockTime} aria-label={`${about.timezone}: ${localTime}`}>{localTime}</time>
            <span className={styles.timezone}>{about.timezone}</span>
          </div>
        </article>
        <article className={`${styles.card} ${styles.workflowCard}`}>
          <div className={styles.cardTopline}><span>{about.workflowLabel}</span><Sparkles size={17} aria-hidden="true" /></div>
          <h3>{about.workflowTitle}</h3>
          <p>{about.workflowBody}</p>
        </article>
      </div>
    </section>
  );
}
