import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import FAQ from "./pages/community/FAQ";
import BulletinBoard from "./pages/community/BulletinBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Community />,
    children: [
      {
        path: "/bulletin-board",
        element: <BulletinBoard />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "*",
        element: <BulletinBoard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
