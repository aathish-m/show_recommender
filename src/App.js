
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Showcard from './Pages/ShowCard';
import HistoryPage from './Pages/HistoryPage';


function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/history/:email" component={HistoryPage} />
            <Route path="/display/:email" component={Showcard} />
         </Switch>
       </Router> 
    </div>
  );
}


export default App;
