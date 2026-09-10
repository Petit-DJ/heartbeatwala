import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { branches, site } from "@/data/site";
import galleryImg from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HeartBeat Musicals & Classes" },
      {
        name: "description",
        content:
          "Phone, email, social links and branch locations for HeartBeat Musicals & Classes.",
      },
      { property: "og:title", content: "Contact HeartBeat Musicals & Classes" },
      {
        property: "og:description",
        content: "Reach us by phone or email, or visit one of our three branches.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come by, or just call."
        intro="The quickest way to start is a phone call tell us the instrument and the branch nearest you."
      />

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <dl className="divide-y divide-border border-y border-border">
                <div className="py-7">
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="link-underline font-display text-3xl"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${site.email}`} className="link-underline font-display text-2xl">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="eyebrow">Social</dt>
                  <dd className="mt-3 flex flex-wrap gap-5 text-sm text-muted-foreground">
                    {site.socials.map((s) => (
                      <a key={s.label} href={s.href} className="link-underline hover:text-foreground">
                        {s.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-xs text-muted-foreground">
                Phone number, email address and social links shown here are placeholders.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
              <img
                src={galleryImg}
                alt="A student with a guitar at HBMC"
                width={1000}
                height={1300}
                loading="lazy"
                className="w-full rounded-3xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-oatmeal py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Branches</p>
            <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl">Where to find us.</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {branches.map((b, i) => (
              <Reveal key={b.id} delay={i * 70}>
                <div className="grid items-baseline gap-3 py-7 lg:grid-cols-12">
                  <h3 className="font-display text-2xl lg:col-span-4">{b.name}</h3>
                  <div className="lg:col-span-5">
                    <p className="text-sm text-muted-foreground">{b.address}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3 lg:text-right">
                    <a href={b.mapUrl} className="link-underline text-sm text-terracotta">
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* <p className="mt-5 text-xs text-muted-foreground">
            Addresses and map links are placeholders.
          </p> */}
        </div>
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <Reveal>
            <h2 className="text-3xl leading-[1.1] sm:text-4xl">
              Want to see the class details first?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/classes"
                className="rounded-full bg-espresso px-7 py-3.5 text-sm tracking-wide text-onwarm transition-colors hover:bg-terracotta"
              >
                Explore Classes
              </Link>
              <Link
                to="/resources"
                className="rounded-full border border-border px-7 py-3.5 text-sm tracking-wide transition-colors hover:bg-oatmeal"
              >
                Browse Resources
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
