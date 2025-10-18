import { NavbarApp } from "~/components/layout/NavbarApp"
import TryoutMenuContent from "~/components/composite/TryoutMenuContent"


export function TryoutPages(){
    return (
        <div className="bg-white">
             <NavbarApp />
            <TryoutMenuContent></TryoutMenuContent>
        </div>
    )
}