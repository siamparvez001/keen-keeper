import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/homepage/Home";
import ErrorPage from "../pages/notFoundpage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats"

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
                    element: <Timeline></Timeline>
                },
                {
                    path:'/friend/:id',
                    element: <FriendDetails></FriendDetails>
                },
                {
                    path: 'stats',
                    element: <Stats></Stats>
                }
            ],
            errorElement: <ErrorPage></ErrorPage>
        }

    ]
)