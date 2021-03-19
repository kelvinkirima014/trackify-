import React from 'react'

const Coin = ({image, name, price, symbol, volume, priceChange, marketcap}) => {
    return (
        <div className="coin-container flex justify-center">
            <div className="coin-row flex flex-row justify-items-start items-center h-20 border-b border-solid border-gray-400 w-full">
                <div className="coin flex items-center pr-3 min-w-max">
                   <img className="h-7 w-7 mr-2" src ={image} alt="crypto"/>
                   <h1 className="mr-2">{name}</h1>
                   <p className="coin-symbol uppercase">{symbol}</p>
                </div>
                <div className="coin-data flex text-center justify-between w-full">
                    <p className="coin-price w-28">${price}</p>
                    <p className="coin-marketcap w-56">${marketcap.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent-red w-full text-red-600">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent-green w-full text-green-500">{priceChange.toFixed(2)}%</p>
                    )
                }
                <p className="coin-volume w-36">
                    volume: ${volume.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Coin