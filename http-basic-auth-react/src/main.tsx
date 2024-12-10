// import { StrictMode } from 'react'
import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './pages/App.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import NotFound from './pages/NotFound.tsx';
import PrivateRoute from './route/PrivateRoute.tsx';

type User = {
  id: number;
  username: string;
  password: string;
  role: string;
}

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [users, setUsers] = useState<User[]>([]);
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

export default Main;

createRoot(document.getElementById('root')!).render(<Main />)
