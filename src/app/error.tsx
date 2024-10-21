"use client";
import { Button } from "@/components";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";
import css from "./error.module.css";

export default function Error({ error }: { error: Error }) {
  return (
    <div className={css.container}>
      <h2>Oops, an error occurred</h2>
      <div>{error.message}</div>
      <footer>
        <Button asChild appearance="cta">
          <Link href="/" style={{ textDecoration: "none" }}>
            Go back home
          </Link>
        </Button>
      </footer>
    </div>
  );
}
