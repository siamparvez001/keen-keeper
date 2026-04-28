import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { router } from './router/Router';
import TimelineFriendProvider from './context/TimelineFriendProvider';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineFriendProvider>
      <RouterProvider router={router}></RouterProvider>
    </TimelineFriendProvider>
    <ToastContainer position="top-right" autoClose={2000} />
  </StrictMode>,
)
