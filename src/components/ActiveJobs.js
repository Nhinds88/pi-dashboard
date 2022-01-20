import React, { useState } from "react";
import { useQuery } from "react-query";

// export default class ActiveJobs extends React.Component {
//     state = {
//         loading: true,
//         usd_safemoon: null,
//         usd_bitcoin: null,
//         usd_ethereum: null,
//         usd_monero: null
//     };

//     async componentDidMount() {
//         const requestURLSafemoon = 'https://api.coingecko.com/api/v3/simple/price?ids=safemoon-2&vs_currencies=usd';
//         const requestURLBitcoin = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
//         const requestURLEthereum = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
//         const requestURLMonero = 'https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=usd';
//         const responseSafemoon = await fetch(requestURLSafemoon);
//         const responseBitcoin = await fetch(requestURLBitcoin);
//         const responseEthereum = await fetch(requestURLEthereum);
//         const responseMonero = await fetch(requestURLMonero);
//         const safemoonData = await responseSafemoon.json();
//         const bitcoinData = await responseBitcoin.json();
//         const ethereumData = await responseEthereum.json();
//         const moneroData = await responseMonero.json();
//         this.setState({usd_safemoon: safemoonData.results[0], usd_bitcoin: bitcoinData.results[0], usd_ethereum: ethereumData.results[0], usd_monero: moneroData.results[0], loading: false });
//         console.log("DATA: " + safemoonData.results[0] + "!!!!!!!!!!!")
//     }

//     render() {
//         if (this.state.loading) {
//             return <div>Loading...</div>;
//         }

//         if (!this.state.usd_safemoon) {
//             return <div>No price data</div>;
//         }

//         if (!this.state.usd_bitcoin) {
//             return <div>No price data</div>;
//         }

//         if (!this.state.usd_ethereum) {
//             return <div>No price data</div>;
//         }

//         if (!this.state.usd_monero) {
//             return <div>No price data</div>;
//         }
        
//         return (
//             <div className="activeJobs">
//                 <div className="activeJobsContainer">
//                     <p>Safemoon: { this.state.usd_safemoon.usd }</p>
//                     <p>bitcoin: { this.state.usd_bitcoin.usd }</p>
//                     <p>Ethereum: { this.state.usd_ethereum.usd }</p>
//                     <p>Monero: { this.state.usd_monero.usd }</p>
//                 </div>
//             </div>
//         );
//     }    
// };

// // export default class ActiveJobs extends react.Component;

// async function getPrice(coin_url) {
//     let url = coin_url;
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }


const ActiveJobs = props => {

    // const safemoon = fetch('https://api.coingecko.com/api/v3/simple/price?ids=safemoon-2&vs_currencies=usd')
    //     .then(res => {
    //         if (res.ok) {
    //             console.log('Success!')
    //         } else {
    //             console.log('Not Successful')
    //         }
    //         res.json()
    //     })
    //     .then(data => console.log(data))
    //     .catch(error => console.log('Error'));
    // safemoon = fetch('https://api.coingecko.com/api/v3/simple/price?ids=safemoon-2&vs_currencies=usd')
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    // const [trade, setTrade] = useState({
    //   sellData: {},
    //   buyData: {},
    //   gains: 0
    // });
  
    // const [buyDate, setBuyDate] = useState("");
    // const [sellDate, setSellDate] = useState("");
    // const [volume, setVolume] = useState(0);
    // const [coin, setCoin] = useState("");

    // const coingeckoUrl = (coin, date) => {
    //   return `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}&localization=false`;
    // };

    // const coingeckoFetch = async (coin, date) => {
    //   fetch(coingeckoUrl(coin, date)).then((response) =>
    //     response.json().then((jsonData) => {
    //       return jsonData;
    //     })
    //   );
    // };

    // const safemoon = coingeckoFetch('safemoon-2', '18-01-2022');

    // console.log('Safemoon: ' + {trade.sellData.market_data?.current_price.usd })

    // async function getPrice(coin_url) {
    //     let url = coin_url;
    //     try {
    //         let res = await fetch(url);
    //         return await res.json();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // let safemoon = getPrice('https://api.coingecko.com/api/v3/simple/price?ids=safemoon-2&vs_currencies=usd');

    // console.log(safemoon.safemoon-2);
    const useGetCardData = (cryptoName, options) => {
      return useQuery(
        `${cryptoName}-card`,
        async () => {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${cryptoName}`
          );
          return await response.json();
        },
        options
      );
    };

    const formatPrice = (price) => {
      const formatConfig = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      });
    
      return formatConfig.format(price);
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const { data, isLoading } = useGetCardData('safemoon-2', {
      refetchInterval: 60000,
      staleTime: 60000
    });

    if (isLoading) return null;

    const { image, name, market_data: marketData } = data;

    return (
      <div className="activeJobs">
        <div className="activeJobsContainer">
          {/* <p>Safemoon: { trade.sellData.market_data?.current_price.usd }</p> */}
          <div className="top-data">
            {/* <img src={image?.large} alt={`${name} logo`} /> */}
            <h3 className="crypto-name">{name}</h3>
            <h4 className="crypto-price">
              {formatPrice(marketData?.current_price?.usd)}
            </h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActiveJobs;
  