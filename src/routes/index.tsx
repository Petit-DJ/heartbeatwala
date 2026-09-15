import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Constellation } from "@/components/Constellation";
import {
  instrumentsLine,
  popularCourses,
  site,
  stats,
} from "@/data/site";
import heroImg from "@/assets/hero-guitarist.jpg";
import teacherImg from "@/assets/journey-teacher.jpg";
import learningImg from "@/assets/journey-learning.jpg";
import stageImg from "@/assets/journey-stage.jpg";
import masterclassImg from "@/assets/masterclass.jpg";
import guitarImg from "@/assets/course-guitar.jpg";
import pianoImg from "@/assets/course-piano.jpg";
import drumsImg from "@/assets/course-drums.jpg";
import fluteImg from "@/assets/course-flute.jpg";
import aboutImg from "@/assets/index-about.jpeg";
import imprImg from "@/assets/index-improvement.jpeg";
import community from "@/assets/index-community.jpeg"
import eve2 from "@/assets/index-ord-eve-2.jpeg"
import eve3 from "@/assets/index-ord-eve3.jpeg"

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HeartBeat Musicals & Classes: Find Your Sound" },
      {
        name: "description",
        content:
          "HeartBeat Musicals & Classes is a warm music community teaching guitar, piano, keyboard, drums and flute across three branches. Classes for beginners to advanced players.",
      },
      { property: "og:title", content: "HeartBeat Musicals & Classes Find Your Sound" },
      {
        property: "og:description",
        content:
          "A music school built around teaching, practice, performance and belonging.",
      },
    ],
  }),
  component: Home,
});

const courseImages: Record<string, string> = {
  guitar: guitarImg,
  piano: pianoImg,
  drums: drumsImg,
  flute: fluteImg,
};

