import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Requerido"),
  description: Yup.string().required("Requerido"),
  price: Yup.number().positive("Debe ser positivo").required("Requerido"),
  category: Yup.string().required("Requerido"),
  condominium: Yup.string().required("Requerido"),
});
