import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Error from "./routes/Error";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Contato from "./routes/Contato";
import Integrantes from "./routes/Integrantes";
import Cadastro from "./routes/Cadastro";
import Login from "./routes/Login";
import Logado from "./routes/Logado";
import Quiz from "./routes/Quiz";
import Editar from "./routes/Editar";
import Deletar from "./routes/Deletar";
import Resultado from "./routes/Resultado";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contato", element: <Contato /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "login", element: <Login /> },
      { path: "logado", element: <Logado /> },
      { path: "quiz", element: <Quiz /> },
      { path: "editar", element: <Editar /> },
      { path: "deletar", element: <Deletar /> },
      { path: "resultado", element: <Resultado /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
