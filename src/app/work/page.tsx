import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import WorkReel from "@/components/home/WorkReel";
import { reel } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work — Five Builds, No Templates",
  description:
    "A live restaurant site and four concept builds from Tramano Creative — custom design, sub-second loads, and layouts built around one clear action per page.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Work", href: "/work/" }]} />
    <div className="pt-20">
      <Section slate="The reel" eyebrow="Five builds" title="Every site carries our name." titleAs="h1">
        <Reveal>
          <p className="-mt-6 max-w-[58ch] text-lg leading-relaxed text-grey">
            Each site we ship links back here from its footer, so the work has
            to hold up every day without us in the room. One of these is live;
            four are concept builds. We keep the names off them — what&apos;s
            worth looking at is the thinking, not the logo in the corner.
          </p>
        </Reveal>

        <div className="mt-24">
          {/* Directly under the page h1 here, so the item titles are h2. */}
          <WorkReel shots={reel} headingLevel="h2" />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-32 border-t border-edge pt-14">
            <h2 className="max-w-[24ch] font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              The next one could be yours.
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-grey">
              We take a small number of builds at a time. If you want one of
              them, the first step is a conversation — not a proposal.
            </p>
            <div className="mt-10">
              <CtaButton href="/contact/" size="lg">
                Book the call
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
    </>
  );
}
