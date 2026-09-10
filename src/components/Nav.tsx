import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const light = overHero && !scrolled;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled ? "px-3 pt-3 sm:px-6 sm:pt-4" : "px-0 pt-0",
      ].join(" ")}
    >
      <nav
        className={[
          "mx-auto flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "max-w-5xl rounded-full border border-border/70 bg-background/72 px-5 py-2.5 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)] backdrop-blur-md"
            : "max-w-none border border-transparent px-5 py-6 sm:px-10",
          light ? "text-onwarm" : "text-foreground",
        ].join(" ")}
      >
        <Link
          to="/"
          className="font-display text-lg tracking-tight sm:text-xl"
          aria-label={`${site.shortName} home`}
        >
          <span className="font-medium">Heart</span>
          <span className="opacity-70">Beat</span>
          {/* <span className="ml-2 align-middle text-[0.6rem] tracking-[0.3em] opacity-60">
            HBMC
          </span> */}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...("hash" in l && l.hash ? { hash: l.hash } : {})}
              className="link-underline text-sm tracking-wide opacity-85 transition-opacity hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={[
              "rounded-full px-5 py-2 text-sm tracking-wide transition-colors",
              light
                ? "bg-onwarm/90 text-espresso hover:bg-onwarm"
                : "bg-espresso text-onwarm hover:bg-terracotta",
            ].join(" ")}
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          <span className="block h-px w-6 bg-current" />
          <span className="mt-1.5 block h-px w-6 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="mx-3 mt-2 rounded-3xl border border-border bg-background/95 p-6 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                {...("hash" in l && l.hash ? { hash: l.hash } : {})}
                className="font-display text-2xl text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-espresso px-5 py-3 text-center text-sm tracking-wide text-onwarm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
