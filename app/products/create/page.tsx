"use client";

import Loader from "@/app/component/Loader/Loader";
import { Container, Title } from "@/helper/utils";
import dynamic from "next/dynamic";

const ProductForm = dynamic(
  () => import("@/features/product/product-form/ProductForm"),
  {
    ssr: false,
    loading: () => <Loader message="Cargando..." />,
  }
);

export default function CreateProductPage() {
  return (
    <Container>
      <Title>Crear producto</Title>
      <ProductForm />
    </Container>
  );
}
