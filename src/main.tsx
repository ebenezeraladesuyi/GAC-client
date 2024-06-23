import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import IsLoading from './pages/isLoading/IsLoading.tsx'
import { RouterProvider } from 'react-router-dom'
import { element } from './router/Router.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import dotenv from 'dotenv';
// dotenv.config();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<IsLoading />}>
        <RouterProvider router={element} />
      {/* <App /> */}
      <ToastContainer />
    </Suspense>
  </React.StrictMode>,
)
