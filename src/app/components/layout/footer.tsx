import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className="mb-2 text-2xl font-bold sm:mb-0 ">GlowUp</h1>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center gap-3 opacity-60 sm:mb-0">
            <li>
              <Link href={"/"} className="mr-4 hover:underline md:mr-6">Home</Link>
            </li>
            <li>
              <Link href={"/"} className="mr-4 hover:underline md:mr-6">Features </Link>
            </li>
            <li>
              <Link href={"/"} className="mr-4 hover:underline md:mr-6">Overview</Link>
            </li>
            <li>
              <Link href={"/"} className="mr-4 hover:underline md:mr-6">Dashboard</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 text-muted-foreground sm:mx-auto" />
        <div className="flex items-center justify-center">
          <div className="block text-sm text-muted-foreground sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a target="_blank" href="/" className="hover:underline">
              GlowUp App
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
