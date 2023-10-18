"use client";

import About from "./pages/about/page";
import Gallery from "./pages/gallery/page";
import Page from "./pages/home/page";

export default function Home() {
  return (
    <main className=" min-h-screen w-full items-center bg-black ">
      <Page />
      <Gallery />
      <About />
    </main>
  );
}
