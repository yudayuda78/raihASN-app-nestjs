import type { Route } from "./+types/tryout";
import { TryoutPages } from "my-react-router-app/app/pages/TryoutPages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RaihASN || Tryout" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Tryout(){
    return <TryoutPages/>
    
}