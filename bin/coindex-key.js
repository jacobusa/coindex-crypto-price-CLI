const program = require('commander');
const key  = require('../commands/key');

// coindex key set => set new API key
program
    .command('set')
    .description('Set API Key -- Get at https://nomics.com')
    .action(key.set);

// coindex key show => show current API key being used
program
    .command('show')
    .description('Show API Key')
    .action(key.show);
 
// coindex key remove => remove current API key from memory
program
    .command('remove')
    .description('Remove API Key')
    .action(key.remove);

program.parse(process.argv);
