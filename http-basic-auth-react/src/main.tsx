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
  const [users, setUsers] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path='/users' element={<App users={users} />} />
          <Route path="/user/:id" element={<App users={users} />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setUsers={setUsers} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(<Main />)
