import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/section";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <Section
        eyebrow="Journal"
        title="DeadGame Notes"
        description="Technique breakdowns, conditioning insights, and stories from our gym."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-white/10 bg-black/60 p-6 transition hover:border-ember/40"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
                {post.category}
              </p>
              <h3 className="mt-3 text-2xl font-display uppercase tracking-wide text-sand">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-sand/70">{post.excerpt}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-sand/50">
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
