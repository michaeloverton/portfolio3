import "./App.css";
import GlassFlower from "./three/GlassFlower";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import About from "./About";
import { MobileProvider } from "./layout/MobileProvider";
import { Suspense } from "react";
import Home2 from "./Home2";
import WeBecomeSomethingElse from "./projects/WeBecomeSomethingElse";
import PerfectWorld from "./projects/PerfectWorld";
import Metastasis from "./projects/Metastasis";
import Stream from "./Stream";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: (
  //     <div style={{ height: "200vh" }}>
  //       <Suspense>
  //         <GlassFlower />
  //       </Suspense>
  //       <Home />
  //     </div>
  //   ),
  // },
  {
    path: "/",
    element: (
      <div style={{ height: "200vh" }}>
        {/* <Suspense>
          <GlassFlower />
        </Suspense> */}
        <Home2 />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div style={{ height: "200vh" }}>
        {/* <Suspense>
          <GlassFlower />
        </Suspense> */}
        <About />
      </div>
    ),
  },
  {
    path: "/we-become-something-else",
    element: (
      <div style={{ height: "200vh" }}>
        {/* <Suspense>
          <GlassFlower />
        </Suspense> */}
        <WeBecomeSomethingElse />
      </div>
    ),
  },
  {
    path: "/perfect-world",
    element: (
      <div style={{ height: "200vh" }}>
        {/* <Suspense>
          <GlassFlower />
        </Suspense> */}
        <PerfectWorld />
      </div>
    ),
  },
  {
    path: "/metastasis",
    element: (
      <div style={{ height: "200vh" }}>
        {/* <Suspense>
          <GlassFlower />
        </Suspense> */}
        <Metastasis />
      </div>
    ),
  },
  {
    path: "/images",
    element: (
      <div style={{ height: "200vh" }}>
        {/* <Suspense>
          <GlassFlower />
        </Suspense> */}
        <Stream />
      </div>
    ),
  },
  // REDIRECT ALL BAD PATHS BACK TO HOME.
  {
    path: "*",
    element: (
      <Navigate replace to="/" />
    ),
  },
]);

export default function App() {
  return (
    <MobileProvider>
      <RouterProvider router={router} />
    </MobileProvider>
  );
}
