"use client";

import { useAuth } from "@/auth-context";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background: "#fffdfd0";
  color: white;
  width: 100%;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default function Navbar() {
  const { isLoggedIn, handleLogout } = useAuth();

  return (
    <Nav>
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogout}>Cerrar sesión</LogoutButton>
      ) : null}
    </Nav>
  );
}
