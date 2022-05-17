import React, { useState, useEffect } from 'react';
import "./Crypto.css"
import axios from "axios";
import Coin from "../Coin/Coin"


const Crypto = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
            }).catch(error => console.log(error))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    }
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="coin-app">
            <div className='coin-search'>
                <h1 className='coin-text'> SEARCH A CRYPTO</h1>
                <form>
                    <input type="text" className="coin-input" placeholder='Enter a cryptocurrency' onChange={handleChange} />
                </form>
            </div>
            <div className='head-column'>
                <ul className='text-column'>
                    <li className='text-title'>SYMBOL</li>
                    <li className='text-title'>PRICE</li>
                    <li className='text-title'>VOLUME ( 24 h)</li>
                    <li className='text-title'>24HR VOLUME CHANGE %</li>
                    <li className='text-title'>MKT CAP</li>
                </ul>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}
                    />
                );
            })}
        </div>
    )
}

export default Crypto
