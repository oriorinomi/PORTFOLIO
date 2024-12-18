import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Accueil from "./components/Accueil";
import Cv from "./components/Cv";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Page />,
      children: [
        {
          index: true,
          element: <Accueil />,
        },
        {
          path: "cv",
          element: <Cv />,
        },
      ],
    },
  ],
  {
    basename: "/PORTFOLIO", // Indique que l'application est dans le sous-dossier PORTFOLIO
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
