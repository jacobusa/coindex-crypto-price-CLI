const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    // sets current 'key' value to input
    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    // get current api key
    getKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No API Key Found - Get a key at https://nomics.com');
        }

        return key;
    }

    // deletes current api key in memory
    deleteKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No API Key Found - Get a key at https://nomics.com');
        }

        this.conf.delete('apiKey');

        return;
    }
}

module.exports = KeyManager;