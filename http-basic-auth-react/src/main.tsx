// import { StrictMode } from 'react'
import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './pages/App.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import NotFound from './pages/NotFound.tsx';
import PrivateRoute from './route/PrivateRoute.tsx';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path='/' element={<App />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(<Main />)
