"use client";

import { Container, Title } from "@/helper/utils";
import dynamic from "next/dynamic";
import Loader from "../component/Loader/Loader";

export default function LoginPage() {
  const ProductList = dynamic(
    () => import("@/features/product/product-list/ProductList"),
    {
      ssr: false,
      loading: () => <Loader message="Cargando..." />,
    }
  );
  return (
    <Container>
      <Title>Productos</Title>
      <ProductList />
    </Container>
  );
}
