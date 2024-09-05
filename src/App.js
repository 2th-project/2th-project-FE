import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from "./pages/community/Community";
import FAQ from "./pages/community/FAQ";
import PostList from "./pages/community/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Community />,
    children: [
      {
        path: "/post-list",
        element: <PostList />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "*", // 기본 경로 설정
        element: <PostList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
