"use client";
import React from "react";
import MensCard from "./mens/mens";
import WomensCard from "./women/womens";

export default function ThreeDCardDemo() {
  return (
    <div className="flex flex-row justify-center gap-5 w-full">
      <MensCard/>
      <WomensCard/>
    </div>
  );
}
