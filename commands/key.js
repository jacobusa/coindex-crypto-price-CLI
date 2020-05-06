const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const {isRequired} = require('../utils/validation');

const key = {
    async set() {
        const keyManager = new KeyManager();

        // assign input from user to 'input.key'
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key'.green + ' https://nomics.com',
                validate: isRequired    // returns true if value entered
            }
        ]);
        
        // set input from prompt to 'key'
        const key = keyManager.setKey(input.key);

        if(key) {
            console.log('API Key Set'.blue);
        }
    },

    // 'coindex key show' displays current API key to console
    show() {
        try {
            const keyManager = new KeyManager;
            const key = keyManager.getKey();

            console.log('Current API Key: ', key.yellow);
            return key;
        } catch (error) {
            console.error(error.message.red);
        }
    },

    // 'coindex key remove' removes current API key from memory
    remove() {
        try {
            const keyManager = new KeyManager;
            keyManager.deleteKey();

            console.log('Key Removed'.blue);
            return;
        } catch (error) {
            console.error(error.message.red);
        }
    }
};

module.exports = key;