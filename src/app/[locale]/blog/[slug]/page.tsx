import Markdown from "react-markdown";
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
  return (
    <article className={css.post}>
      <h1>{metadata.title}</h1>
      <Markdown>{content.content}</Markdown>
    </article>
  );
}
