# jQuery Routes

jQuery Routes is a jQuery plugin that will add routes similar to those found in
Sinatra to your javascripts. That way, if the URL in the browser bar matches a
pattern you specify, a callback function can be run. Use it to make interactive
page behaviour sensitive to anchor links, have different setup behaviour for
different pages without the need for separate javascript files or inline
blocks.

For right now you can only have routes expressed as a regular expression, but
the hope is to eventually support all the features of Rack routes.

# Examples:

 $.route(/foo/, function () { alert('foo'); });

Matches any URL containing the letters "foo" and executes the given anonymous
function.
