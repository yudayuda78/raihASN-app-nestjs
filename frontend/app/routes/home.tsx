import type { Route } from "./+types/home";
import { HomePages } from "../pages/HomePages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RaihASN" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePages />;
}
