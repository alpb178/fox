Aplicación construida con tecnologías modernas para la gestión de productos, autenticación con JWT y experiencia de usuario optimizada.



Tecnologías

Next.js 13/14 (App Router + TypeScript) – Framework React moderno

Formik + Yup – Manejo y validación de formularios

Axios – Cliente HTTP para consumo de APIs REST

JWT + Cookies – Autenticación segura

Styled Components / CSS Modules – Estilos modernos y aislados

React.memo, useMemo, useCallback – Optimización de componentes

Lazy Loading & Code Splitting – Carga eficiente de vistas

React Testing Library + Jest – Pruebas básicas de componentes

Vercel – Deploy en la nube con CI/CD automático

Instalación

Clona el repositorio:

git clone https://github.com/alpb178/fox.git
cd fox

Instala las dependencias:

npm install

Inicia un mock server (puedes usar json-server o tu backend):

npx json-server --watch db.json --port 3001

Inicia el servidor de desarrollo:

npm run dev

 Testing

Para correr los tests con Jest y React Testing Library:

npm run test

Test de ejemplo incluido en:__tests__/ProductForm.test.tsx
