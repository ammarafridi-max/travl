import styles from "./SectionTitle.module.css";

export default function SectionTitle({ children, className, text }) {
  return (
    <>
      <div className={styles.sectionTitle}>
        <h2 className={`${className}`}>{children}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
}
