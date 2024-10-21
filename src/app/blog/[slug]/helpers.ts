import { memoizeAsyncIfProduction, memoizeSyncIfProduction } from "@/utils";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

/** Full file extension (ending of the file) */
const FILE_NAME_END = ".md";

export const blogMetadataSchema = z.object({
  title: z.string().max(128),
  subtitle: z.string().max(256).optional(),
  tags: z.string().array().optional(),
  createdAt: z.date(),
});

export const blogFiles = memoizeSyncIfProduction(() => {
  const files = fs.readdirSync(getBlogsDirectory());
  return files.filter((x) => x.endsWith(FILE_NAME_END));
});

export const blogPosts = memoizeAsyncIfProduction(async () => {
  // We read all possible blog posts ahead of them actually being generated.
  // This ultimately saves a lot of resources the more blog posts there are.
  return (await Promise.allSettled(blogFiles().map(readBlogFile)))
    .filter((post) => post.status === "fulfilled")
    .map((post) => post.value)
    .sort(({ metadata: a }, { metadata: b }) => {
      return a.createdAt.getTime() < b.createdAt.getTime() ? 1 : -1;
    });
});

export function readBlogFile(fileName: string) {
  const newFileName = !fileName.endsWith(FILE_NAME_END)
    ? fileName + FILE_NAME_END
    : fileName;
  const filePath = path.join(getBlogsDirectory(), newFileName);
  const grayMatter = matter(fs.readFileSync(filePath));
  return {
    metadata: blogMetadataSchema.parse(grayMatter.data),
    slug: createBlogSlug(newFileName),
    ...grayMatter,
  } as const;
}

export function createBlogSlug(fileName: string) {
  return fileName
    .substring(0, fileName.lastIndexOf(FILE_NAME_END))
    .replace(/\s+/g, "-");
}

function getBlogsDirectory() {
  return path.join(process.cwd(), "posts");
}
