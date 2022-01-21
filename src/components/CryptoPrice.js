import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPrice = props => {
  const [safemoonPrice, setSafemoonPrice] = useState([]);
  const [cardanoPrice, setCardanoPrice] = useState([]);
  const [moneroPrice, setMoneroPrice] = useState([]);


  useEffect(() => {
    axios
      .get (
        'https://api.coingecko.com/api/v3/coins/safemoon-2/history?date=19-01-2022&localization=false'
      )
      .then(res => {
        console.log(res.data.market_data.current_price.usd);
        setSafemoonPrice(res.data.market_data.current_price.usd)
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get (
        'https://api.coingecko.com/api/v3/coins/cardano/history?date=19-01-2022&localization=false'
      )
      .then(res => {
        console.log(res.data.market_data.current_price.usd);
        setCardanoPrice(res.data.market_data.current_price.usd)
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get (
        'https://api.coingecko.com/api/v3/coins/monero/history?date=19-01-2022&localization=false'
      )
      .then(res => {
        console.log(res.data.market_data.current_price.usd);
        setMoneroPrice(res.data.market_data.current_price.usd)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="cryptoPrice">
      <div className="cryptoPriceContainer">
        <div>
          <h3> Safemoon </h3>
        </div>
        <div>
          <p>${ parseFloat(safemoonPrice).toFixed(6) }</p>
        </div>
        <div>
          <h3> Cardano </h3>
        </div>
        <div>
          <p>${ parseFloat(cardanoPrice).toFixed(6) }</p>
        </div>
        <div>
          <h3> Monero </h3>
        </div>
        <div>
          <p>${ parseFloat(moneroPrice).toFixed(6) }</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoPrice;