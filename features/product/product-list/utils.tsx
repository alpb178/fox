import styled from "styled-components";

export const ContainerList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const ProductItem = styled.li`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductInfo = styled.div`
  flex: 1;
  font-size: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;
