import Image from "next/image";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-left">
          Project
        </h1>
        <p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-600 dark:text-gray-300">
          Start editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            src/app/page.tsx
          </code>{" "}
          to begin.
        </p>
      </main>

      <Footer />
    </div>
  );
}