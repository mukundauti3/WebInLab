import axios from "axios";
import { useState } from "react";

function Password()
{
    
    const [length, setLength] = useState(8); // Default length
  const [password, setPassword] = useState("");

  const passwordChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&";

  function generatePassword() {
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      generatedPassword += passwordChars[randomIndex];
    }
    setPassword(generatedPassword);
  }
    return(<>
     <label>Enter the length of Password: </label>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <button onClick={generatePassword}>Generate Password</button>
      <br />
      <br />
      <strong>Generated Password:</strong> {password}
    </>)
}

export default Password;
