console.log('starting test.js');

const snoowrap = require('snoowrap');

const r = new snoowrap({
    client_id: 'put your client id here',
    client_secret: 'put your client secret here',
    refresh_token: 'put your refresh token here'
  });

r.get_livethread('whrdxo8dg9n0').stream.on('update', console.log);

console.log('ending test.js');