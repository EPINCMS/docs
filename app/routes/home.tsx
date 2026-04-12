import type { Route } from "./+types/home";
import { redirect } from "react-router";

export function loader() {
  return redirect("/docs");
}

export default function Home() {
  return null;
}
