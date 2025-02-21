"use client";
import Link from "next/link";
import styles from "./arequipaList.module.scss";
import products from "../../../../data/arequipa.product.json";

export default function ArequipaList() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Productos en Arequipa</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <Link href={`/products/arequipa/${product.id}`} className={styles.card}>
              <h2>{product.nombre}</h2>
              <p>Precio: {product.precio}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}