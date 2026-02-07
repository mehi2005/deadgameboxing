import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/section";
import { blogPosts } from "@/lib/data";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Section
        eyebrow={post.category}
        title={post.title}
        description={post.date}
      >
        <div className="rounded-3xl border border-ink/10 bg-fog/80 p-8 text-sm text-sand/70">
          <div className="flex flex-col gap-5">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-flex text-xs uppercase tracking-[0.35em] text-ember"
          >
            Back to journal →
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
