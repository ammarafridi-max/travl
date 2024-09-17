import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={`col-10 ${styles.navbar}`}>
      <Logo />
      <NavLinks />
    </nav>
  );
}

function Logo() {
  return <div className={styles.logo}>{/* <img src="/" /> */}</div>;
}

function NavLinks() {
  return (
    <div className={styles.navLinks}>
      <a href="/" className={styles.link}>
        Home
      </a>
      <a href="/about" className={styles.link}>
        About
      </a>
      <a href="/contact" className={styles.link}>
        Contact
      </a>
      <a href="/services" className={styles.link}>
        Services
      </a>
      <a href="/pricing" className={styles.link}>
        Pricing
      </a>
    </div>
  );
}
