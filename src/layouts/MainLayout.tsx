import {Outlet} from "react-router-dom";
import Header from "../components/header-component/Header.tsx";
import './MainLayout.css'
import GenresList from "../components/genres-list-component/GenresList.tsx";

export const MainLayout = () => {
    return (
        <div className='layout-background'>
            <div className='content-island'>
                <Header/>
                <GenresList/>
                <main className="main-content">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};