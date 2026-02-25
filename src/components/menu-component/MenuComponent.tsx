import {NavLink} from "react-router";
import "./MenuComponent.css";

const MenuComponent = () => {
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

export default MenuComponent;