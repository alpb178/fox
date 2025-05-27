"use client";

import LoginForm from "@/components/login/LoginForm";
import styled from "styled-components";
import {
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

const CenteredMain = styled.main<SpaceProps & LayoutProps & FlexboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;

  ${space}
  ${layout}
  ${flexbox}
`;

export default function LoginPage() {
  return (
    <CenteredMain>
      <LoginForm />
    </CenteredMain>
  );
}
