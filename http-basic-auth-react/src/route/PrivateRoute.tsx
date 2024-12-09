import { Navigate, Outlet } from "react-router"

type PrivateRouteProps = {
  isLoggedIn: boolean
}

function PrivateRoute({ isLoggedIn }: PrivateRouteProps) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />

}

export default PrivateRoute
