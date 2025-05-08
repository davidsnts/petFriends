import { createBrowserRouter } from "react-router";
import "./App.css";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export { router };
