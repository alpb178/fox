import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0.5px solid #ccc;
  border-radius: 10px;
  padding: 40px;

  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #00e38c;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #00e38c;
  }
`;

export const ErrorText = styled.small`
  color: red;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;
