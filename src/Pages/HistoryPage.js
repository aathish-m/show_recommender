import './css/History.css';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import Cards from './Card';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LogoutIcon from "@mui/icons-material/Logout";


function HistoryPage() {

  const params = useParams();
  const email = (params.email).split("=")[1];
  const [history, setHistory] = useState();
  const [showdetails, setShowdetails] = useState();
  const [id, setId] = useState();
  const [cond, setCond] = useState(true)

  React.useEffect(() => {

    async function fetchdetails() {
      try {

        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };

        fetch(`http://localhost:5000/user/get/recommendation?email=${email}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setHistory(result.recommendations)
            setId(result._id)
          })
          .catch(error => console.log('error', error));
      }
      catch (e) {
        console.log(e);
      }
    }

    fetchdetails();

  }, [])

  React.useEffect(() => {
    let arr = []
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    history && history.forEach((item) => {
      fetch(`https://api.tvmaze.com/shows/${item}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          arr.push(result)
          if (history.length == arr.length) {
            setShowdetails(arr);
          }
        }

        )
        .catch(error => console.log('error', error));
    })

  }, [history])

  const deletehistory = async () => {
    console.log(id);

    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/user/detele/recommendation?id=${id}`, requestOptions)
      .then(response => response.json())
      .then(result => setHistory(result.user.recommendations) && setShowdetails(null))
      .catch(error => console.log('error', error));

    setCond(false)
  }

  const navigate = useHistory();
  function logoutclick() {
    navigate.push("/login");
  }

  console.log(cond);


  return (

    <div className="historycontainer">
      <h1>RECOMMENDATION HISTORY</h1>
      {
        showdetails && (history.length != 0) && showdetails.map((show) => (
          <Cards
            name={show.name}
            language={show.language}
            url={(show.image.original)}
            genre={show.genres}
            summary={show.summary}
          />
        ))
      }
      {
        cond ? <div className="clearhistorycontainer" onClick={deletehistory}>
          <AutoDeleteIcon
            fontSize="medium"
            sx={{ padding: "5px" }}
          />
          <p>Clear History</p>
        </div> : <div>
          <h1>History has been cleared. Do login to see the show recommendation</h1>
          <div className="iconcontainer" onClick={logoutclick}>
            <LogoutIcon
              fontSize="medium"
              sx={{ padding: "5px" }}
            />
            <p>Logout</p>
          </div>
        </div>
      }
    </div>
  )
}

export default HistoryPage