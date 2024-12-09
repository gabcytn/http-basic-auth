import { useState } from "react";
import AuthLayout from "../layout/AuthLayout"
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useNavigate } from "react-router";

function Register() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const navigate = useNavigate();
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    e.preventDefault();

    try {
      const res = await fetch(`${SERVER_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
          role: "user"
        })
      });
      if (res.ok) {
        navigate("/login");
        return;
      }

      throw new Error(`Error status code of ${res.status}`);
    } catch (e: unknown) {
      if (e instanceof Error) console.error(e.message)
      else console.error("Unknown error in registration")
    }

  }

  return (
    <AuthLayout title="Registration Page">
      <form className="d-flex justify-content-center flex-column" onSubmit={(e) => { handleSubmit(e) }}>
        <TextInput value={username} handleType={setUsername} type="text" id="username" title="Username" />
        <TextInput value={password} handleType={setPassword} type="password" id="password" title="Password" />
        <TextInput value={confirmPassword} handleType={setConfirmPassword} type="password" id="confirm-password" title="Confirm password" />
        <Button type="submit" text="Register" />
      </form>
    </AuthLayout>
  )
}

export default Register
