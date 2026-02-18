import {Outlet} from "react-router-dom";
import Header from "../components/header-component/Header.tsx";
import './MainLayout.css'

export const MainLayout = () => {
    return (
        <div className='layout-background'>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};