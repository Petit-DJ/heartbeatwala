import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { branches, site } from "@/data/site";
import roomImg from "@/assets/about-room.jpg";
import teacherImg from "@/assets/journey-teacher.jpg";
import communityImg from "@/assets/journey-community.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HeartBeat Musicals & Classes" },
      {
        name: "description",
        content:
          "The story behind HeartBeat Musicals & Classes: how we teach, what we believe about learning music, and the community around it.",
      },
      { property: "og:title", content: "About HeartBeat Musicals & Classes" },
      {
        property: "og:description",
        content: "How we teach, and the community that grew around it.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A music school that grew out of a room and a few students."
        intro="HeartBeat has never tried to be an institute. It's a teaching space that kept getting busier because people liked being there."
      />

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <img
              src={roomImg}
              alt="An HBMC teaching room in warm afternoon light"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[45vh] w-full rounded-3xl object-cover sm:h-[65vh]"
            />
          </Reveal>
          <Reveal delay={100} className="mt-12 grid gap-8 lg:grid-cols-12">
            <p className="eyebrow lg:col-span-3">Our story</p>
            <div className="max-w-2xl lg:col-span-8 lg:col-start-5">
              <p className="text-lg leading-relaxed">
                What began as a handful of weekly lessons became three branches, a
                Sunday tradition and a long list of students who still drop in years
                later.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We've kept the same shape throughout: small classes, unhurried teaching,
                and instruments always within reach. Students learn from their teacher,
                but just as much from the person practising in the next room.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-oatmeal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <img
                src={teacherImg}
                alt="A teacher guiding a student at HBMC"
                width={1280}
                height={1600}
                loading="lazy"
                className="w-full rounded-3xl object-cover"
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow">Our teachers</p>
              <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
                Taught by people who still play.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Our classes are taken by working musicians who teach the way they'd
                want to be taught: patiently, with real songs, and without making anyone
                feel behind.
              </p>
              {/* <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Individual teacher profiles will be added here once HBMC shares them.
              </p> */}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Teaching philosophy</p>
            <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
              Four things we hold to.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="space-y-8 lg:col-span-6">
              {[
                {
                  t: "Play from the first class",
                  d: "Theory follows sound, not the other way round. Everyone leaves the first class having played something.",
                },
                {
                  t: "No two students learn alike",
                  d: "Pace, material and practice routines are adjusted per person rather than pushed through a fixed syllabus.",
                },
                {
                  t: "Practice should be enjoyable",
                  d: "We'd rather you practise fifteen honest minutes a day than dread an hour.",
                },
                {
                  t: "Music is social",
                  d: "Playing with others is part of learning, not a reward reserved for advanced students.",
                },
              ].map((p) => (
                <div key={p.t} className="border-t border-border pt-5">
                  <h3 className="font-display text-xl">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-2 gap-4 lg:col-span-6">
              <img
                src={g1}
                alt="A student practising guitar"
                width={1000}
                height={1300}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
              <img
                src={g5}
                alt="A student practising flute"
                width={1000}
                height={1300}
                loading="lazy"
                className="mt-10 h-full w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-oatmeal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <img
              src={communityImg}
              alt="HBMC students and teachers together with instruments"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="mt-10 max-w-2xl">
            <p className="eyebrow">Community</p>
            <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
              The reason most people stay.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Sunday sessions, recitals, and the ordinary business of waiting for your
              class while someone else finishes theirs that's where the 'HeartBeat' feeling
              actually comes from.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Find us</p>
              <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
                Three branches, one Family.
              </h2>
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className="link-underline">
                    {site.email}
                  </a>
                </p>
              </div>
              <Link to="/contact" className="link-underline mt-6 inline-block text-sm text-terracotta">
                Full contact details →
              </Link>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <div className="divide-y divide-border border-y border-border">
                {branches.map((b) => (
                  <div key={b.id} className="py-6">
                    <h3 className="font-display text-xl">{b.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.address}</p>
                  </div>
                ))}
              </div>
              {/* <p className="mt-4 text-xs text-muted-foreground">
                Addresses are placeholders.
              </p> */}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
