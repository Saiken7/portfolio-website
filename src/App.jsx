import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
