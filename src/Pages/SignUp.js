import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./css/SignUp.css";

function SignUp() {
  const history = useHistory();
  const [userdetails,SetUserdetails] = useState();
  async function registerclick() {
    if (name !== "" || email !== "" || password !== "" || cpassword !== "") {
      if (password === cpassword) {
        try {
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          let raw = JSON.stringify({
            name: name,
            email: email,
            password: password,
          });

          let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

  //         const details = await fetch("https://tv-show-recommendation.herokuapp.com/user/create", requestOptions)
  //         const json = await details.json()
  //         console.log(json);
  //         history.push(`/display/email=${json.newUser.email}`);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     } else {
  //       alert("Password doesn't match");
  //     }
  //   } else {
  //     alert("Enter credentials");
  //   }
  // }
  const details = await fetch("https://tv-show-recommendation.herokuapp.com/user/create", requestOptions)
  const json = await details.json()
  if(details.status !== 201){
    alert(json.message);
  }
  else{
    history.push(`/display/email=${json.newUser.email}`); 
  }
} catch (e) {
  alert(e);
  setName("");
  setEmail("");
  setCpassword("");
  setPassword("")
}
} else {
alert("Password doesn't match");
}
} else {
alert("Enter credentials");
}
}
  userdetails && console.log(userdetails);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  return (
    <div className="signupcontainer">
      <div className="signupform">
        <div className="ui form">
          <div className="field">
            <h1>SignUp Form</h1>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="username"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <br />
            <input
              type="text"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="formfield">
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              name="cpassword"
              onChange={(event) => setCpassword(event.target.value)}
              value={cpassword}
            />
          </div>
          <button type="submit" onClick={registerclick} className="loginbutton">
            REGISTER AND GET RECOMMENDATION
          </button>
          <div className="loginbottom signupbtm">
            <p>Already have an account</p>
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
