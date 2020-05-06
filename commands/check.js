const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');
const check = {
    async price(cmd){
        try {
            keyManager = new KeyManager();

            // get current API key
            const key = keyManager.getKey();

            // call CryptoAPI function using current API key
            const api = new CryptoAPI(key);
            
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

            // print successful result to console
            console.log(priceOutputData);
        } catch (error) {
            console.error(error.message.red)
        }
    }
}

module.exports = check;