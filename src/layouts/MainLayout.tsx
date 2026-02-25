import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/header-component/HeaderComponent.tsx";
import './MainLayout.css'
import GenresListComponent from "../components/genres-list-component/GenresListComponent.tsx";

export const MainLayout = () => {
    return (
        <div className='layout-background'>
            <div className='content-island'>
                <HeaderComponent/>
                <GenresListComponent/>
                <main className="main-content">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};