import { useState } from "react";
import AuthLayout from "../layout/AuthLayout"
import Button from "../components/Button"
import TextInput from "../components/TextInput"

function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  return (
    <AuthLayout title="Login Page">
      <TextInput value={username} handleType={setUsername} type="text" id="username" title="Username" />
      <TextInput value={password} handleType={setPassword} type="password" id="password" title="Password" />
      <Button type="submit" text="Login" />
    </AuthLayout>
  )
}

export default Login
