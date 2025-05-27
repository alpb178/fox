"use client";

import styled from "styled-components";
import Link from "next/link";
import { Pencil, Trash2, Plus } from "lucide-react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 0.5px solid #898989;
  border-radius: 10px;
  width: 90%;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background-color: #666666;
  border-bottom: 1px solid #ddd;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  padding: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  margin-top: 20px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export default function ProductTable({
  products,
  handleDelete,
}: {
  products: {
    id: number;
    name: string;
    price: number;
    condominium: string;
  }[];
  handleDelete: (id: number) => void;
}) {
  return (
    <Container>
      <TopBar>
        <Link href="/products/create">
          <IconButton title="Create">
            <Plus color="#00e38c"  size={30} />
          </IconButton>
        </Link>
      </TopBar>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Nombre</Th>
              <Th>Precio</Th>
              <Th>Condominio</Th>
              <Th>Acciones</Th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <Td>{p.name}</Td>
                <Td>${p.price}</Td>
                <Td>{p.condominium}</Td>
                <Td>
                  <ActionIcons>
                    <Link href={`/products/edit/${p.id}`}>
                      <IconButton title="Editar">
                        <Pencil color="#ffff" size={18} />
                      </IconButton>
                    </Link>
                    <IconButton
                      onClick={() => handleDelete(p.id)}
                      title="Eliminar"
                    >
                      <Trash2 color="#ffff" size={18} />
                    </IconButton>
                  </ActionIcons>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}
