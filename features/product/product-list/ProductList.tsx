"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "@/helper/utils";
import ProductTable from "../product-table/ProductTable";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const refresh = () => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data));
  };

  useEffect(refresh, []);

  const handleDelete = async (id: number) => {
    if (confirm("¿Estás seguro de eliminar?")) {
      await axios.delete(`http://localhost:3001/products/${id}`);
      refresh();
    }
  };

  return (
    <Container>
      <ProductTable products={products} handleDelete={handleDelete} />
    </Container>
  );
}
