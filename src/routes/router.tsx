import {createBrowserRouter, type RouteObject} from "react-router-dom";
import {Navigate} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import InfoPage from "../pages/InfoPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true,
                element: <Navigate to="/movies" replace/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>
            },
            {
                path: 'error',
                element: <ErrorPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            },
            {
                path: 'movie/info/:movieId',
                element: <InfoPage/>
            },
        ]
    }

];
export const router = createBrowserRouter(routes);