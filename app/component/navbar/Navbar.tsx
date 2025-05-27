"use client";

import { useAuth } from "@/auth-context";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background: "#fffdfd0";
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Nav>
      {isLoggedIn ? (
        <LogoutButton onClick={logout}>Cerrar sesión</LogoutButton>
      ) : (
        <StyledLink href="/login">Iniciar sesión</StyledLink>
      )}
    </Nav>
  );
}
