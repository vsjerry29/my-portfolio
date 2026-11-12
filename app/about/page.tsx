
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
    "About Suriya, a web developer and digital marketing specialist experienced in WordPress, React, SEO, and digital marketing.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <div className="pt-30 mx-auto" />

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
                . Over time, I expanded into{" "}
                <strong className="font-semibold text-foreground">
                  JavaScript, React and Next.js
                </strong>
                , while also gaining hands-on experience in digital
                marketing and SEO.
              </p>

              <p>
                Over the past 3+ years, I&rsquo;ve worked with
                businesses and educational institutions on{" "}
                <strong className="font-semibold text-foreground">
                  website development, SEO, content management
                  and digital marketing
                </strong>
                . My work includes WordPress management, website
                optimisation, Google Ads, Meta Ads, and creating
                digital content for online promotions.
              </p>

              <p>
                I enjoy working on both the technical and creative
                sides of digital projects. Whether it&rsquo;s building
                a responsive website, improving its visibility in
                search results, or supporting a marketing campaign,
                I like creating things that look good, work well,
                and serve a real purpose.
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
