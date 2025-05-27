import { render, screen } from "@testing-library/react";
import ProductForm from "./ProductForm";


describe("ProductForm", () => {
  it("muestra campos del formulario", () => {
    render(<ProductForm />);
    expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Descripción")).toBeInTheDocument();
  });
});