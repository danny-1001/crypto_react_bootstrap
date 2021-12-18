import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Coins from "./Components/Coins";
import NavBar from "./Components/NavBar";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Container fluid>
      <NavBar />
      <div className="coin-app container-fluid">
        <div className="coin-search container-fluid p-3 d-flex align-items-center justify-content-center">
          <h1 className="coin-text">Search Currency</h1>
        </div>
        <div className="coin-search container-fluid d-flex align-items-center justify-content-center">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input align-items-center justify-content-center container-fluid"
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.market_cap}
            />
          );
        })}
        <Footer />
      </div>
    </Container>
  );
}

export default App;
