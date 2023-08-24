import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Root = lazy(() => import("./root"));
const SearchAsteroids = lazy(() => import("./asteroids"));
const AsteroidDetail = lazy(() => import("./asteroid-detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchAsteroids />
          </Suspense>
        ),
      },
      {
        path: "asteroids/:asteroidId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AsteroidDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
