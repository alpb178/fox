"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, ErrorText, Form, Input, TextArea } from "@/helper/utils";

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
    validationSchema: Yup.object({
      name: Yup.string().required("Requerido"),
      description: Yup.string().required("Requerido"),
      price: Yup.number().positive("Debe ser positivo").required("Requerido"),
      category: Yup.string().required("Requerido"),
      condominium: Yup.string().required("Requerido"),
    }),
    onSubmit: async (values) => {
      if (isEdit) {
        await axios.put(`http://localhost:3001/products/${productId}`, values);
      } else {
        await axios.post("http://localhost:3001/products", values);
      }
      router.push("/products");
    },
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

      <Button type="submit">{isEdit ? "Actualizar" : "Crear"}</Button>
    </Form>
  );
}
