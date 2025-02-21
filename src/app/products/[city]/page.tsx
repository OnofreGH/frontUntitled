"use client";
import { useParams } from "next/navigation";
import LimaList from "@/app/sections/products/listProducts/lima/limaList";
import ArequipaList from "@/app/sections/products/listProducts/arequipa/arequipaList";

export default function ProductsPage() {
  const { city } = useParams();

  if (city === "lima") {
    return <LimaList />;
  }

  if (city === "arequipa") {
    return <ArequipaList />;
  }

  return <h1>Ciudad no encontrada</h1>;
}
