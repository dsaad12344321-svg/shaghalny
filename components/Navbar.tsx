import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">

      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          شغلنى
        </Link>

        <nav>

          <Link href="/clipping">
            Clipping
          </Link>

        </nav>

      </div>

    </header>
  );
}