import {NavLink} from "react-router";
import "./Menu.css";

const Menu = () => {
    return (
        <nav className="header-menu">
            <ul>
                <li>
                    <NavLink
                        to="/movies"
                        className={({isActive}) => isActive ? "menu-link active" : "menu-link"}>
                        Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/series"
                        className={({isActive}) => isActive ? "menu-link active" : "menu-link"}>
                        Series
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;