import {createBrowserRouter, type RouteObject} from "react-router-dom";
import {Navigate} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import InfoPage from "../pages/InfoPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import TvShowPage from "../pages/TvShowPage.tsx";
import InfoTvShowPage from "../pages/InfoTvShowPage.tsx";

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
                path: 'tvshows',
                element: <TvShowPage/>
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
            {
                path: 'tvshow/info/:tvshowId',
                element: <InfoTvShowPage/>
            },
        ]
    }

];
export const router = createBrowserRouter(routes);