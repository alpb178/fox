"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, ErrorText, Form, Input, Title } from "./utils";

export default function LoginForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("Requerido"),
      password: Yup.string()
        .min(4, "Mínimo 4 caracteres")
        .required("Requerido"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("/api/login", values);
        router.push("/products");
      } catch {
        alert("Credenciales incorrectas");
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Iniciar sesión</Title>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}

      <Input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && (
        <ErrorText>{formik.errors.password}</ErrorText>
      )}

      <Button type="submit">Iniciar sesión</Button>
    </Form>
  );
}
