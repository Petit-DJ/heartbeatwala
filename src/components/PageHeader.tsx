import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-oatmeal pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
