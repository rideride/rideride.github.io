/*import component from './component';

document.body.appendChild(component());*/

console.log('starting test.js (yeah3)');


const snoowrap = require('snoowrap');

var authenticationUrl = snoowrap.getAuthUrl({
    clientId: 'LonIowH9Qe2RzA',
    scope: ['identity'],
    redirectUri: 'https://rideride.github.io/testing3/deploy/index.html',
    permanent: true,
    state: 'fe211bebc52eb3da9bef8db6e63104d3' // a random string, this could be validated when the user is redirected back
  });

  window.location = authenticationUrl;

  const code = new URL(window.location.href).searchParams.get('code');

  function createInstance(token) {
    return new snoowrap({
      userAgent:"testing3",
      clientId:"LonIowH9Qe2RzA",
      clientSecret:"",
      refreshToken:token,
    })
  }

  const r = createInstance(code);
console.log(r.getHot());

  //window.location = authenticationUrl;

/*
const r = new snoowrap({
    client_id: 'LonIowH9Qe2RzA',
    client_secret: '',
  });

r.get_livethread('whrdxo8dg9n0').stream.on('update', console.log);
*/

console.log('ending test.js');