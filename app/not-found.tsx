"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/products");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página no encontrada (404)</h1>
      <p>Redirigiendo ...</p>
    </div>
  );
}
