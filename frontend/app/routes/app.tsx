import type { Route } from "./+types/home";
import { AppPages } from "../pages/AppPages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RaihASN APP" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function App() {
  return <AppPages />;
}
