import { Primitive } from "./types";

export function mergeClassNames(...args: Primitive[]): string | undefined {
  const strings = args.filter((x): x is string => typeof x === "string");
  return strings.length !== 0 ? strings.join(" ") : undefined;
}
