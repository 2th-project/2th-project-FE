import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sign",
      element: <Sign />,
    },
    {
      path: "/",
      element: <Community />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
