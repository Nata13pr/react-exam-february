import "./Menu.css"
import {Link} from "react-router";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'movies'}>Movies</Link></li>
                <li><Link to={'series'}>Series</Link></li>
            </ul>
        </nav>
    )
}
export default Menu;