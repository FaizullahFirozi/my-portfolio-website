import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { SocialLinks } from "@/config/socials";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Connect with me, exchange web development ideas, and collaborate on projects.",
};

const descriptions: Record<string, string> = {
  Facebook: "Connect with me on Facebook and join the conversation.",
  YouTube: "Visit my YouTube channel and subscribe to follow along.",
  Github: "Explore my code, report an issue, or contribute to a project.",
  LinkedIn:
    "Connect professionally and talk about opportunities to work together.",
  Twitter:
    "Follow along and exchange ideas about development and building projects.",
};

export default function CommunityPage() {
  return (
    <PageContainer
      title="Community"
      description="Let's learn, share ideas, and build together."
    >
      <section className="rounded-2xl border bg-muted/50 p-6 sm:p-10">
        <p className="text-sm font-medium text-muted-foreground">
          Start a conversation
        </p>
        <h2 className="mt-3 font-heading text-2xl sm:text-3xl">
          Have something in mind?
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Working through a web development question, exploring a project idea,
          or looking to collaborate? Get in touch and tell me what you're
          building.
        </p>
        <a
          href="https://wa.me/93780002528"
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonVariants({ size: "lg" })} mt-6 gap-2`}
        >
          <SiWhatsapp className="h-5 w-5" aria-hidden="true" />
          Message me on WhatsApp
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      <section className="mt-10" aria-labelledby="connect-heading">
        <h2 id="connect-heading" className="font-heading text-2xl">
          More ways to connect
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {SocialLinks.filter((social) => social.name in descriptions).map(
            (social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">
                    {social.name === "Twitter"
                      ? "X / Twitter"
                      : social.name === "Github"
                        ? "GitHub"
                        : social.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {descriptions[social.name]}
                  </p>
                </a>
              );
            }
          )}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap items-center gap-4 border-t pt-6">
        <p className="text-muted-foreground">
          Looking for something to explore first?
        </p>
        <Link
          href="/projects"
          className={buttonVariants({ variant: "outline" })}
        >
          Browse projects
        </Link>
        <Link href="/blogs" className={buttonVariants({ variant: "outline" })}>
          Read the blog
        </Link>
      </div>
    </PageContainer>
  );
}
