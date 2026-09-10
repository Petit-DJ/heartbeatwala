import { Link } from "@tanstack/react-router";
import { branches, site, tools } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-oatmeal">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="max-w-md">
          <p className="font-display text-3xl leading-tight">
            HeartBeat Musicals <span className="opacity-60">&amp;</span> Classes
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A place to learn music slowly, properly and in good company.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 text-sm sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/" className="link-underline text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/classes" className="link-underline text-muted-foreground hover:text-foreground">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/" hash="journey" className="link-underline text-muted-foreground hover:text-foreground">
                  Journey
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-underline text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Learn</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/resources" className="link-underline text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/resources" hash="chords" className="link-underline text-muted-foreground hover:text-foreground">
                  Chords
                </Link>
              </li>
              <li>
                <Link to="/resources" hash="tabs" className="link-underline text-muted-foreground hover:text-foreground">
                  Tabs
                </Link>
              </li>
              <li>
                <Link to="/resources" hash="practice" className="link-underline text-muted-foreground hover:text-foreground">
                  Practice Material
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Tools</p>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {tools.map((t) => (
                <li key={t.name}>
                  {t.name}
                  <span className="ml-2 text-xs uppercase tracking-widest text-terracotta">
                    Soon
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Locations</p>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {branches.map((b) => (
                <li key={b.id}>{b.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline hover:text-foreground">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-underline hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4 pt-1">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} className="link-underline hover:text-foreground">
                    {s.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HeartBeat Musicals &amp; Classes</p>
          {/* <p>Contact details, addresses and fees shown are placeholders.</p> */}
        </div>
      </div>
    </footer>
  );
}
