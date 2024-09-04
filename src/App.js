import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import FreeBoard from "./pages/community/FreeBoard";
import FAQ from "./pages/community/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Community />,
    children: [
      {
        path: "free-board",
        element: <FreeBoard />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "*", // 기본 경로 설정
        element: <FreeBoard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
