document.body.appendChild(Object.assign(document.createElement("script"), { type: "text/javascript", src: "https://connect.facebook.net/en_US/sdk.js", defer: true }))

window.fbAsyncInit = function() {
    FB.init({
      appId            : '360130579428677',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v13.0'
    });
}

function shareone() {
    FB.ui({
      method: 'share',
      href: '/one.html'
    }, function(response) {});
}

function sharetwo() {
    FB.ui({
      method: 'share',
      href: '/two.html'
    }, function(response) {});
}

function sharethree() {
    FB.ui({
      method: 'share',
      href: '/three.html'
    }, function(response) {});
}