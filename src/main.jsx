import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './Layout/RootLayout';

const router = createBrowserRouter(
  [
    {
      path:'/',
      Component:RootLayout,
      children: [
        {
          // path:'/',
          index: true,
          element: <h2>Homepage</h2>
        },
        {
          path:'/timeline',
          element: <h2>Timeline</h2>
        },
        {
          path:'/stats',
          element:<h2>Stats</h2>
        }
      ],
      errorElement: <h2>this page is not found</h2>
    }

  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
