"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("top-10 inset-x-0 max-w-auto mx-auto z-50 flex ", className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Home" ></MenuItem>
        </Link>
        <Link href={'/uploadImage'}>
        <MenuItem setActive={setActive} active={active} item="Upload Photo" ></MenuItem>
        </Link>
        <Link href={'/styleSuggestion'}>
        <MenuItem setActive={setActive} active={active} item="Style-Suggestions" ></MenuItem>
        </Link>
        <Link href={'/vr'}>
        <MenuItem setActive={setActive} active={active} item="Virtual Try-On" ></MenuItem>
        </Link>   
      </Menu>
    </div>
  );
}
