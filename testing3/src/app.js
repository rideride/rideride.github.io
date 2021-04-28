/*import component from './component';

document.body.appendChild(component());*/

console.log('starting test.js (yeah16)');


const snoowrap = require('snoowrap');


function createAuth1() {
    console.log("creating auth")
var authenticationUrl = snoowrap.getAuthUrl({
    clientId: 'LonIowH9Qe2RzA',
    scope: ['identity', 'livemanage', 'edit', 'read', 'submit'],
    redirectUri: 'https://rideride.github.io/testing3/deploy/index.html',
    permanent: true,
    state: 'fe211bebc52eb3da9bef8db6e63104d3' // a random string, this could be validated when the user is redirected back
  });

  window.location = authenticationUrl;
}

if(window.location.href.indexOf("code") == -1) { 
    createAuth1();
}
  const code = new URL(window.location.href).searchParams.get('code');

var bbb = '';
var aaa = snoowrap.fromAuthCode({
    code: code,
    userAgent: 'testing3',
    clientId: 'LonIowH9Qe2RzA',
    redirectUri: 'https://rideride.github.io/testing3/deploy/index.html'
  }).then(r => {
    window.thread = r.get_livethread('15jj2286nsulu');
    window.append_post = function(data) {
      $('.liveupdate-listing').append(`<li class="liveupdate"><a href="//reddit.com/live/15jj2286nsulu/updates/`+data.id+`" target="_blank"><time class="live-timestamp" datetime="2021-04-28T00:46:06.000Z" title="uhh">just now</time></a>

      <div class="body">
        `+data.body_html+`
      </div>
        
        <a href="/user/`+data.author.name+`" class="author" style="color: rgb(178, 34, 34);">/u/`+data.author.name+`</a>
        
      </div>
      <ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li>
      <li><span class="delete confirm-button"><button>delete</button></span></li>
      </ul></li>
      `)
    }
    window.prepend_post = function(data) {
      $('.liveupdate-listing').append(`<li class="liveupdate"><a href="//reddit.com/live/15jj2286nsulu/updates/`+data.id+`" target="_blank"><time class="live-timestamp" datetime="2021-04-28T00:46:06.000Z" title="uhh">just now</time></a>

      <div class="body">
        `+data.body_html+`
      </div>
        
        <a href="/user/`+data.author.name+`" class="author" style="color: rgb(178, 34, 34);">/u/`+data.author.name+`</a>
        
      </div>
      <ul class="buttonrow"><li><span class="strike confirm-button"><button>strike</button></span></li>
      <li><span class="delete confirm-button"><button>delete</button></span></li>
      </ul></li>
      `)
    }


    window.bbb = function(post) {
      console.log('posting start: '+Date.now());
        window.thread.addUpdate(post);
    }
    //window.bbb('test test Yeah.');
    thread.getRecentUpdates().then(myListing => {
      for(var i in myListing) {  
      append_post(myListing[i]);
      i++;
      }
      });
    window.thread.stream.on('update', data => {
      prepend_post(data);
        console.log(data.body);
        console.log(Date.now());
      });
  })

console.log('ending test.js');