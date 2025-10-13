import type { Route } from "./+types/home";
import { LoginPages } from "~/pages/LoginPages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RaihASN | Login" },
    { name: "login", content: "Welcome to React Router!" },
  ];
}

export default function Login(){
    return (
        <LoginPages />
    )
}