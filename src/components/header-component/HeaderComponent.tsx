import UserInfoComponent from "../user-info-component/UserInfoComponent.tsx";
import {Link} from "react-router-dom";
import logo from '../../assets/image/logo.png'
import {useState, useRef, useCallback, useEffect} from "react";
import MenuComponent from "../menu-component/MenuComponent.tsx";
import FormComponent from "../form-component/FormComponent.tsx";
import './HeaderComponent.css'

const HeaderComponent = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pillRef = useRef<HTMLDivElement>(null);

    const triggerShake = useCallback(() => {
        if (pillRef.current) {
            const pill = pillRef.current;
            pill.classList.remove("shake-animation");

            void pill.offsetWidth;

            pill.classList.add("shake-animation");
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isSearchOpen && pillRef.current && !pillRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsSearchOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isSearchOpen]);
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
                        ? <MenuComponent/>
                        : <FormComponent onSearchError={triggerShake} onClose={() => setIsSearchOpen(false)}/>
                    }
                    <button type='button' className="search-toggle-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                        {isSearchOpen ? '✕' : '🔍︎'}
                    </button>
                </div>
                <UserInfoComponent/>
            </div>
        </header>
    );
};
export default HeaderComponent