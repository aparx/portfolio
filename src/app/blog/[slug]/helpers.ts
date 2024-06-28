import fs from "fs";
import matter from "gray-matter";
import path from "path";

const FILE_EXTENSION = ".md";

export function getPostFiles() {
  const files = fs.readdirSync(getPostsDirectory());
  return files.filter((x) => x.endsWith(FILE_EXTENSION));
}

export function readPostFile(fileName: string) {
  const newFileName = !fileName.endsWith(FILE_EXTENSION)
    ? fileName + FILE_EXTENSION
    : fileName;
  const filePath = path.join(getPostsDirectory(), newFileName);
  return matter(fs.readFileSync(filePath));
}

function getPostsDirectory() {
  return path.join(process.cwd(), "posts");
}
