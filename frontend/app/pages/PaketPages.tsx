import { NavbarApp } from "~/components/layout/NavbarApp";
import PaketApp from "~/components/composite/PaketApp";

export default function PaketPages() {
  return (
    <div className="bg-white">
      <NavbarApp></NavbarApp>
      <PaketApp></PaketApp>
    </div>
  );
}
