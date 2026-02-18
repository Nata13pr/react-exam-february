import {createBrowserRouter, type RouteObject} from "react-router-dom";
import {Navigate} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import InfoPage from "../pages/InfoPage.tsx";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true,
                element: <Navigate to="/movies" replace/>
            },
            {
                index: true,
                path: 'movies',
                element: <MoviesPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            },
            {
                path: 'movie/info/:movieId',
                element: <InfoPage/>
            },
            // {
            //     path: 'users', element: <UsersPage/>, children: [
            //         {path: ':id', element: <UserPage/>},
            //     ]
            // },
            // {
            //     path: 'posts', element: <PostsPage/>
            // },
            // {
            //     path: 'comments', element: <CommentsPage/>
            // },
        ]
    }

];
export const router = createBrowserRouter(routes);