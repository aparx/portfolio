import { mergeClassNames } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef } from "react";
import css from "./gridBox.module.css";

type GridBoxBaseProps = { asChild?: boolean } & (
  | { type: "split"; side: "start" | "end" }
  | { type: "stretch"; side?: never }
);

export type GridBoxProps = Omit<
  ComponentPropsWithoutRef<"article">,
  keyof GridBoxBaseProps
> &
  GridBoxBaseProps;

interface GridBoxHeaderBaseProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  intro?: React.ReactNode;
  icon?: React.ReactNode;
}

export type GridBoxHeaderProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children" | keyof GridBoxHeaderBaseProps
> &
  GridBoxHeaderBaseProps;

export function Root({
  type,
  side,
  asChild,
  children,
  className,
  ...restProps
}: GridBoxProps) {
  const Comp = asChild ? Slot : "article";
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

export function Header({
  title,
  subtitle,
  intro,
  icon,
  className,
  ...restProps
}: GridBoxHeaderProps) {
  return (
    <header className={mergeClassNames(className, css.title)} {...restProps}>
      {(icon || intro) && (
        <p>
          {icon}
          {intro}
        </p>
      )}
      <hgroup>
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </hgroup>
    </header>
  );
}
