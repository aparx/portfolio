import { mergeClassNames } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ComponentPropsWithoutRef } from "react";
import css from "./textFont.module.css";

export type FontSize = keyof typeof FONT_SIZE_MAP;
export type FontType = keyof typeof FONT_MAP;

export interface FontData {
  /** The type of the font. Defaults to "sans". */
  type?: FontType;
  size?: FontSize;
  weight?: number;
  letterSpacing?: number;
  lineHeight?: number;
}

export type TextFontProps = FontData &
  Omit<ComponentPropsWithoutRef<"div">, keyof FontData> & {
    asChild?: boolean;
  };

export const FONT_MAP = {
  sans: GeistSans.className,
  mono: GeistMono.className,
} as const;

export const FONT_SIZE_MAP = {
  sm: css.sm,
  md: css.md,
  lg: css.lg,
  xl: css.xl,
} as const satisfies Record<string, string>;

export function TextFont({
  type = "sans",
  size,
  weight,
  letterSpacing,
  lineHeight,
  asChild,
  children,
  className,
  style,
  ...restProps
}: TextFontProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={mergeClassNames(
        className,
        size && FONT_SIZE_MAP[size],
        FONT_MAP[type]
      )}
      style={{ fontWeight: weight, letterSpacing, lineHeight, ...style }}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
