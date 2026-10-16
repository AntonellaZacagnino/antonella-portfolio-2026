"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Mail } from "lucide-react";
import { profile, profileLinks } from "@/data/profile";
import { usePortfolio } from "@/context/PortfolioContext";
import Toast from "@/components/ui/Toast";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  const { copy } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timeoutId = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const handleCopy = async () => {
    if (!profileLinks.email) {
      setToast(copy.contact.emailMissing);
      return;
    }

    try {
      await navigator.clipboard.writeText(profileLinks.email);
      setCopied(true);
      setToast(copy.contact.emailCopied);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setToast(copy.contact.copyFailed);
    }
  };

  return (
    <>
      <section className={styles.section} id="contact" aria-labelledby="contact-title">
        <div className={styles.contactPanel}>
          <div className={styles.contactCopy}>
            <h2 id="contact-title">{copy.contact.title}</h2>
            <p className={styles.description}>{copy.contact.description}</p>
          </div>
          <div className={styles.contactActions}>
            {profileLinks.email ? (
              <>
                <button className={styles.copyButton} type="button" onClick={() => void handleCopy()}>
                  {copied ? <Check size={17} /> : <Copy size={17} />}{copy.contact.copyEmail}
                </button>
                <a className={styles.emailLink} href={`mailto:${profileLinks.email}`}>
                  <Mail size={15} aria-hidden="true" />{profileLinks.email}<ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </>
            ) : (
              <p className={styles.pendingContact}>{copy.contact.emailMissing}</p>
            )}
            <div className={styles.socialLinks}>
              {profileLinks.github && <a href={profileLinks.github} target="_blank" rel="noreferrer"><Code2 size={16} />{copy.contact.github}<ArrowUpRight size={13} /></a>}
              {profileLinks.linkedin && <a href={profileLinks.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} />{copy.contact.linkedin}<ArrowUpRight size={13} /></a>}
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <span>© 2026 · {profile.name}</span>
        </footer>
      </section>
      <Toast message={toast} />
    </>
  );
}
