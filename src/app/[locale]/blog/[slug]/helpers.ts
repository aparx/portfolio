import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const FILE_EXTENSION = ".md";

export function getPostFiles() {
  const directory = getPostsDirectory();
  const files = fs.readdirSync(directory);
  return files.filter((x) => x.endsWith(FILE_EXTENSION));
}

export function readPostFile(fileName: string) {
  const directory = getPostsDirectory();
  const newFileName = !fileName.endsWith(FILE_EXTENSION)
    ? fileName + FILE_EXTENSION
    : fileName;
  return matter(fs.readFileSync(path.join(directory, newFileName)));
}

function getPostsDirectory() {
  return path.join(process.cwd(), "posts");
}
