import "./ChartMenu.css";
import { Fragment } from "react/cjs/react.production.min";
import { CardGroup, Card, Dropdown } from "react-bootstrap";
import data from "../JSONFILES/artists.json";
import { Link } from "react-router-dom";
import dababy from "../Images/dababy.svg";
import chrisbrown from "../Images/chrisbrown.svg";
import kanyewest from "../Images/kanyewest.svg";
import kendrick from "../Images/kendrick.svg";
import { useState } from "react";

const ChartMenu = () => {
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [artistSelect, setArtistSelect] = useState("");

  const enteredDataHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const onBetHandler = (e) => {
    e.preventDefault();
    if (+enteredAmount === 0) {
      return;
    } else if (artistSelect && enteredAmount) {
      setSelectedArtists([
        ...selectedArtists,
        {
          name: artistSelect.slice(1),
          genre: "Hip-hop",
          betAmount: enteredAmount,
        },
      ]);
      setArtistSelect("");
      setEnteredAmount("");
    }
  };

  const renderImage = (name) => {
    switch (name.toLowerCase()) {
      case "dababy":
        return dababy;
      case "chrisbrown":
        return chrisbrown;
      case "kanyewest":
        return kanyewest;
      case "kendrick":
        return kendrick;

      default:
        return;
    }
  };

  return (
    <Fragment>
      <CardGroup className="chartgroup">
        <Card>
          <Card.Body className="chartgroup2">
            {data.map((x) => (
              <h1>{x.leaderboard}</h1>
            ))}
            <Dropdown
              onSelect={(e) => {
                setArtistSelect(e);
              }}
            >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select an Artist
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#dababy">DaBaby</Dropdown.Item>
                <Dropdown.Item href="#chrisbrown">Chris Brown</Dropdown.Item>
                <Dropdown.Item href="#kanyewest">Kanye West</Dropdown.Item>
                <Dropdown.Item href="#kendrick">Kendrick Lamar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <form className="beting" onSubmit={onBetHandler}>
              <input
                type="number"
                value={enteredAmount}
                placeholder="enter amount"
                className="userinput"
                onChange={enteredDataHandler}
              />
              <button className="betbutton userinput" type="submit">
                Bet
              </button>
              <br />

              {/* END OF CARD */}
              <Card className="indexspotlight">
                <table className="artistTable">
                  {selectedArtists.map((artist) => (
                    <tr>
                      <th>
                        <img
                          src={renderImage(artist.name)}
                          alt="hiphopimage"
                          className="dababy"
                        />
                      </th>
                      <th>
                        <h3>{artist.name}</h3>
                      </th>
                      <th>
                        <h2>{artist.genre}</h2>
                      </th>
                      <th>
                        <h2 className="leaderprice">$ {artist.betAmount}</h2>
                      </th>
                    </tr>
                  ))}
                </table>
              </Card>
            </form>
            {/* BUTTON  */}

            {data.map((arrow) => (
              <div className="chartmenubuttons">
                <button className="arrow lessdan">
                  <Link to="/musiswapchart" className="buttonslist">
                    {arrow.button.btnless}
                  </Link>
                </button>
                <button className="arrow greaterthan">
                  <Link to="/mostfans" className="buttonslist">
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
