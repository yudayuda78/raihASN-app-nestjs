import type { Route } from "./+types/home";
import { RegisterPages } from "~/pages/RegisterPages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RaihASN | Register" },
    { name: "register", content: "Welcome to React Router!" },
  ];
}

export default function Register(){
    return (
        <RegisterPages />
    )
}