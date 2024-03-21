import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeLayout from "../pages/HomeLayout";
import Error from "../pages/Error";
import SinglePageError from "../pages/SinglePageError";
import Landing from "../pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
