"use client";

import { ArrowUpRight } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import styles from "./StackSection.module.scss";

export default function StackSection() {
  const { copy } = usePortfolio();

  return (
    <section className={styles.section} id="stack" aria-labelledby="stack-title">
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.eyebrow}>{copy.stack.eyebrow}</p>
          <h2 id="stack-title">{copy.stack.title}</h2>
        </div>
        <p className={styles.description}>{copy.stack.description}</p>
      </div>
      <div className={styles.categoryGrid}>
        {copy.stack.categories.map((category, index) => (
          <article className={styles.categoryCard} key={category.title}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIndex}>0{index + 1}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </div>
            <h3>{category.title}</h3>
            <ul className={styles.technologyList}>
              {category.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
