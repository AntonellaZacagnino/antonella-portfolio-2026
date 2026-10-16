import styles from "./Toast.module.scss";

export default function Toast({ message }: { message: string | null }) {
  if (!message) return null;

  return <div className={styles.toast} role="status" aria-live="polite">{message}</div>;
}
