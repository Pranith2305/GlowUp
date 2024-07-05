"use client";
import React from "react";
import Link from "next/link";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";
export function Hero() {
  return (
    <>
      <section className="space-y-8 pb-12 pt-8 w-full h-full md:space-y-16 md:pt-10 lg:py-32 items-center">
  <div className="container flex flex-col items-center gap-4 text-center">
    <Link
      href=""
      className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium text-center"
      target="_blank"
    >
      Create your own fasion!
    </Link>

    <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
      What's your vibe?
    </h1>

    <p className="max-w-[42rem] leading-normal text-gray-700 sm:text-xl sm:leading-8">
      Ditch the fashion stress and slay every day with GlowUp
    </p>

    <div className="flex gap-4 pt-4">
      <Link href="/uploadphoto">
        <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get Started
          </span>
        </button>
      </Link>
    </div>
  </div>
</section>

    </>
  );
}
