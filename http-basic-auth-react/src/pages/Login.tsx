import { useState } from "react";
import AuthLayout from "../layout/AuthLayout"
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useNavigate } from "react-router";

type User = {
  id: number;
  username: string;
  password: string;
  role: string;
}

type LoginProps = {
  setIsLoggedIn: (value: boolean) => void;
  setUsers: (value: User[]) => void;
}

function Login({ setIsLoggedIn, setUsers }: LoginProps) {
  const [whichRoute, setWhichRoute] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>, username: string, password: string) {
    e.preventDefault();
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials);

    try {
      const res = await fetch(`${SERVER_URL}/${whichRoute}`, {
        method: "GET",
        headers: {
          "Authorization": `Basic ${encodedCredentials}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error status code: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      setIsLoggedIn(true);
      setUsers(data);
      navigate(`/${whichRoute}`);

    } catch (e: unknown) {
      if (e instanceof Error) console.error(e.message)
      else console.error("An unknown error occured")
    }
  }

  return (
    <AuthLayout title="Login Page">
      <form onSubmit={(e) => { handleSubmit(e, username, password) }} className="d-flex justify-content-center flex-column">
        <TextInput value={username} handleType={setUsername} type="text" id="username" title="Username" />
        <TextInput value={password} handleType={setPassword} type="password" id="password" title="Password" />
        <TextInput value={whichRoute} handleType={setWhichRoute} type="text" id="which-route" title="Which Route" />
        <Button type="submit" text="Login" />
      </form>
    </AuthLayout>
  )
}

export default Login
