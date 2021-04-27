/*import component from './component';

document.body.appendChild(component());*/

console.log('starting test.js (yeah10)');


const snoowrap = require('snoowrap');


function createAuth1() {
    console.log("creating auth")
var authenticationUrl = snoowrap.getAuthUrl({
    clientId: 'LonIowH9Qe2RzA',
    scope: ['identity', 'livemanage', 'edit', 'read'],
    redirectUri: 'https://rideride.github.io/testing3/deploy/index.html',
    permanent: true,
    state: 'fe211bebc52eb3da9bef8db6e63104d3' // a random string, this could be validated when the user is redirected back
  });

  window.location = authenticationUrl;
}

if(window.location.href.indexOf("code") == -1) { 
    createAuth1();
}

setTimeout(function() {
  const code = new URL(window.location.href).searchParams.get('code');

  /*
  function createInstance(token) {
    return new snoowrap({
      userAgent:"testing3",
      clientId:"LonIowH9Qe2RzA",
      clientSecret:"",
      refreshToken:token,
    })
  }
  */

snoowrap.fromAuthCode({
    code: code,
    userAgent: 'testing3',
    clientId: 'LonIowH9Qe2RzA',
    redirectUri: 'https://rideride.github.io/testing3/deploy/index.html'
  }).then(r => {
    var thread = r.get_livethread('15jj2286nsulu');
    function submitter(post) {
        thread.addUpdate(post);
    }
    submitter('test test Yeah.');
    thread.stream.on('update', data => {
        console.log(data.body);
        console.log(Date.now());
      });
  })


  //const r = createInstance(code);
//console.log(r.getHot());

  //window.location = authenticationUrl;

/*
const r = new snoowrap({
    client_id: 'LonIowH9Qe2RzA',
    client_secret: '',
  });
*/
//r.get_livethread('15jj2286nsulu').stream.on('update', console.log);


console.log('ending test.js');

}, 5000);