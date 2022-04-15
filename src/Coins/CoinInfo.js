import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function CoinInfo() {
    const { id, lang } = useParams();
    const [coin, setCoin] = useState({});
    const [description, setDescription] = useState({});
    const [localization, setLocalization] = useState({});
    const [link, setLink] = useState([]);
    const [image, setImage] = useState({});
    const [prices, setPrices] = useState({});

    var url = "https://api.coingecko.com/api/v3/coins/" + id

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setCoin(res.data);
                setDescription(res.data.description);
                setLocalization(res.data.localization);
                setLink(res.data.links.homepage);
                setImage(res.data.image);
                setPrices(res.data.market_data.current_price);
            })
            .catch((error) => alert(error));
    }, [url]);

    return (
        <>
            {coin && (<div className='coinInfo-main' key={coin.id}>
                <Card style={{ width: '70rem' }} className="bg-dark coinInfo-card">
                    <h1 className='coinInfo-h1'>{localization[lang]}</h1>
                    <hr className="coinInfo-hr"></hr>
                    <img className='coinInfo-img' src={image.large} alt=""/>
                    {description[lang] ? description[lang].replace(/<[^>]+>/g, '') : "Description not available in this language!"}
                    <h3 className='coinInfo-h3'>Prices:</h3>
                    <div>
                        {Object.keys(prices).map((price) => (
                            <p>
                                {price.toLocaleUpperCase()} : {prices[price]}
                            </p>))}
                    </div>
                    <h3 className='coinInfo-h3'>Website: <a href={link[0]}>{link[0]}</a></h3>
                    <Button variant='warning' as={Link} to="/coins"> Back </Button>
                </Card>
            </div>)}
        </>
    )
}

export default CoinInfo