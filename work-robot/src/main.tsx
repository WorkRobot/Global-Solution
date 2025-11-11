import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Error from "./routes/Error";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import FAQ from "./routes/FAQ";
import Contato from "./routes/Contato";
import Integrantes from "./routes/Integrantes";
import Cadastro from "./routes/Cadastro";
import Logado from "./routes/Logado";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "faq", element: <FAQ /> },
      { path: "contato", element: <Contato /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "logado", element: <Logado /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
