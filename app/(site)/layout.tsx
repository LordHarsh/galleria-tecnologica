import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galleria Technologica",
  description: "Generated by Nextjs + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all our pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className + " max-w-3xl mx-auto py-10 px-5"}>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="md:text-3xl lg:text-4xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Galleria Tecnologica
          </Link>
          <div className="flex items-center gap-5 text-sm text-grey-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20"> {children}</main>
      </body>
    </html>
  );
}
