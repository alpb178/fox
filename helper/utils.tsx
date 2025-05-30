import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 0.5px solid #898989;
  border-radius: 10px;
  padding: 40px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid #a7a7a7;
  color: #fafafa;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.02);
  margin-bottom: 15px;
`;

export const Button = styled.button`
  border-radius: 8px;
  background: #00e38c;
  display: flex;
  padding: 14px;
  font-size: 14px;
  color: black;
  cursor: pointer;
`;

export const ButtonBack = styled.button`
  border-radius: 8px;
  background: #8e8e8e;
  display: flex;
  padding: 14px;
  font-size: 14px;
  color: black;
  cursor: pointer;
`;

export const ErrorText = styled.small`
  color: red;
  margin-top: -20px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid #a7a7a7;
  color: #fafafa;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.02);
  margin-bottom: 15px;
`;
