import "./ChartMenu.css";

import topcharts from "../Images/topcharts.svg";
import { Fragment } from "react/cjs/react.production.min";
import { CardGroup, Card } from "react-bootstrap";
import data from "../JSONFILES/myDummyData.json";
import hiphop from "../Images/hiphop.svg";
import IndexSpotlight from "./IndexSpotlight/IndexSpotlight";
import { Link } from "react-router-dom";

const ChartMenu = () => {
  return (
    <Fragment>
      <CardGroup className="chartgroup">
        <Card>
          <Card.Body className="chartgroup2">
            <img src={topcharts} alt="top chart" className="topcharts" />

            {/* INDEX SPOTLIGHT TEXTS */}

            <IndexSpotlight />

            {/* END OF CARD */}
            <Card className="indexspotlight">
              {data.map((recievedData) => (
                <table>
                  <tr>
                    <th>
                      <img src={hiphop} alt="hiphopimage" className=" hiphop" />
                    </th>
                    <th>
                      <h2>{recievedData.artists.name}</h2>
                    </th>
                    <th>
                      <h2>{recievedData.genre.name}</h2>
                    </th>
                    <th>
                      <h2 className="price">{recievedData.amount.price}</h2>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <img src={hiphop} alt="hiphopimage" className="hiphop" />
                    </th>
                    <th>
                      <h2>{recievedData.artists.name}</h2>
                    </th>
                    <th>
                      <h2>{recievedData.genre.name}</h2>
                    </th>
                    <th>
                      <h2 className="price">{recievedData.amount.price}</h2>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <img src={hiphop} alt="hiphopimage" className=" hiphop" />
                    </th>
                    <th>
                      <h2>{recievedData.artists.name}</h2>
                    </th>
                    <th>
                      <h2>{recievedData.genre.name}</h2>
                    </th>
                    <th>
                      <h2 className="price">{recievedData.amount.price}</h2>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <img src={hiphop} alt="hiphopimage" className=" hiphop" />
                    </th>
                    <th>
                      <h2>{recievedData.artists.name}</h2>
                    </th>
                    <th>
                      <h2>{recievedData.genre.name}</h2>
                    </th>
                    <th>
                      <h2 className="price">{recievedData.amount.price}</h2>
                    </th>
                  </tr>
                </table>
              ))}
            </Card>

            {/* BUTTON  */}

            {data.map((arrow) => (
              <div className="chartmenubuttons">
                <button className="arrow lessdan">
                  <Link to="/musiswaphome" className="buttonslist">
                    {arrow.button.btnless}
                  </Link>
                </button>
                <button className="arrow greaterthan">
                  <Link to="/leaderboard" className="buttonslist">
                    {arrow.button.btngreater}
                  </Link>
                </button>
              </div>
            ))}
          </Card.Body>
        </Card>
      </CardGroup>
    </Fragment>
  );
};

export default ChartMenu;
