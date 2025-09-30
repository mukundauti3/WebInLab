import { useState, useRef } from "react";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [userList, setUserList] = useState([]);

  function handleSubmit() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username && password) {
      const newEntry = { username, password };
      setUserList((prevList) => [...prevList, newEntry]);

      // Clear input fields
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      alert("Please enter both username and password");
    }
  }

  return (
    <>
      <h1>Login Form</h1>
      <label>Username: </label>
      <input type="text" ref={usernameRef} /><br />
      <label>Password: </label>
      <input type="password" ref={passwordRef} /><br />
      <button onClick={handleSubmit}>Submit</button>

      <h2>Submitted Users</h2>
      <table border={1}>
        <thead>
          <tr><th>Username</th><th>Password</th></tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
