/*
 * jquery.routes.js
 * 
 * jQuery Routes - Sinatra-like routes for your javascripteries.
 * 
 * (c) 2009 max thom stahl
 * 
 * Licensed under the GPL version 2
 */

// Holds functions constructed by $.route()
jQuery.routes = []

jQuery.route = function (route, callback) {
  jQuery.routes.push(function () {
    url = document.location.href.replace(/http:\/\/.*\//, '/');
    console.log(url);
    if(route.test(url)) {
      callback();
    }
  });
};

$(function () {
  for(r in jQuery.routes) {
    jQuery.routes[r]();
  }
});
