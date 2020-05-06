const axios = require('axios');
const colors = require('colors');

// 
class CryptoAPI{
    constructor (apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    // default coinOption = 'BTC,ETH,XRP,USDT,BCH'   default curOption = 'USD'
    async getPriceData(coinOption, curOption) {

        // try to make the RestAPI call
        try {

            // Formatter for currency conversion
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: curOption
            })


            // the actual call to the API
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

            let output = '';

            // format output to Coin symbol and name, price in curOption, rank, 1 day change, and 7 day change
            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue} | 1d PriceChange: ${formatter.format(coin['1d'].price_change).green} | 7d change: ${formatter.format(coin['7d'].price_change).green}\n`;
            });

            return output;
        } catch (error) {
            // if something goes wrong, return custom error output
            handleAPIError(error);
        }
    }
}

function handleAPIError(err){
    if (err.response.status == 401) {
        throw new Error('Your API key is invalid - Go to https://nomics.com');
    } else if (err.response.status == 404) {
        throw new Error('Your API is not responding');
    } else {
        throw new Error('Something is not working');
    }
}

module.exports = CryptoAPI;