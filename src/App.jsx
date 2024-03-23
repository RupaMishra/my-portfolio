import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Landing, SinglePageError } from "./pages";

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
