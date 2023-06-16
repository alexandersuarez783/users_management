import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Users } from "./components/Users";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
];

export default AppRoutes;
