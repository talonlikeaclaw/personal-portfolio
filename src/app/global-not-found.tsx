/* eslint-disable @next/next/no-html-link-for-pages -- the exported 404 has to recover without the app router or client JS */
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <title>Page not found | Talon Dunbar</title>
        <main className="flex min-h-screen flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-lg">
            <a
              href="/en/"
              className="font-mono text-xl font-bold text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:text-3xl"
            >
              talonlikeaclaw
            </a>

            <div className="mt-8 rounded-lg border border-border bg-card p-6 sm:p-8">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-accent">
                404
              </p>
              <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Page not found
              </h1>
              <p className="mt-4 leading-relaxed text-muted">
                This address does not point to anything on this site. It may have
                moved, or the link was mistyped.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="/en/"
                  className="rounded-lg border border-accent bg-accent/10 px-6 py-3 text-center font-mono font-medium text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  Back to home
                </a>
                <a
                  href="/en/#projects"
                  className="rounded-lg border border-border bg-background/40 px-6 py-3 text-center font-mono font-medium text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  Browse the work
                </a>
              </div>
            </div>

            <p
              lang="fr"
              className="mt-6 text-sm leading-relaxed text-muted"
            >
              Page introuvable. Cette adresse ne correspond à aucune page —{" "}
              <a
                href="/fr/"
                className="text-accent underline underline-offset-4 transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                retournez à l&apos;accueil en français
              </a>
              .
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
