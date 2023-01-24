import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Main from "./layout/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("tshirts.json"),
          element: <Home></Home>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/grandpa",
          element: <GrandPa></GrandPa>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
