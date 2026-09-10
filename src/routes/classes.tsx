import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import {
  branches,
  courseLevels,
  fees,
  feesNote,
  levelsNote,
  popularCourses,
  scheduleNote,
  schedules,
  site,
} from "@/data/site";
import guitarImg from "@/assets/course-guitar.jpg";
import pianoImg from "@/assets/course-piano.jpg";
import drumsImg from "@/assets/course-drums.jpg";
import fluteImg from "@/assets/course-flute.jpg";
import roomImg from "@/assets/about-room.jpg";
import galleryImg from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes, Timings & Fees HeartBeat Musicals & Classes" },
      {
        name: "description",
        content:
          "Courses, levels, class timings, branches and fees at HeartBeat Musicals & Classes. Guitar, piano, keyboard, drums, flute and vocals for beginners to advanced learners.",
      },
      { property: "og:title", content: "Classes at HeartBeat Musicals & Classes" },
      {
        property: "og:description",
        content: "Courses, levels, timings, locations and fees at HeartBeat Musicals & Classes.",
      },
    ],
  }),
  component: Classes,
});

const courseImages: Record<string, string> = {
  guitar: guitarImg,
  piano: pianoImg,
  drums: drumsImg,
  flute: fluteImg,
};

function Classes() {
  return (
    <>
      <PageHeader
        eyebrow="Classes"
        title="Everything practical, in one place."
        intro="What we teach, at which level, on which days, where, and for how much."
      />

      <Courses />
      <Levels />
      <Timings />
      <Locations />
      <Fees />
      <WhoCanJoin />
      <Certificates />
      <Enquiry />
    </>
  );
}

function Courses() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Courses</p>
          <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
            Our most requested instruments.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {popularCourses.map((c, i) => (
            <Reveal
              key={c.id}
              delay={40}
              className={`grid items-center gap-8 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
            >
              <div className="lg:col-span-5 lg:[direction:ltr]">
                <img
                  src={courseImages[c.id]}
                  alt={c.name}
                  width={1000}
                  height={1300}
                  loading="lazy"
                  className="aspect-[5/4] w-full rounded-3xl object-cover"
                />
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:[direction:ltr]">
                <h3 className="font-display text-3xl">{c.name}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {c.blurb}
                </p>
                <p className="mt-5 text-sm text-muted-foreground">
                  <span className="eyebrow">Levels</span>
                  <span className="ml-3">{c.levels.join(" · ")}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10">
          <h3 className="font-display text-2xl">
            Not sure whether we offer your instrument?
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We teach more than the instruments listed above, and what's running
            changes by branch. Call us and we'll tell you straight away.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="rounded-full bg-espresso px-6 py-3 text-sm tracking-wide text-onwarm transition-colors hover:bg-terracotta"
            >
              {site.phone}
            </a>
            <Link to="/contact" className="link-underline text-sm text-terracotta">
              Contact HeartBeat Musicals & Classes →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Levels() {
  return (
    <section className="bg-oatmeal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Course Levels</p>
            <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
              Three levels, one pace: yours.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{levelsNote}</p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            <dl className="divide-y divide-border border-y border-border">
              {courseLevels.map((l) => (
                <div key={l.name} className="grid gap-2 py-7 sm:grid-cols-4 sm:gap-6">
                  <dt className="font-display text-xl sm:col-span-1">{l.name}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground sm:col-span-3">
                    {l.text}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timings() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Class Timings</p>
          <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
            When each instrument is taught.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {scheduleNote}
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {schedules.map((s, i) => (
            <Reveal
              key={s.instrument}
              delay={i * 60}
              className="border-t border-border pt-8"
            >
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <h3 className="font-display text-2xl">{s.instrument}</h3>
                  {s.note && (
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {s.note}
                    </p>
                  )}
                </div>
                <div className="space-y-6 lg:col-span-9">
                  {s.classTypes.map((ct) => (
                    <div key={ct.type}>
                      <p className="eyebrow">{ct.type}</p>
                      <div className="mt-3 space-y-3">
                        {ct.slots.map((slot, si) => (
                          <div
                            key={si}
                            className="grid gap-2 rounded-2xl bg-oatmeal/70 px-5 py-4 sm:grid-cols-2 sm:gap-6"
                          >
                            <p className="text-sm text-foreground">
                              {slot.days.join(" · ")}
                            </p>
                            <ul className="text-sm text-muted-foreground">
                              {slot.times.map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section className="bg-oatmeal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Locations</p>
          <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">Three branches.</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img
              src={roomImg}
              alt="Inside an HBMC teaching room"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <div className="divide-y divide-border border-y border-border">
              {branches.map((b, i) => (
                <Reveal key={b.id} delay={i * 80} className="py-7">
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.address}</p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                  <a
                    href={b.mapUrl}
                    className="link-underline mt-4 inline-block text-sm tracking-wide text-terracotta"
                  >
                    View on Google Maps →
                  </a>
                </Reveal>
              ))}
            </div>
            {/* <p className="mt-5 text-xs text-muted-foreground">
              Addresses and map links are placeholders.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Fees() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Fees</p>
            <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
              Clear, once confirmed.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{feesNote}</p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            <dl className="divide-y divide-border border-y border-border">
              {fees.map((f) => (
                <div key={f.plan} className="flex flex-wrap items-baseline justify-between gap-3 py-6">
                  <dt className="text-base">{f.plan}</dt>
                  <dd className="text-right">
                    <span className="font-display text-xl text-terracotta">{f.amount}</span>
                    <span className="ml-3 text-xs uppercase tracking-widest text-muted-foreground">
                      {f.note}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhoCanJoin() {
  return (
    <section className="bg-oatmeal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Who can join</p>
            <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
              Anyone who wants to play.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Complete beginners who've never held an instrument, intermediate learners
              who want structure, and advanced players sharpening technique all learn
              here often in the same week, sometimes in the same room.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6">
            <img
              src={galleryImg}
              alt="Students practising together at HBMC"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="rounded-3xl border border-dashed border-border p-8 sm:p-12">
          <p className="eyebrow text-terracotta">Coming Soon</p>
          <h2 className="mt-4 font-display text-3xl">Official Certificate Courses</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We are preparing formal certificate courses. They are not open for
            enrolment yet details will be published here once they are.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Enquiry() {
  return (
    <section className="bg-oatmeal py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <h2 className="text-3xl leading-[1.1] sm:text-5xl">
            Still deciding? Talk to us first.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Tell us your instrument, your level and the branch nearest to you, and we'll
            suggest where to begin.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-espresso px-7 py-3.5 text-sm tracking-wide text-onwarm transition-colors hover:bg-terracotta"
            >
              Contact US
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-border px-7 py-3.5 text-sm tracking-wide transition-colors hover:bg-cream"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
