import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';

function Coins() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=false'
            )
            .then((res) => {
                setCoins(res.data);
            })
            .catch((error) => alert('error, not working '));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text"> Search for a coin</h1>
                <form>
                    <input
                        className="coin-input"
                        type="text"
                        placeholder="search"
                        onChange={handleChange}
                    />
                </form>
            </div>

            {filteredCoins.map((coin) => {
                return (
                    <Coin
                        key={coin.id}
                        id={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}
                    />
                )
            })}
        </div>
    );
}

export default Coins