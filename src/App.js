import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import Sign from "./pages/sign/Sign";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sign",
      element: <Sign />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Community />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
