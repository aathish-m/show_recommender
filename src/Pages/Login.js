import { useState } from "react";
import "./css/Login.css"
import {Link, useHistory} from 'react-router-dom';

function Login() {
  const history = useHistory()
  async function loginclick(e) {
      if(email != "" || password != ""){
        try {
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          let raw = JSON.stringify({
            email: email,
            password: password,
          });

          let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          const details = await fetch("http://localhost:5000/user/get", requestOptions)
          const json = await details.json()
          console.log(json);
          history.push(`/display/email=${json.user.email}`);
        } catch (e) {
          console.log(e);
        }
      }
      else{
        alert("Enter credentials")
      }
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function emailhandleChange(e) {
    setEmail(e.target.value);
  }
  function passwordhandleChange(e) {
    setPassword(e.target.value);
  }
  

  return (
    <div className="logincontainer">
        <div className="loginform">
          <div className="field">
          <h1>Login Form</h1>
            <label className="label">Email</label><br/>
            <input 
              type="text"
              name="email"
              onChange={emailhandleChange}
              value={email}
            />
          </div>
          <br/>
          <div className="field">
            <label >Password</label><br/>
            <input 
              type="password"
              name="password"
              onChange={passwordhandleChange}
              value={password}
            />
          </div>
          <br/>
          <button className="loginbutton" onClick={loginclick}>LOGIN AND GET RECOMMENDATION</button>

          <div className="loginbottom">
            <p>Don't have an account</p>
            <Link to="/signup" className="link">signup</Link>
          </div>
        </div>
    </div>
  );
}

export default Login;