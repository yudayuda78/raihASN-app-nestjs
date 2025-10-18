import {Button} from "./Button"
import { Link } from "react-router"

export default function TryoutMenu(){
    return(
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <Link to="/tryout">
                <Button>Kerjakan</Button>
                </Link>
                <Button>Ranking</Button>
            </div>
        </div>
    )
}