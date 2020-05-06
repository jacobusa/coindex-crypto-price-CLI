const program = require('commander');
const check = require('../commands/check');

// coindex check price => calls check.price() command which gets data from RestAPI
program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP,USDT,BCH')
    .option('--cur <currency>', 'Change the currency', 'USD') // coindex check price --cur=CAD
    .action((cmd) => check.price(cmd));

program.parse(process.argv);

