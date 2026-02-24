import UserInfo from "../user-info-component/UserInfo.tsx";
import {Link} from "react-router";
import logo from '../../assets/image/logo.png'
import {useState} from "react";
import Menu from "../menu-component/Menu.tsx";
import FormComponent from "../form-component/FormComponent.tsx";
import './Header.css'
import {useRef} from "react";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pillRef = useRef<HTMLDivElement>(null);

    const triggerShake = () => {
        if (pillRef.current) {
            const pill = pillRef.current;
            pill.classList.remove("shake-animation");

            void pill.offsetWidth;

            pill.classList.add("shake-animation");
        }
    };

    return (
        <header className="main-header">
            <div className="header-wrapper">
                <div className='logo'>
                    <Link to='/'><img src={logo} alt='logo'/></Link>
                </div>
                <div
                    ref={pillRef}
                    className={`nav-search-pill ${isSearchOpen ? 'active' : ''}`}>
                    {!isSearchOpen
                        ? <Menu/>
                        : <FormComponent onSearchError={triggerShake} onClose={() => setIsSearchOpen(false)}/>
                    }
                    <button className="search-toggle-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                        {isSearchOpen ? '✕' : '🔍︎'}
                    </button>
                </div>
                <UserInfo/>
            </div>
        </header>
    );
};
export default Header