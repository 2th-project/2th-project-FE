import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import Header from "./components/Header";
import Main from "./pages/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Main /> },
      { path: "community", element: <Community /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
