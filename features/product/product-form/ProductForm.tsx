/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonBack,
  ErrorText,
  Form,
  Input,
  TextArea,
} from "@/helper/utils";
import { validationSchema } from "./schemaValidation";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export default function ProductForm({ productId }: { productId?: string }) {
  const router = useRouter();
  const isEdit = !!productId;
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    condominium: "",
  });

  const handleSubmit = async (values: {
    name: string;
    description: string;
    price: number;
    category: string;
    condominium: string;
  }) => {
    if (isEdit) {
      await axios.put(`http://localhost:3001/products/${productId}`, values);
    } else {
      await axios.post("http://localhost:3001/products", values);
    }
    router.push("/");
  };

  useEffect(() => {
    if (isEdit) {
      axios.get(`http://localhost:3001/products/${productId}`).then((res) => {
        setInitialValues(res.data);
      });
    }
  }, [productId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <Input
        name="name"
        placeholder="Nombre"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name && (
        <ErrorText style={{ color: "red" }}>{formik.errors.name}</ErrorText>
      )}

      {formik.errors.description && (
        <ErrorText style={{ color: "red" }}>
          {formik.errors.description}
        </ErrorText>
      )}

      <Input
        name="price"
        type="number"
        placeholder="Precio"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price && (
        <ErrorText style={{ color: "red" }}>{formik.errors.price}</ErrorText>
      )}

      <Input
        name="category"
        placeholder="Categoría"
        onChange={formik.handleChange}
        value={formik.values.category}
      />
      {formik.errors.category && (
        <ErrorText style={{ color: "red" }}>{formik.errors.category}</ErrorText>
      )}

      <Input
        name="condominium"
        placeholder="Condominio"
        onChange={formik.handleChange}
        value={formik.values.condominium}
      />
      {formik.errors.condominium && (
        <ErrorText style={{ color: "red" }}>
          {formik.errors.condominium}
        </ErrorText>
      )}

      <TextArea
        name="description"
        placeholder="Descripción"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      <Container>
        <Button type="submit">
          {isEdit ? "Actualizar" : "Crear"} producto
        </Button>
        <ButtonBack onClick={() => router.back()}>Cancelar</ButtonBack>
      </Container>
    </Form>
  );
}
