import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { faqs, resourceGroups, tools } from "@/data/site";
import learningImg from "@/assets/journey-learning.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Music Resources HeartBeat Musicals & Classes" },
      {
        name: "description",
        content:
          "Guitar tabs, chords, practice material, songs and answers to common questions from HeartBeat Musicals & Classes plus music tools coming soon.",
      },
      { property: "og:title", content: "Music Resources by Us" },
      {
        property: "og:description",
        content: "Tabs, chords, practice material and songs from HeartBeat Musicals & Classes.",
      },
    ],
  }),
  component: Resources,
});

const anchors: Record<string, string> = {
  "Guitar Tabs": "tabs",
  Chords: "chords",
  "Practice Material": "practice",
  Songs: "songs",
};

function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Things to take home between classes."
        intro="A shelf of material students use to keep practising. It's small for now and grows as we write things down."
      />

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="divide-y divide-border border-y border-border">
            {resourceGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 70}>
                <div id={anchors[g.title]} className="grid gap-4 py-9 lg:grid-cols-12">
                  <h2 className="font-display text-2xl lg:col-span-4">{g.title}</h2>
                  <div className="lg:col-span-8">
                    <p className="text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      {g.items.map((it) => (
                        <li key={it} className="before:mr-2 before:content-['—']">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-oatmeal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Tools</p>
              <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
                Two small tools, in the works.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Neither is available yet. They'll appear here when they're ready to use.
              </p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {tools.map((t) => (
                  <li key={t.name} className="py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <p className="font-display text-xl">{t.name}</p>
                      <span className="text-xs uppercase tracking-[0.2em] text-terracotta">
                        {t.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
              <img
                src={learningImg}
                alt="Hands at a piano with sheet music"
                width={1600}
                height={1104}
                loading="lazy"
                className="w-full rounded-3xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Questions &amp; Answers</p>
            <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">
              The things people ask before joining.
            </h2>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className="grid gap-3 py-7 lg:grid-cols-12">
                  <p className="font-display text-xl lg:col-span-5">{f.q}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-7">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link to="/contact" className="link-underline text-sm text-terracotta">
              Something else on your mind? Just Contact Us→
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