function Home() {
  return (
    <>
      <Hero />
      <AtAGlance />
      <Intro />
      <Journey />
      <Masterclass />
      <Courses />
      <Community />
      <StudentConstellation />
      <JoinCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-ink text-onwarm">
      <img
        src={heroImg}
        alt="A guitarist playing under a warm hanging lamp in a dark music room"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-95 sm:object-[75%_center]"
      />
      {/* Cinematic legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent sm:via-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/30 sm:via-transparent" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-28 pt-40 sm:justify-center sm:px-10 sm:pb-44">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-onwarm/60">HeartBeat Musicals &amp; Classes</p>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">
            Find your sound.
            <span className="block italic opacity-80">Then follow it.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-onwarm/75">
            Guitar, piano, drums, flute and more taught patiently, in a room
            where beginners and old hands sit side by side.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/classes"
              className="rounded-full bg-onwarm px-7 py-3.5 text-sm tracking-wide text-espresso transition-colors hover:bg-brass"
            >
              Explore Classes
            </Link>
            <Link
              to="/"
              hash="journey"
              className="rounded-full border border-onwarm/35 px-7 py-3.5 text-sm tracking-wide text-onwarm transition-colors hover:bg-onwarm/10"
            >
              Our Journey
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Blend into the warm editorial sections below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream" />
    </section>
  );
}

function AtAGlance() {
  return (
    <section className="bg-cream pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="relative z-10 -mt-44 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="rounded-[28px] border border-border/60 bg-card px-8 py-10 shadow-[0_18px_50px_-24px_color-mix(in_oklab,var(--espresso)_38%,transparent)]"
            >
              <p className="font-display text-6xl leading-none text-espresso">
                {s.value}
              </p>
              <p className="eyebrow mt-5 text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
          <Reveal
            delay={270}
            className="rounded-[28px] bg-espresso px-8 py-10 text-onwarm shadow-[0_18px_50px_-24px_color-mix(in_oklab,var(--ink)_55%,transparent)]"
          >
            <p className="eyebrow text-onwarm/55">What we teach</p>
            <p className="mt-5 font-display text-xl leading-snug text-onwarm/95">
              {instrumentsLine}
            </p>
          </Reveal>
        </div>
        {/* <p className="mt-5 text-xs text-muted-foreground">
          Figures above are placeholders and will be updated with HBMC's actual numbers.
        </p> */}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-cream pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">About HeartBeat</p>
            <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">
              A room where music
              <br />
              is learnt together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              HeartBeat Musicals &amp; Classes started as a small teaching space and
              grew, slowly, into something closer to a family. People arrive to learn
              an instrument and ... somehow end up staying for the company.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Classes are unhurried. Teachers sit beside you rather than in front of
              you. Progress is measured in the songs you can suddenly play, not in
              certificates.
            </p>
            <Link
              to="/about"
              className="link-underline mt-2 inline-block text-sm tracking-wide text-terracotta"
            >
              More about us →
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative lg:col-span-7">
            <img
              src={aboutImg}
              alt="A sunlit HBMC music room with a piano, guitar and drum kit"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[400px]  w-full rounded-3xl object-cover"
            />
            <img
              src={g1}
              alt="A student practising guitar by a window"
              width={1000}
              height={1300}
              loading="lazy"
              className="absolute -bottom-10 -left-6 hidden w-40 rounded-2xl border-4 border-cream object-cover shadow-xl sm:block lg:-left-16 lg:w-52"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="bg-oatmeal py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Journey</p>
          <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">
            How a student becomes a musician at HeartBeat.
          </h2>
        </Reveal>

        {/* Teacher */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img
              src={teacherImg}
              alt="A teacher guiding a student's hand on the guitar fretboard"
              width={1280}
              height={1600}
              loading="lazy"
              className="w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">One The Teacher</p>
            <h3 className="mt-4 text-3xl leading-snug sm:text-4xl">
              It begins with someone who listens first.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Before anything is taught, a teacher works out how you learn what you
              want to play, how much time you have, where your hands get stuck. The
              lesson is shaped around you rather than a syllabus.
            </p>
          </Reveal>
        </div>

        {/* Learning — full width photograph */}
        <div className="mt-24">
          <Reveal>
            <img
              src={learningImg}
              alt="Hands playing an upright piano in warm afternoon light"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[46vh] w-full rounded-3xl object-cover sm:h-[62vh]"
            />
          </Reveal>
          <Reveal delay={100} className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="eyebrow lg:col-span-3">Two The Learning</p>
            <div className="lg:col-span-7 lg:col-start-5">
              <h3 className="text-3xl leading-snug sm:text-4xl">
                The slow, satisfying part.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Scales that feel awkward, then don't. A chord change that takes a week
                and then takes a second. Most of learning music happens quietly, and
                our class is built to make that stretch enjoyable rather than discouraging.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Improvement — asymmetric two-image */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Three The Improvement</p>
            <h3 className="mt-4 text-3xl leading-snug sm:text-4xl">
              One day you stop counting and just play.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Confidence arrives before mastery does. Students who could barely hold an
              instrument start accompanying friends, writing their own parts, and
              teaching the person who joined after them.
            </p>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-5 gap-4 lg:col-span-6">
            <img
              src={imprImg}
              alt="Two students practising together on keyboard and guitar"
              width={1400}
              height={1000}
              loading="lazy"
              className="col-span-3 h-full w-full rounded-2xl object-cover"
            />
            <img
              src={g3}
              alt="A drummer's hands on a snare drum"
              width={1000}
              height={1000}
              loading="lazy"
              className="col-span-2 mt-10 h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        {/* Stage */}
        <div className="mt-24 overflow-hidden rounded-3xl bg-ink text-onwarm">
          <Reveal className="relative">
            <img
              src={stageImg}
              alt="A student performing on a warmly lit stage"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[52vh] w-full object-cover opacity-90 sm:h-[68vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
              <p className="eyebrow text-onwarm/55">Four The Stage</p>
              <h3 className="mt-4 max-w-xl text-3xl leading-snug sm:text-4xl">
                Then there's a night when the room goes quiet for you.
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-onwarm/70">
                Recitals, small gigs and community evenings give every student a reason
                to prepare something properly and somewhere to play it.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Community */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <img
              src={community}
              alt="Students and teachers sitting together with instruments, laughing"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="eyebrow">Five The Community</p>
            <h3 className="mt-4 text-3xl leading-snug sm:text-4xl">
              And the part nobody expects: belonging.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Students stay in touch long after their course ends. They come back for
              Sunday sessions, help at performances, and bring their friends. That's the
              part of HeartBeat we're most protective of.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Masterclass() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-onwarm sm:py-36">
      <img
        src={masterclassImg}
        alt="Musicians gathered in a dim room around a single warm lamp"
        width={1920}
        height={1104}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="glass-panel ml-auto max-w-xl rounded-3xl p-8 sm:p-12">
          <p className="eyebrow text-onwarm/55">Every Sunday</p>
          <h2 className="mt-5 text-4xl leading-[1.08] text-onwarm sm:text-5xl">
            The Sunday Masterclass.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-onwarm/80">
            One session a week where everyone learns in the same room. Students bring
            what they've been working on, play it in front of others, and pick up more
            from each other than a private lesson could ever cover.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-onwarm/75">
            <li className="border-t border-onwarm/15 pt-3">Held every Sunday</li>
            <li className="border-t border-onwarm/15 pt-3">Open to all students</li>
            <li className="border-t border-onwarm/15 pt-3">
              Sometimes open to visitors from outside HeartBeat
            </li>
          </ul>
          <Link
            to="/contact"
            className="link-underline mt-8 inline-block text-sm tracking-wide text-brass"
          >
            Ask about joining a Sunday →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-lg">
            <p className="eyebrow">Popular Courses</p>
            <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">
              Start with what you're drawn to.
            </h2>
          </div>
          <Link
            to="/classes"
            className="link-underline text-sm tracking-wide text-terracotta"
          >
            Explore All Classes →
          </Link>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:px-10 lg:mx-auto lg:max-w-6xl">
        {popularCourses.map((c, i) => (
          <Reveal
            key={c.id}
            delay={i * 80}
            className="w-[72vw] shrink-0 snap-start sm:w-[46vw] lg:w-auto lg:flex-1"
          >
            <figure className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={courseImages[c.id]}
                  alt={c.name}
                  width={1000}
                  height={1300}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-5">
                <h3 className="font-display text-2xl">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.blurb}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 sm:px-10">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          These are the instruments students ask for most, but we teach more than
          this. If you don't see yours,{" "}
          <Link to="/contact" className="link-underline text-terracotta">
            get in touch
          </Link>{" "}
          and we'll tell you what's running.
        </p>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="bg-oatmeal py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Inside The Classrooms</p>
          <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">
            Ordinary evenings, mostly.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12">
          <Reveal className="col-span-2 lg:col-span-7">
            <img
              src={eve3}
              alt="A small audience applauding at an HBMC recital"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={90} className="lg:col-span-5">
            <img
              src={g5}
              alt="A student practising flute by a window"
              width={1000}
              height={1300}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={210} className="col-span-2 lg:col-span-8">
            <img
              src={g2}
              alt="Two students practising together"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4">
            <img
              src={eve2}
              alt="Hbmc teacher"
              width={1000}
              height={1000}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StudentConstellation() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-onwarm sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-onwarm/45">What people say</p>
          <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
            A little bit of HeartBeat,
            <span className="block italic opacity-75">
              from the people who make it.
            </span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6 sm:mt-28 sm:px-10">
        <Constellation />
      </div>

      <div className="mx-auto mt-24 max-w-6xl px-6 sm:mt-32 sm:px-10">
        <Reveal className="max-w-lg">
          <p className="font-display text-2xl leading-snug sm:text-3xl">
            Every student starts somewhere.
            <span className="block italic opacity-70">
              Maybe yours starts here.
            </span>
          </p>
          <Link
            to="/classes"
            className="link-underline mt-8 inline-block text-sm tracking-wide text-onwarm/80"
          >
            Explore Classes →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function JoinCta() {
  return (
    <section className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="eyebrow">Join {site.shortName}</p>
          <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">
            Ready to start your musical journey?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Come and sit in on a class, or call us and tell us what you'd like to play.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/classes"
              className="rounded-full bg-espresso px-7 py-3.5 text-sm tracking-wide text-onwarm transition-colors hover:bg-terracotta"
            >
              Explore Classes
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-7 py-3.5 text-sm tracking-wide transition-colors hover:bg-oatmeal"
            >
              Contact us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
