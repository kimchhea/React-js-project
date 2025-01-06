import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "service",
        element: <h2>Service</h2>,
      },
      {
        path: "Accessories",
        element: <h2>Accessories</h2>,
      },
      {
        path: "About",
        element: <h2>About page</h2>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
