type User = {
  id: number;
  username: string;
  password: string;
  role: string;
}
type AppProps = {
  users: User[]
}
function App({ users }: AppProps) {
  return (
    <div>
      <p>Hello, react!</p>
      {users.map((user: User) => {
        return (
          <div className="card" key={user.id}>
            <p>{user.username}</p>
            <p>{user.password}</p>
            <p>{user.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
