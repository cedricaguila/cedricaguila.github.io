document.body.appendChild(Object.assign(document.createElement("script"), { type: "text/javascript", src: "https://connect.facebook.net/en_US/sdk.js", defer: true }))

window.fbAsyncInit = function() {
    FB.init({
      appId            : '360130579428677',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v13.0'
    });
}

share = function() {
    FB.ui({
      method: 'share',
      href: 'cedricaguila.github.io'
    }, function(response) {});
}