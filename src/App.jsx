import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/contact";
import NotFound from "./components/notfound/NotFound";
import Cart from "./pages/cart/Cart";
import WishList from "./pages/wishlist/WishList";
import ProductDetails from "./pages/productDetails/productDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/shop/:id",
          element: <ProductDetails />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
      <ToastContainer autoClose={3000} theme="light" />
      <RouterProvider router={routes} />;
    </>
  );
}

export default App;
