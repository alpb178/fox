"use client";

import { Container, Title } from "@/helper/utils";
import dynamic from "next/dynamic";
import Loader from "../component/loader/Loader";

const LoginForm = dynamic(() => import("@/features/login/LoginForm"), {
  ssr: false,
  loading: () => <Loader message="Cargando..." />,
});

export default function LoginPage() {

  return (
    <Container>
      <Title>Iniciar sesión</Title>
      <LoginForm />
    </Container>
  );
}
