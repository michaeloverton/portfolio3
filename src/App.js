import "./App.css";
import GlassFlower from "./three/GlassFlower";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import { MobileProvider } from "./layout/MobileProvider";
import { Suspense } from "react";
import TheyShall from "./projects/TheyShallNotComeBack";
import PerfectCity from "./projects/PerfectCity";
import WeBecomeSomethingElse from "./projects/WeBecomeSomethingElse";
import Home2 from "./Home2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{ height: "200vh" }}>
        <Suspense>
          <GlassFlower />
        </Suspense>
        <Home />
      </div>
    ),
  },
  {
    path: "/home2",
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
        <Suspense>
          <GlassFlower />
        </Suspense>
        <About />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div style={{ height: "200vh" }}>
        <Suspense>
          <GlassFlower />
        </Suspense>
        <Projects />
      </div>
    ),
  },
  {
    path: "/projects/they-shall-not-come-back-virtual-reality",
    element: (
      <div style={{ height: "200vh" }}>
        <Suspense>
          <GlassFlower />
        </Suspense>
        <TheyShall />
      </div>
    ),
  },
  {
    path: "/projects/perfect-city-unreal-engine",
    element: (
      <div style={{ height: "200vh" }}>
        <Suspense>
          <GlassFlower />
        </Suspense>
        <PerfectCity />
      </div>
    ),
  },
  {
    path: "/projects/we-become-something-else-unreal-engine",
    element: (
      <div style={{ height: "200vh" }}>
        <Suspense>
          <GlassFlower />
        </Suspense>
        <WeBecomeSomethingElse />
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
