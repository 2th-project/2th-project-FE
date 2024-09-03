import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import Home from "./pages/main/Home";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      { path: "community", element: <Community /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
