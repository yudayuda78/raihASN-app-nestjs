import type { Route } from "./+types/home";
import { HomePages} from "my-react-router-app/app/pages/HomePages"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RaihASN" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePages />;
}
