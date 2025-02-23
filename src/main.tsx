import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthMainPage } from './pages/auth/AuthMainPage.tsx';
import { EmailRegister } from './pages/auth/EmailRegister.tsx';
import { GmailRegister } from './pages/auth/gmailRegister.tsx';
import { SignUpVerify } from './pages/auth/SignUpVerify.tsx';
import { Login } from './pages/auth/Login.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/auth",
    element: <AuthMainPage />,
    children: [
      {
        path: "",
        element: <GmailRegister />,
      },
      {
        path: "email",
        element: <EmailRegister />,
      },
      {
        path: "verify",
        element: <SignUpVerify />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
