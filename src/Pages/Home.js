
import './css/Home.css';
import {useHistory} from 'react-router-dom';


function Home() {
    const history = useHistory()
    function loginclick() {
        history.push("/login");
    }
      function signupclick(){
        history.push("/signup");
    }

return (
    <div className="outercontainer">
      <div className="innercontainer">
      <center><img  src={require('../images/kyro.png')} />
      <h2>TV SHOW RECOMMENDER</h2></center>
      <button className="homebutton" onClick={loginclick}>LOGIN</button>
      <button  className="homebutton"onClick={signupclick}>SIGNUP</button>
      </div>
    </div>
  );
}

export default Home;