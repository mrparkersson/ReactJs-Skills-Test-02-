import { Fragment} from "react/cjs/react.production.min"
import '../Components/MusiSwapMenu.css'
import { CardGroup,Card, CardImg} from 'react-bootstrap'
import musi from '../Images/musi.svg'
import chart from "../Images/chart.svg"
import swap from '../Images/swap.svg'
import collab from '../Images/collab.svg'
import drops from '../Images/drops.svg'
import collections from '../Images/collections.svg'
import giveways from "../Images/giveaways.svg"
import { Link } from "react-router-dom"
import something from '../JSONFILES/artists.json'

const MusiSwapMenu =()=>{
    return (
        <Fragment>
      <CardGroup className="cardgroup">
  <Card>
    <Card.Body className="musiswapmenu">
      <Card.Title>
          <CardImg variant="top" src={musi}/>
      </Card.Title>
      {/* first container for the menu */}

   {something.map(x =>  <div className='itemsmenu'>
      <Link  to="/musiswapchart" className="listbutton"><img  alt="musi swap images" src={chart} className="chartimg"/>{x.homepage.chart}</Link>
      <Link className="listbutton"><img  alt="musi swap images" src={swap} className="chartimg"/> {x.homepage.swap}</Link>
      <Link to="/collabmining" className="listbutton"><img  alt="musi swap images" src={collab} className="chartimg"/>{x.homepage.collab}</Link>
      <Link className="listbutton"><img  alt="musi swap images" src={drops} className="chartimg"/> {x.homepage.drops}</Link>
      <Link className="listbutton"><img alt="musi swap images"  src={collections} className="chartimg"/>{x.homepage.collections}</Link>
      <Link className="listbutton"><img  alt="musi swap images" src={giveways} className="chartimg"/>{x.homepage.giveaways} </Link>
      </div> )}

     
    </Card.Body>
  </Card>
  
</CardGroup>
        </Fragment>
    )
};

export default MusiSwapMenu;