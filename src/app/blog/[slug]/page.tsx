import portraitImage from "@/../public/portrait.png";
import { Markdown } from "@/app/_components";
import { useFormatter } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { z } from "zod";
import { getPostFiles, readPostFile } from "./helpers";
import css from "./page.module.css";

const metadataSchema = z.object({
  title: z.string().max(128),
  subtitle: z.string().max(256).optional(),
  tags: z.string().array().optional(),
  createdAt: z.date(),
});

export async function generateStaticParams() {
  return getPostFiles().map((post) => ({
    slug: post.substring(0, post.lastIndexOf(".")),
  }));
}

export default function PostPage({
  params: { slug },
}: Readonly<{
  params: { slug: string };
}>) {
  const content = readPostFile(slug);
  const metadata = metadataSchema.parse(content.data);
  const format = useFormatter();

  return (
    <div className={css.root}>
      <div className={css.container}>
        <article className={css.post}>
          <header>
            <time dateTime={metadata.createdAt.toISOString()}>
              {format.dateTime(metadata.createdAt, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <hgroup>
              <h1>{metadata.title}</h1>
              {metadata.subtitle && <h2>{metadata.subtitle}</h2>}
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
          <div className={css.content}>
            <Markdown>{content.content}</Markdown>
          </div>
        </article>
        <aside className={css.sidebar}>
          {metadata.tags && (
            <section>
              <h4>Tags</h4>
              <ul aria-label="Tags from this post">
                {metadata.tags?.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </section>
          )}
          <section>
            <h4>Other blog posts</h4>
            <ul aria-label="Other blog posts">
              <li>
                <ExternalBlog {...metadata} slug="yallah" />
              </li>
              <li>
                <ExternalBlog
                  slug="test"
                  title="Lorem Ipsum dolor sit amet"
                  subtitle="Invidunt ut labore et dolore magna aliquyam erat sed diam voluptua."
                  createdAt={new Date()}
                />
              </li>
              <li>
                <ExternalBlog
                  slug="test"
                  title="Vulputate velit esse molestie"
                  subtitle="Duis autem vel eum iriure dolor in."
                  createdAt={new Date()}
                />
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

function ExternalBlog({
  title,
  subtitle,
  slug,
}: z.infer<typeof metadataSchema> & {
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
