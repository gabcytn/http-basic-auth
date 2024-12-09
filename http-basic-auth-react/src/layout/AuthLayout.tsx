import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">{title}</h2>
          <form onSubmit={(e) => { handleSubmit(e) }} className="d-flex justify-content-center flex-column">
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
