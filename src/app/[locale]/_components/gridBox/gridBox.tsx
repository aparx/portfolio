import { mergeClassNames } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef } from "react";
import css from "./gridBox.module.css";

type GridBoxBaseProps = { asChild?: boolean } & (
  | { type: "split"; side: "start" | "end" }
  | { type: "stretch"; side?: never }
);

export type GridBoxProps = Omit<
  ComponentPropsWithoutRef<"section">,
  keyof GridBoxBaseProps
> &
  GridBoxBaseProps;

export function Root({
  type,
  side,
  asChild,
  children,
  className,
  ...restProps
}: GridBoxProps) {
  const Comp = asChild ? Slot : "section";
  return (
    <Comp
      className={mergeClassNames(className, css.box)}
      data-type={type}
      data-side={side}
      {...restProps}
    >
      {children}
    </Comp>
  );
}

interface GridBoxTitleBaseProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  intro?: React.ReactNode;
}

export type GridBoxTitleProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children" | keyof GridBoxTitleBaseProps
> &
  GridBoxTitleBaseProps;

export function Header({
  title,
  subtitle,
  intro,
  className,
  ...restProps
}: GridBoxTitleProps) {
  return (
    <header className={mergeClassNames(className, css.title)} {...restProps}>
      {intro && <p>{intro}</p>}
      <hgroup>
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </hgroup>
    </header>
  );
}
