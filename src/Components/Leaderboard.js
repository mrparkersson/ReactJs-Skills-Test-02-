import './ChartMenu.css'

import { Fragment } from 'react/cjs/react.production.min';
import { CardGroup,Card} from 'react-bootstrap';
import data from '../JSONFILES/artists.json';
import { Link } from 'react-router-dom';
import dababy from "../Images/dababy.svg";
import chrisbrown from '../Images/chrisbrown.svg';
import kanyewest from "../Images/kanyewest.svg"
import kendrick from "../Images/kendrick.svg"


const ChartMenu = () =>{
    return (
        <Fragment>
        <CardGroup className="chartgroup">
  <Card>
    <Card.Body className="chartgroup2">


<h1>LEADERBOARD</h1>


{/* END OF CARD */}
<Card className="indexspotlight">
    {
        data.map(recievedData=> 
            
<table>
  <tr>
    <th><img src={dababy} alt="hiphopimage" className="dababy"/></th>
    <th><h3>DaBabY</h3></th>
    <th>{recievedData.genre.name}</th>
    <th>{recievedData.amount.price}</th>
  </tr>
  <tr>
  <th><img src={chrisbrown} alt="hiphopimage" className="chrisbronw"/></th>
    <th><h3>Chris Brown</h3></th>
    <th><h2>{recievedData.genre.name}</h2></th>
    <th><h2>{recievedData.amount.price}</h2></th>
  </tr>
  <tr>
  <th><img src={kanyewest} alt="hiphopimage" className="kanyewest"/></th>
    <th><h3>Kanye West</h3></th>
    <th>{recievedData.genre.name}</th>
    <th><h2></h2>{recievedData.amount.price}</th>
  </tr>
  <tr>
  <th><img src={kendrick} alt="hiphopimage" className="kendrick" /></th>
    <th><h3>Kendrick Lamar</h3></th>
    <th><h2>{recievedData.genre.name}</h2></th>
    <th><h2>{recievedData.amount.price}</h2></th>
  </tr>
</table>
            )
    }

</Card>

{/* BUTTON  */}

    {data.map(arrow=>  
    <div className="chartmenubuttons">
        <button className='arrow lessdan'><Link to="/musiswapchart" className="buttonslist">{arrow.button.btnless}</Link></button>
        <button className='arrow greaterthan'><Link to="/mostfans" className="buttonslist">{arrow.button.btngreater}</Link></button>
        </div>
        )}
 
 
  </Card.Body>
  </Card>
  </CardGroup>
        </Fragment>
    )
};

export default ChartMenu;