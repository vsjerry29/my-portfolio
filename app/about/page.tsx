import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";

import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "About Suriya, a frontend developer and web designer focused on building responsive and user-friendly digital experiences.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <div className="pt-30 mx-auto">
      </div>
      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hey, I&rsquo;m{" "}
              <span className="border-b border-foreground/30 pb-0.5">
                Suriya.
              </span>
            </h1>

            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                I started out building websites with{" "}
                <strong className="font-semibold text-foreground">
                  WordPress, HTML, CSS and Bootstrap
                </strong>
                . Over time I got more interested in what happens beyond
                templates, which pushed me toward{" "}
                <strong className="font-semibold text-foreground">
                  JavaScript, React and Next.js
                </strong>
                .
              </p>

              <p>
                Most of my work has been pretty hands-on. I&rsquo;ve built and
                maintained websites for businesses and educational institutions,
                worked on{" "}
                <strong className="font-semibold text-foreground">
                  UI, SEO, performance, hosting and deployments
                </strong>
                , and dealt with the less interesting parts of websites too,
                like fixing broken forms, plugins, domains and integrations.
              </p>

              <p>
                I&rsquo;m now putting more of my time into{" "}
                <strong className="font-semibold text-foreground">
                  frontend development
                </strong>
                . I like taking a design and figuring out how to turn it into
                something that actually works, rather than just making another
                static page.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />

      <div className="h-12 sm:h-16" />
    </main>
  );
}