import MusiSwapMenu from "./Components/MusiSwapMenu";
import ChartMenu from "./Components/ChartMenu";
import {Route, Switch} from 'react-router-dom'
import Leaderboard from "./Components/Leaderboard";
import MostFans from "./Components/MostFans";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
      <MusiSwapMenu/>
      </Route>
      <Route path="/musiswaphome">
      <MusiSwapMenu/>
      </Route>
       <Route path="/musiswapchart">
         <ChartMenu/>
       </Route>
       <Route path="/leaderboard">
       <Leaderboard/>
       </Route>
      <Route path='/mostfans'>
        <MostFans/>
      </Route>

    </Switch>
  );
}

export default App;
