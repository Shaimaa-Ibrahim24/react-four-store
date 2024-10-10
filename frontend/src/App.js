import Home from "./pages/Home/Home";
import Cart from "./pages/Create/Cart.jsx"
import Root from "./pages/Root.jsx"
import Prodetails from "./pages/Details/Prodetails.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="pro-details/:id" element={<Prodetails />} />
      {/* ... etc. */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
