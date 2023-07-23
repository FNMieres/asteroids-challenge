import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import SearchAsteroids from "./asteroids";
import AsteroidDetail from "./asteroid-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <SearchAsteroids /> },
      {
        path: "asteroids/:id",
        element: <AsteroidDetail />,
      },
    ],
  },
]);

export default router;
