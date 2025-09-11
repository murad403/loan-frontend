import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false}/>
    </AuthProviders>
  </StrictMode>,
)
