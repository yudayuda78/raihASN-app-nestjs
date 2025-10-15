import { NavbarApp } from "~/components/layout/NavbarApp"
import { CarouselContent } from "~/components/composite/CarouselContent"
import { MenuContent } from "~/components/composite/MenuContent"

export function AppPages(){
    return (
        <div className="bg-white ">
        <NavbarApp/>
        <CarouselContent/>
        <MenuContent/>
        </div>
    )
}