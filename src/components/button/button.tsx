import { mergeClassNames } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef } from "react";
import { TextFont } from "../textFont";
import css from "./button.module.css";

export type ButtonAppearance = "cta" | "transparent";

export interface ButtonBaseProps {
  /** The visual appearance of the button. Defaults to "transparent". */
  appearance?: ButtonAppearance;
  asChild?: boolean;
}

export type ButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  keyof ButtonBaseProps
> &
  ButtonBaseProps;

export function Button({
  appearance,
  asChild,
  children,
  className,
  disabled,
  ...restProps
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <TextFont asChild>
      <Component
        className={mergeClassNames(css.button, className)}
        data-appearance={appearance}
        data-disabled={disabled}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </Component>
    </TextFont>
  );
}
