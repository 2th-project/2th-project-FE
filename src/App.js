import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import BulletinBoard from "./pages/community/BulletinBoard";
import FAQ from "./pages/community/FAQ";
import CreatePost from "./pages/community/CreatePost";
import Post from "./pages/community/Post";
import Sign from "./pages/sign/Sign";
import Login from "./pages/login/Login";
import HeaderLayout from "./pages/main/HeaderLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "community/*",
        element: <Community />,
        children: [
          {
            path: "board",
            element: <BulletinBoard />,
          },
          {
            path: "faq",
            element: <FAQ />,
          },
          {
            path: "board/create",
            element: <CreatePost />,
          },
          {
            path: "board/post",
            element: <Post />,
          },
          {
            path: "*",
            element: <BulletinBoard />,
          },
        ],
      },
      {
        path: "/sign",
        element: <Sign />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
