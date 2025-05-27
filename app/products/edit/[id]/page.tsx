"use client";

import Loader from "@/app/component/loader/Loader";

import { Container, Title } from "@/helper/utils";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const ProductForm = dynamic(
  () => import("@/features/product/product-form/ProductForm"),
  {
    ssr: false,
    loading: () => <Loader message="Cargando..." />,
  }
);

export default function EditProductPage() {
  const { id } = useParams();

  return (
    <Container>
      <Title>Editar producto</Title>
      <ProductForm productId={id as string} />
    </Container>
  );
}
