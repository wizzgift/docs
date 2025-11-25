
  (function(d,t) {
    var BASE_URL="https://desk.sapniverse.com";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'LsqZ3F96E3eF7LJzQgDpUH6R',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");

window.chatwootSettings = {
  darkMode: "auto",
};
