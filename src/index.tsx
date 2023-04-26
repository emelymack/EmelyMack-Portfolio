import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "spanish",
    // element: <AppSpanish />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>
);
