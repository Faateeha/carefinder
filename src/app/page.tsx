"use client";

import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";




export default function Home() {
  useEffect(() => {
    Aos.init({
        duration: 1000
    })
}, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="" data-aos="zoom-in">Home page</h1>
    </main>
  );
}
