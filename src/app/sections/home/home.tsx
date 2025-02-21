import Link from "next/link";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Bienvenido a -----------</h1>
      <nav className={styles.nav}>
        <Link href="/about" className={styles.navLink}>
          Sobre Nosotros
        </Link>
        <Link href="/service" className={styles.navLink}>
          Genera Tu Servicio
        </Link>
      </nav>
      <hr className={styles.separator} />
      <section className={styles.section}>
        <Link href="/products/lima" className={styles.card}>
          <span className={styles.cardText}>Lima</span>
        </Link>
        <Link href="/products/arequipa" className={styles.card}>
          <span className={styles.cardText}>Arequipa</span>
        </Link>
      </section>
    </main>
  );
}
