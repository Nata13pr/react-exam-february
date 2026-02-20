// import "./Header.css"
// import FormComponent from "../form-component/FormComponent.tsx";
// import UserInfo from "../user-info-component/UserInfo.tsx";
// import {Link} from "react-router";
// import logo from '../../assets/image/logo.png';
// import {useState} from "react";
// import Menu from "../menu-component/Menu.tsx";
//
// const Header = () => {
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     return (
//         <header>
//             <div className="header-wrapper">
//                 <div className='logo'>
//                     <Link to='/'>
//                         <img src={logo} alt='logo'/>
//                     </Link>
//                 </div>
//                 <div className={`nav-search-block ${isSearchOpen ? 'active' : ''}`}>
//                     {!isSearchOpen ? (
//                         <Menu />
//                     ) : (
//                         <FormComponent onClose={() => setIsSearchOpen(false)} />
//                     )}
//
//                     <button
//                         className="search-toggle-btn"
//                         onClick={() => setIsSearchOpen(!isSearchOpen)}
//                     >
//                         {isSearchOpen ? '✕' : '🔍'}
//                     </button>
//                 </div>
//                 <UserInfo/>
//                 {/*<FormComponent/>*/}
//             </div>
//         </header>
//     )
// }
// export default Header;
import UserInfo from "../user-info-component/UserInfo.tsx";
import {Link} from "react-router";
import logo from '../../assets/image/logo.png'
import {useState} from "react";
import Menu from "../menu-component/Menu.tsx";
import FormComponent from "../form-component/FormComponent.tsx";
import './Header.css'

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <header className="main-header">
            <div className="header-wrapper">
                <div className='logo'>
                    <Link to='/'><img src={logo} alt='logo'/></Link>
                </div>
                <div className={`nav-search-pill ${isSearchOpen ? 'active' : ''}`}>
                    {!isSearchOpen ? <Menu /> : <FormComponent onClose={() => setIsSearchOpen(false)} />}
                    <button className="search-toggle-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                        {isSearchOpen ? '✕' : '🔍'}
                    </button>
                </div>
                <UserInfo/>
            </div>
        </header>
    )
}
export default Header