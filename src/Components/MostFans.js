import './ChartMenu.css';
import './MostFans.css';
import { Fragment } from 'react/cjs/react.production.min';
import { CardGroup,Card} from 'react-bootstrap';
import data from '../JSONFILES/artists.json';
import { Link } from 'react-router-dom';
import chance from "../Images/chance.svg";
import kendrick from "../Images/kendrick.svg";
import soulja from "../Images/soulja.svg"
import reed from "../Images/reedo.svg"



const MostFans = () =>{
    return (
        <Fragment>
        <CardGroup className="chartgroup">
  <Card>
    <Card.Body className="chartgroup2">


<h1>MOST FANS</h1>


{/* END OF CARD */}
<Card className="indexspotlight">
    {
        data.map(recievedData=> 
            
<table>
  <tr>
    <th><img src={chance} alt="hiphopimage" className="mostfans  dababy"/></th>
    <th><h3>Chance the Rapper</h3></th>
    <th>{recievedData.genre.name}</th>
    <th>{recievedData.amount.price}</th>
  </tr>
  <tr>
  <th><img src={soulja} alt="hiphopimage" className="mostfans soulja"/></th>
    <th><h3>Chris Brown</h3></th>
    <th>{recievedData.genre.name}</th>
    <th>{recievedData.amount.price}</th>
  </tr>
  <tr>
  <th><img src={reed} alt="hiphopimage" className=" mostfans kanyewest"/></th>
    <th><h3>03 Greedo</h3></th>
    <th>{recievedData.genre.name}</th>
    <th>{recievedData.amount.price}</th>
  </tr>
  <tr>
  <th><img src={kendrick} alt="hiphopimage" className=" mostfans kendrick" /></th>
    <th><h3>Kendrick Lamar</h3></th>
    <th>{recievedData.genre.name}</th>
    <th>{recievedData.amount.price}</th>
  </tr>
</table>
            )
    }

</Card>

{/* BUTTON  */}

    {data.map(arrow=>  
    <div className="chartmenubuttons">
        <button className='arrow lessdan'><Link to="/leaderboard" className="buttonslist">{arrow.button.btnless}</Link></button>
        <button className='arrow greaterthan'><Link to="/musiswaphome" className="buttonslist">{arrow.button.btngreater}</Link></button>
        </div>
        )}
 
 
  </Card.Body>
  </Card>
  </CardGroup>
        </Fragment>
    )
};

export default MostFans;