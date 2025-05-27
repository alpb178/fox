'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background: #212121;
    justify-content: center;
  }
  a {
    margin: 0 10px;
    color: blue;
    text-decoration: underline;
  }
  button {
    margin-left: 10px;
  }
`;
