"use client";
import Loader from "./component/loader/Loader";
import dynamic from "next/dynamic";

const ProductList = dynamic(
  () => import("@/features/product/product-list/ProductList"),
  {
    ssr: false,
    loading: () => <Loader message="Cargando..." />,
  }
);

export default function Home() {
  return <ProductList />;
}
