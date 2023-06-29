import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Contact from './pages/Contact.jsx';
import Map from './pages/Map.jsx';
import MobileApp from './pages/MobileApp.jsx';
import GuidePage from './pages/GuidePage.jsx';
import NotFound from './pages/NotFound.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/react-ev-charge-finder-app",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/mobileapp",
    element: <MobileApp />,
  },
  {
    path: "/guidepage",
    element: <GuidePage />,
  },
  {
    path: '/*',
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
