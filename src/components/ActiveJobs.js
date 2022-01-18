const ActiveJobs = props => {
    let requestURLSafemoon = 'https://api.coingecko.com/api/v3/simple/price?ids=safemoon-2&vs_currencies=usd';
    let requestURLBitcoin = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    let requestURLEthereum = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
    let requestURLMonero = 'https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=usd';
    let requestSafemoon = new XMLHttpRequest();
    requestSafemoon.open('GET', requestURLSafemoon);
    requestSafemoon.responseType = 'json';
    requestSafemoon.send();
    let requestBitcoin = new XMLHttpRequest();
    requestBitcoin.open('GET', requestURLBitcoin);
    requestBitcoin.responseType = 'json';
    requestBitcoin.send();
    let requestEthereum = new XMLHttpRequest();
    requestEthereum.open('GET', requestURLEthereum);
    requestEthereum.responseType = 'json';
    requestEthereum.send();
    let requestMonero = new XMLHttpRequest();
    requestMonero.open('GET', requestURLMonero);
    requestMonero.responseType = 'json';
    requestMonero.send();
    
    const safemoonPrice = requestSafemoon.onload = function(){
        const safemoon = requestSafemoon.response;
        return safemoon;
    }
    requestBitcoin.onload = function(){
        const bitcoin = requestBitcoin.response;
    }
    requestEthereum.onload = function(){
        const ethereum = requestEthereum.response;
    }
    requestMonero.onload = function(){
        const monero = requestMonero.response;
    }
    
    return (
        <div className="activeJobs">
            <div className="activeJobsContainer">
                <p>Safemoon: { safemoonPrice }</p>
                {/* <p>bitcoin: { bitcoin }</p>
                <p>Ethereum: { ethereum }</p>
                <p>Monero: { monero }</p> */}
            </div>
        </div>
    );
};

export default ActiveJobs;