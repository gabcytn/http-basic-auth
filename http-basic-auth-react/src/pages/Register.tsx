import { useState } from "react";
import AuthLayout from "../layout/AuthLayout"
import Button from "../components/Button"
import TextInput from "../components/TextInput"

function Register() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  return (
    <AuthLayout title="Registration Page">
      <TextInput value={username} handleType={setUsername} type="text" id="username" title="Username" />
      <TextInput value={password} handleType={setPassword} type="password" id="password" title="Password" />
      <TextInput value={confirmPassword} handleType={setConfirmPassword} type="password" id="confirm-password" title="Confirm password" />
      <Button type="submit" text="Register" />
    </AuthLayout>
  )
}

export default Register
