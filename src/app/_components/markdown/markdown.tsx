import { mergeClassNames } from "@/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { BiLinkExternal } from "react-icons/bi";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import css from "./markdown.module.css";

export function Markdown({
  children,
}: Readonly<{
  children: string;
}>) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        a: Anchor,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

function Anchor({
  children,
  href,
  className,
  ...restProps
}: ComponentPropsWithoutRef<"a">) {
  return href ? (
    <Link
      href={href}
      className={mergeClassNames(css.anchor, className)}
      {...restProps}
    >
      {children}
      <BiLinkExternal className={css.anchorImage} />
    </Link>
  ) : (
    <a
      href={href}
      className={mergeClassNames(css.anchor, className)}
      {...restProps}
    >
      {children}
      <BiLinkExternal className={css.anchorImage} />
    </a>
  );
}
