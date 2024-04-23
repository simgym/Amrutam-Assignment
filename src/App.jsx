import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Errorpage from "./pages/Errorpage";
import RootLayout from "./pages/Root";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: <Page1 />,
        },
        { path: "/page2", element: <Page2 /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
