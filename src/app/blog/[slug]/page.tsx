import portraitImage from "@/../public/portrait.png";
import { Markdown } from "@/app/_components";
import { useFormatter } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { z } from "zod";
import { blogFiles, blogMetadataSchema, blogPosts } from "./helpers";
import css from "./page.module.css";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return blogFiles().map((post) => ({
    slug: post.substring(0, post.lastIndexOf(".")),
  }));
}

export default async function PostPage({
  params: { slug },
}: Readonly<{
  params: { slug: string };
}>) {
  const blogPost = (await blogPosts()).find((x) => x.slug === slug);
  if (!blogPost) throw new Error("Could not find blog post");
  const { metadata, content } = blogPost;

  return (
    <div className={css.root}>
      <div className={css.container}>
        <article className={css.post}>
          <Header {...metadata} />
          <div className={css.content}>
            <Markdown>{content}</Markdown>
          </div>
        </article>
        <Sidebar tags={metadata.tags} slug={slug} />
      </div>
    </div>
  );
}

function Header({
  title,
  subtitle,
  createdAt,
}: z.infer<typeof blogMetadataSchema>) {
  const format = useFormatter();

  return (
    <header>
      <time dateTime={createdAt.toISOString()}>
        {format.dateTime(createdAt, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <hgroup>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </hgroup>
      <figure className={css.author}>
        <div>
          <Image
            src={portraitImage}
            alt="Portrait"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <figcaption>
          <p>Vinzent Alexander Zeband</p>
          <p>Fullstack Developer</p>
        </figcaption>
      </figure>
    </header>
  );
}

async function Sidebar({
  slug,
  tags,
}: Readonly<{
  slug: string;
  tags?: string[];
}>) {
  const posts = await blogPosts();
  const showPosts = posts.slice(0, 10).filter((x) => x.slug !== slug);

  return (
    <aside className={css.sidebar}>
      {tags && (
        <section>
          <h4>Tags</h4>
          <ul aria-label="Tags from this post">
            {tags?.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </section>
      )}
      <section>
        <h4>Other blog posts</h4>
        <ul aria-label="Other blog posts">
          {showPosts.map((x) => (
            <li key={x.slug}>
              <ExternalBlog {...x.metadata} slug={x.slug} />
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

function ExternalBlog({
  title,
  subtitle,
  slug,
}: z.infer<typeof blogMetadataSchema> & {
  slug: string;
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className={css.externalBlog}>
        <header>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </header>
        <footer>
          <FiExternalLink />
        </footer>
      </article>
    </Link>
  );
}
