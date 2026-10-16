"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Coins, Search, X } from "lucide-react";
import { projects, type Project, getProjectText } from "@/data/projects";
import { usePortfolio } from "@/context/PortfolioContext";
import styles from "./ProjectsSection.module.scss";

function ProjectPreview({ project }: { project: Project }) {
  if (project.previewImage) {
    return (
      <div className={`${styles.preview} ${styles.imagePreview}`} aria-hidden="true">
        <Image
          className={`${styles.previewImage} ${project.previewImageFit === "contain" ? styles.previewImageContain : ""}`}
          src={project.previewImage}
          alt=""
          fill
          sizes="(max-width: 54rem) calc(100vw - 2.5rem), 43vw"
        />
      </div>
    );
  }

  if (project.visual === "trivia") {
    return (
      <div className={`${styles.preview} ${styles.triviaPreview}`} aria-hidden="true">
        <div className={styles.previewTopbar}><span>TRIVIA WAR</span><span className={styles.liveBadge}>● LIVE</span></div>
        <div className={styles.triviaBoard}>
          <div className={styles.questionPanel}><span>ROUND 04 · 00:18</span><strong>Which idea changed the way we build?</strong></div>
          <div className={styles.answerGrid}><i>01&nbsp; A better question</i><i>02&nbsp; A curious mind</i><i>03&nbsp; Teamwork</i><i>04&nbsp; All of the above</i></div>
        </div>
        <span className={styles.previewOrb} />
      </div>
    );
  }

  if (project.visual === "nuarielle") {
    return (
      <div className={`${styles.preview} ${styles.nuariellePreview}`} aria-hidden="true">
        <div className={styles.previewTopbar}><span>NUARIELLE</span><span>PASTELERÍA ARTESANAL</span></div>
        <div className={styles.bakeryStorefront}>
          <span>HECHO PARA DISFRUTAR</span>
          <strong>Un momento<br />más dulce.</strong>
          <div className={styles.bakeryProducts}><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  if (project.visual === "aerolab") {
    return (
      <div className={`${styles.preview} ${styles.aerolabPreview}`} aria-hidden="true">
        <div className={styles.previewTopbar}><span>AEROLAB / REWARDS</span><span><Coins size={12} /> 2,450</span></div>
        <div className={styles.rewardsStorefront}>
          <span>REDEEM YOUR POINTS</span>
          <strong>Choose your<br />next reward.</strong>
          <div className={styles.rewardCards}><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  if (project.visual === "zarego") {
    return (
      <div className={`${styles.preview} ${styles.zaregoPreview}`} aria-hidden="true">
        <div className={styles.previewTopbar}><span>POKÉDEX / GEN 01</span><span>001—151</span></div>
        <div className={styles.pokedexInterface}>
          <div className={styles.pokedexSearch}><Search size={13} /><span>Search Pokémon</span></div>
          <div className={styles.pokemonTiles}><i>01 <b>Bulbasaur</b><em>GRASS</em></i><i>04 <b>Charmander</b><em>FIRE</em></i><i>07 <b>Squirtle</b><em>WATER</em></i></div>
        </div>
      </div>
    );
  }

  if (project.visual === "verifarma") {
    return (
      <div className={`${styles.preview} ${styles.verifarmaPreview}`} aria-hidden="true">
        <div className={styles.previewTopbar}><span>VERIMOVIES / DISCOVER</span><span>01—10</span></div>
        <div className={styles.movieStorefront}>
          <div className={styles.movieSearch}><Search size={13} /><span>Search for movies...</span></div>
          <div className={styles.moviePosters}><i /><i /><i /><i /></div>
          <span>MOVIE DETAILS · CAST · RATINGS</span>
        </div>
      </div>
    );
  }

  if (project.visual === "academic-team") {
    return (
      <div className={`${styles.preview} ${styles.academicPreview}`} aria-hidden="true">
        <div className={styles.previewTopbar}><span>MVPP / APP TRIVIA</span><span>IONIC · ANGULAR</span></div>
        <div className={styles.academicBoard}>
          <span>APRENDER · JUGAR · COMPETIR</span>
          <strong>Poné a prueba<br />lo que sabés.</strong>
          <div className={styles.teamRows}><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  return null;
}

function getProjectSourceLinks(project: Project, fallbackLabel: string, language: "es" | "en") {
  if (project.sourceLinks?.length) {
    return project.sourceLinks.map(({ label, url }) => ({ label: label[language], url }));
  }
  return project.sourceUrl ? [{ label: fallbackLabel, url: project.sourceUrl }] : [];
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const { copy, language } = usePortfolio();
  const { projects: projectCopy } = copy;
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const text = (value: Parameters<typeof getProjectText>[0]) => getProjectText(value, language);
  const sourceLinks = getProjectSourceLinks(project, projectCopy.sourceLabel, language);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus();
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.stopPropagation();
      return;
    }

    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <motion.div
      className={styles.dialogBackdrop}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <motion.section
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        initial={{ opacity: 0, y: reducedMotion ? 0 : 24, scale: reducedMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reducedMotion ? 0 : 14, scale: reducedMotion ? 1 : 0.98 }}
        transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeOut" }}
      >
        <div className={styles.dialogHeader}>
          <span>{project.discipline[language]} <i>/</i> {projectCopy.architectureLabel}</span>
          <button ref={closeRef} className={styles.closeButton} type="button" aria-label={projectCopy.closeLabel} onClick={onClose}><X size={19} /></button>
        </div>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className={styles.dialogIntro}>{text(project.summary)}</p>
        <div className={styles.dialogColumns}>
          <section>
            <h3>{projectCopy.challengeLabel}</h3>
            <p>{text(project.challenge)}</p>
          </section>
          <section>
            <h3>{projectCopy.contributionsLabel}</h3>
            <p>{text(project.approach)}</p>
          </section>
        </div>
        <section className={styles.architectureSection}>
          <h3>{projectCopy.architectureLabel}</h3>
          <ol>
            {project.architecture.map((detail, index) => (
              <li key={detail.en}><span>0{index + 1}</span><p>{text(detail)}</p></li>
            ))}
          </ol>
        </section>
        <div className={styles.dialogFooter}>
          <div><span className={styles.footerLabel}>{projectCopy.stackLabel}</span><p>{text(project.focus)}</p></div>
          <div className={styles.projectLinks}>
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">{projectCopy.demoLabel}<ArrowUpRight size={15} /></a>}
            {sourceLinks.map((link) => <a href={link.url} key={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={15} /></a>)}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { copy, language } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reducedMotion = useReducedMotion();
  const closeDialog = useCallback(() => {
    setSelectedProject(null);
  }, []);
  const openDialog = (project: Project) => setSelectedProject(project);

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionHeader}>
        <div><p className={styles.eyebrow}>{copy.projects.eyebrow}</p><h2 id="projects-title">{copy.projects.title}</h2></div>
        <p>{copy.projects.description}</p>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.article className={styles.projectCard} key={project.id} layout whileHover={reducedMotion ? undefined : { y: -4 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}>
            <ProjectPreview project={project} />
            <div className={styles.projectBody}>
              <div className={styles.projectMeta}><span>0{index + 1} / {copy.projects.projectLabel}</span><span>{project.discipline[language]}</span></div>
              <h3>{project.title}</h3>
              <p className={styles.projectSummary}>{getProjectText(project.summary, language)}</p>
              <div className={styles.projectFooter}>
                <p className={styles.projectTags}>{getProjectText(project.focus, language)}</p>
                <div className={styles.projectActions}>
                  {getProjectSourceLinks(project, copy.projects.sourceLabel, language).map((link) => <a href={link.url} key={link.url} target="_blank" rel="noreferrer" aria-label={`${link.label}: ${project.title}`}>{link.label}<ArrowUpRight size={14} /></a>)}
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${copy.projects.demoLabel}: ${project.title}`}>{copy.projects.demoLabel}<ArrowUpRight size={14} /></a>}
                  <button type="button" onClick={() => openDialog(project)}>{copy.projects.openCaseStudy}<ArrowDownRight size={15} /></button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectDialog key={selectedProject.id} project={selectedProject} onClose={closeDialog} />}
      </AnimatePresence>
    </section>
  );
}
