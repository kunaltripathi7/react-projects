import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import AppLayout from "./AppLayout";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
