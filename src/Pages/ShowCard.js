import * as React from "react";
import "./css/ShowCard.css";
import Cards from "./Card";
import { useHistory, useParams } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Showcard() {
  const history = useHistory([]);
  const [userdetails, setUserdetails] = React.useState();
  const [showdetails, setShowdetails] = React.useState();

  const params = useParams();
  const email = (params.email).split("=")[1];

  React.useEffect(() => {
    (async () => {
      try {

        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };

        await fetch(`https://tv-show-recommendation.herokuapp.com/user/get/recommendation?email=${email}`, requestOptions)
          .then(response => response.json())
          .then(result => setUserdetails(result))
          .catch(error => console.log('error', error));

      } catch (e) {
        console.log(e);
      }

    })();
  }, [email])


  React.useEffect(() => {

    try {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      userdetails && fetch(`https://api.tvmaze.com/shows/${userdetails.recommendations[(userdetails.recommendations).length - 1]}`, requestOptions)
        .then(response => response.json())
        .then(result => setShowdetails(result))
        .catch(error => console.log('error', error));
    }
    catch (e) {
      console.log(e);
    }
  }, [userdetails])


  const handlenext = async () => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    await fetch(`https://tv-show-recommendation.herokuapp.com/user/add/recommendation?id=${userdetails._id}`, requestOptions)
      .then(response => response.json())
      .then(result => setUserdetails(result))
      .catch(error => console.log('error', error));
  }

  userdetails && console.log(userdetails);

  function historyclick() {
    history.push(`/history/email=${email}`);
  }
  function logoutclick() {
    history.push("/login");
  }


  return (
    <div className="cardcontainer">
      <div className="navbar">
        <div
          className="iconcontainer"
          onClick={historyclick}
        >
          <HistoryIcon
            fontSize="medium"
            sx={{ padding: "5px" }}
          />
          <p>History</p>
        </div>
        <div className="iconcontainer" onClick={logoutclick}>
          <LogoutIcon
            fontSize="medium"
            sx={{ padding: "5px" }}
          />
          <p>Logout</p>
        </div>
      </div>
      {
        showdetails && <Cards
          name={showdetails.name}
          language={showdetails.language}
          url={(showdetails.image.original)}
          genre={showdetails.genres}
          summary={showdetails.summary}
        />
      }
      <button className="displaybutton" onClick={handlenext}>NEXT_RECOMMENDATION</button>
    </div>
  );
}
