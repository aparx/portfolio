import { Primitive } from "./types";

export function mergeClassNames(...args: Primitive[]): string | undefined {
  // Note: we accept primitives for class names that depend on truthy conditions
  const strings = args.filter((x) => typeof x === "string");
  return strings.length !== 0 ? strings.join(" ") : undefined;
}
