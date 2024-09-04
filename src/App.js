import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import FreeBoard from "./pages/community/FreeBoard";
import FAQ from "./pages/community/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Community />, // Community를 부모로 설정
    children: [
      {
        path: "free-board",
        element: <FreeBoard />, // FreeBoard를 자식 라우트로 설정
      },
      {
        path: "faq",
        element: <FAQ />, // FAQ를 자식 라우트로 설정
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
