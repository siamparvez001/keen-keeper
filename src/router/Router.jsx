import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/homepage/Home";
import ErrorPage from "../pages/notFoundpage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: RootLayout,
            children: [
                {
                    // path:'/',
                    index: true,
                    element: <Home></Home>,
                    // loader: ()=>fetch("/friendsData.json")
                },
                {
                    path: '/timeline',
                    element: <h2>Timeline</h2>
                },
                {
                    path:'/friend/:id',
                    element: <FriendDetails></FriendDetails>
                },
                {
                    path: '/stats',
                    element: <h2>Stats</h2>
                }
            ],
            errorElement: <ErrorPage></ErrorPage>
        }

    ]
)