// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// //import Navbar from "./Components/Navbar";

// export default function Login() {
//   const navigate = useNavigate();
//   const [Username, setUsername] = useState("");
//   const [Password, setPassword] = useState("");
//   const [loginErr, setLoginErr] = useState("");
//   const handleusername = (event) => {
//     setUsername(event.target.value); //stored username
//   };
//   const handlepassword = (event) => {
//     setPassword(event.target.value); //stored password
//   };
//   const handleformdata = async (event) => {
//     try {
//       event.preventDefault(); // dont get reloded
//       const response = await axios.post("http://localhost:3000/Login", {
//         username: Username,
//         password: Password,
//       });
//       console.log(response);
//       if (response.status === 200) {
//         localStorage.setItem("jwtTokeb", response.data.token);
//         navigate("/Posts");
//       }
//     } catch (error) {
//       setLoginErr("Invalid Username or Password");
//     }
//     // if (Username === "Bharat" && Password === "Bharat253") {
//     //   navigate("/posts");
//     // } else {
//     //   setLoginErr("Invalid username or password");
//     // }
//   };
//   return (
//     <div>
//       {/* <Navbar></Navbar> */}
//       <h1>Login</h1>
//       <form onSubmit={handleformdata}>
//         <label>Username:</label>
//         <input type="text" value={Username} onChange={handleusername}></input>
//         <br></br>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={Password}
//           onChange={handlepassword}
//         ></input>
//         <br></br>
//         <button>Submit</button>
//       </form>
//       <h2>{loginErr}</h2>
//       {/* <button onClick={()=>{navigate("/posts")}}>Login</button> */}
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value); // Stored username
  };

  const handlePassword = (event) => {
    setPassword(event.target.value); // Stored password
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault(); // Prevent page reload

      const response = await axios.post("http://localhost:3000/Login", {
        username: Username,
        password: Password,
      });

      console.log(response);

      if (response.status === 200) {
        localStorage.setItem("jwtToken", "Bearer "+response.data.token); // Corrected typo
        
        navigate("/Posts");
        TransformStream.success('Login Successfully')
        window.location.reload();
      } else {
        setLoginErr("Invalid Username or Password");
      }
    } catch (error) {
      setLoginErr("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input type="text" value={Username} onChange={handleUsername} />
        <br />
        <label>Password:</label>
        <input type="password" value={Password} onChange={handlePassword} />
        <br />
        <button type="submit" id="sub1">SUBMIT</button>
      </form>
      {loginErr && <h2 className="error-message">{loginErr}</h2>}
      
    </div>
  );
}