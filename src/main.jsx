import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import FeatureDetails from './Components/FeatureDetails/FeatureDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/features.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/feature/:id",
        element: <FeatureDetails></FeatureDetails>,
        loader: () => fetch('../features.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
