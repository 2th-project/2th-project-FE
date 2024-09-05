import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import Header from "./components/Header";
import Main from "./pages/main/Main";
import FAQ from "./pages/community/FAQ";
import BulletinBoard from "./pages/community/BulletinBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "community/*",
        element: <Community />,
        children: [
          {
            path: "bulletin-board",
            element: <BulletinBoard />,
          },
          {
            path: "faq",
            element: <FAQ />,
          },
          {
            path: "*",
            element: <BulletinBoard />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
