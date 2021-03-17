import React from 'react'

const Coin = ({image, name, price, symbol, volume, priceChange, marketcap}) => {
    return (
        <div className="coin-container flex justify-center">
            <div className="coin-row flex flex-row justify-items-start items-center h-15
            border-b-1 border-gray-400 w-64">
                <div className="coin flex items-center pr-3 min-w-full">
                   <img src ={image} alt="crypto"/>
                   <h1>{name}</h1>
                   <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent-red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent-green">{priceChange.toFixed(2)}%</p>
                    )
                }
                <p className="coin-volume">
                    volume: ${volume.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Coin