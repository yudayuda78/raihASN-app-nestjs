import { NavbarApp } from "~/components/layout/NavbarApp";
import MateriApp from "~/components/composite/MateriApp";

export default function MateriPages() {
  return (
    <div className="bg-white">
      <NavbarApp />
      <MateriApp></MateriApp>
    </div>
  );
}
