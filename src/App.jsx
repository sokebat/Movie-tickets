import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Layout,
  Home,
  Movies,
  Concerts,
  Eventdetails,
  Order,
} from "./components/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/event-detail/:id" element={<Eventdetails />} />
      <Route path="/concerts" element={<Concerts />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/order" element={<Order />} />

      {/* <Route path="/*" element={ } /> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
