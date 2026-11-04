import { ArrowRight, Globe, Monitor, Sparkles } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  url: string;
};

const PROJECTS: Project[] = [
{
id: "chicken-biriyani-3d",
icon: Sparkles,
iconLabel: "Chicken Biriyani 3D",
title: "Chicken Biriyani 3D",
description:
  "An immersive 3D restaurant website featuring interactive food experiences, realistic 3D visuals, cinematic animations, and an engaging WebGL-powered interface.",
meta: "React · Next.js · Three.js · WebGL · GSAP",
imageRatio: 16 / 9,
image: "/projects/chicken-biriyani-3d.webp",
imageAlt: "Chicken Biriyani 3D interactive website",
url: "https://chicken-biriyani-3d.vercel.app/",
},
  {
    id: "sbt-tours",
    icon: Sparkles,
    iconLabel: "SBT Tours",
    title: "SBT Tours",
    description:
      "A modern travel website built with React, focused on presenting tours, destinations, and travel services in a clear and interactive way.",
    meta: "React · Frontend Development",
    imageRatio: 16 / 9,
    image: "/projects/sbt-tours.webp",
    imageAlt: "SBT Tours website",
    url: "https://www.sbttours.com/",
  },
  {
    id: "psalt-studios",
    icon: Monitor,
    iconLabel: "PSalt Studios",
    title: "PSalt Studios",
    description:
      "A creative studio website built around its work, services, and visual identity with a responsive layout.",
    meta: "Web Development",
    imageRatio: 16 / 9,
    image: "/projects/psalt-studios.webp",
    imageAlt: "PSalt Studios website",
    url: "https://psaltstudios.com/",
  },

  {
    id: "duffy-boats",
    icon: Globe,
    iconLabel: "Duffy Boats",
    title: "Duffy Boats",
    description:
      "A responsive website focused on presenting the brand, boats, products, and information through a visual web experience.",
    meta: "Web Development",
    imageRatio: 16 / 9,
    image: "/projects/duffy-boats.webp",
    imageAlt: "Duffy Boats website",
    url: "https://duffyboats.com/",
  },
    {
    id: "mother-glory",
    icon: Sparkles,
    iconLabel: "Mother Glory",
    title: "Mother Glory",
    description:
      "A React-based website with a modern interface and responsive layouts designed around the brand and its content.",
    meta: "React · Frontend Development",
    imageRatio: 16 / 9,
    image: "/projects/mother-glory.webp",
    imageAlt: "Mother Glory website",
    url: "https://www.motherglory.com/",
  },
  {
    id: "patel-public-school",
    icon: Monitor,
    iconLabel: "Patel Public School",
    title: "Patel Public School",
    description:
      "A school website built to present the institution, academics, facilities, activities, and admission information.",
    meta: "Web Development",
    imageRatio: 16 / 9,
    image: "/projects/patel-public-school.webp",
    imageAlt: "Patel Public School website",
    url: "https://patelpublicschool.com/",
  },
  {
    id: "red-key-realtors",
    icon: Globe,
    iconLabel: "Red Key Realtors",
    title: "Red Key Realtors",
    description:
      "A real estate website designed to present properties and company information through a structured and responsive interface.",
    meta: "Web Development",
    imageRatio: 16 / 9,
    image: "/projects/red-key-realtors.webp",
    imageAlt: "Red Key Realtors website",
    url: "https://www.redkeyrealtors.com/",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>

            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              A selection of websites and frontend projects I&rsquo;ve worked
              on.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5"
      >
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon
              className="h-3.5 w-3.5 text-foreground"
              aria-hidden="true"
            />
          </span>

          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>

          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </a>
    </FadeIn>
  );
}