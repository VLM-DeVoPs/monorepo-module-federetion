import { App } from "@/components/App/App";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/admin/first",
        element: (
          <Suspense fallback={"Loading..."}>
            <h1 style={{ color: "blue" }}>... FIRST ...</h1>
          </Suspense>
        ),
      },
    ],
  },
];
export const Router = createBrowserRouter(routes);
export default routes;
