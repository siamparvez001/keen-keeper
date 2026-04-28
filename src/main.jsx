import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { router } from './router/Router';
import TimelineFriendProvider from './context/TimelineFriendProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineFriendProvider>
      <RouterProvider router={router}></RouterProvider>
    </TimelineFriendProvider>
    
  </StrictMode>,
)
