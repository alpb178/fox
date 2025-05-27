import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 20px auto;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Message = styled.p`
  margin-top: 10px;
  color: #666;
`;

export default function Loader({ message = "Cargando..." }: { message?: string }) {
  return (
    <LoaderWrapper>
      <Spinner />
      <Message>{message}</Message>
    </LoaderWrapper>
  );
}
