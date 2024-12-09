import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
}

function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
