console.log('starting test.js');

const snoowrap = require('snoowrap');

var authenticationUrl = snoowrap.getAuthUrl({
    clientId: 'QlCEZDzGHWgl4w',
    scope: ['identity'],
    redirectUri: 'https://rideride.github.io/lctest/test.html',
    permanent: true,
    state: 'fe211bebc52eb3da9bef8db6e63104d3' // a random string, this could be validated when the user is redirected back
  });

const r = new snoowrap({
    client_id: 'put your client id here',
    client_secret: 'put your client secret here',
    refresh_token: 'put your refresh token here'
  });

r.get_livethread('whrdxo8dg9n0').stream.on('update', console.log);

console.log('ending test.js');