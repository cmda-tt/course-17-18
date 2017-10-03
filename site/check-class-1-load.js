/* eslint-env browser */
/* global d3 */

var slice = [].slice;
var own = {}.hasOwnProperty;

/* Delay to check for XHR results.
 * This script is run to XHR files on `localhost`,
 * so we can set it pretty low. */
var delay = 1000;

var checks = ['csv', 'json'];

/* Start spying now. */
if ('d3' in window) {
  spy(d3);
}

spy(console);

window.addEventListener('load', onload);

function onload() {
  if (!(8002 in localStorage)) {
    var h1 = document.createElement('h1');
    h1.style.fontFamily = 'Comic Sans MS';
    h1.style.color = 'red';
    h1.textContent = 'Check your console!';
    document.body.appendChild(h1);
  }

  /* Check location. */
  if (window.location.hostname !== 'localhost') {
    return warn('Make sure to follow step E!');
  }

  /* Check title. */
  var title = document.title;

  if (!title || title === '@username' || title === '@') {
    return warn('Update the `<title>` with your GitHub username');
  }

  if (title.indexOf('@') !== 0) {
    return warn('Start your GitHub username in the `<title>` with an `@`');
  }

  var username = title.slice(1);

  /* Be friendly. */
  console.log('Hi @%s 👋', username);

  /* Check if `dinners.txt` exists. Continue with `rest` if it does. */
  fetch('./dinners.txt')
    .then(alive)
    .then(rest, warn);
}

function rest() {
  /* Stop bugging. */
  localStorage[8002] = true;

  /* Check if d3 is loaded. */
  if (!('d3' in window)) {
    return warn('Add a `<script>` pointing to the d3 library');
  }

  if (parseInt(d3.version, 10) < 4) {
    return warn('Add a `<script>` pointing to d3 version 4 or higher');
  }

  setTimeout(xhrs, delay);
}

function xhrs() {
  var length = checks.length;
  var index = -1;

  while (++index < length) {
    check(checks[index]);
  }

  if (!checks.every(name => '8003-' + name in localStorage)) {
    return;
  }

  if (comments(document.documentElement).length !== 0) {
    return warn('Almost done! First, remove all the comments in your HTML');
  }

  console.info([
    'Now, remove this script. When that’s done, you can continue with step H.',
    'There won’t be any more assertions though. You’re on your own! Good luck! 👍'
  ].join('\n'));
}

function check(name) {
  var calls = d3._calls;
  var id = '8003-' + name;
  var logId = id + '-log';
  var anchor = document.createElement('a');
  var expected = 'index.' + name;
  var call;
  var data;

  if (!calls) {
    return warn('First include d3, then our code, and finally your own code');
  }

  if (!own.call(calls, name)) {
    return warn('Use `d3.' + name + '` to load your file');
  }

  if (calls[name].length !== 1) {
    return warn('Call `d3.' + name + '` once');
  }

  call = calls[name][0];
  anchor.href = call.args[0];

  if (anchor.pathname !== '/' + expected) {
    return warn('Load `' + expected + '` with `d3.' + name + '`');
  }

  if (!own.call(call, 'result')) {
    return warn('Pass a callback to `d3.' + name + '`');
  }

  if (call.result[0] !== null) {
    return warn('Make sure `d3.' + name + '` does not fail. Did you pass in the correct path? Does it exist? Is it valid?');
  }

  data = call.result[1];

  if (!Array.isArray(data)) {
    return warn('Make sure `' + expected + '` contains an array, not `' + data + '`');
  }

  if (name === 'csv' && invalidHeader(data)) {
    return warn('Add a header row to `' + expected + '`');
  }

  if (data.length < 3) {
    return warn('Add at least 3 records in `' + expected + '`');
  }

  var logged = (console._calls.log || []).some(function (log) {
    return log.args.indexOf(data) !== -1;
  });

  if (!logged && !(logId in localStorage)) {
    return warn('Add a `console.log` to log the result of loading `' + expected + '`');
  }

  localStorage[logId] = true;

  if (!(id in localStorage)) {
    console.info('Your `' + expected + '` looks perfect! 🎉');
    localStorage[id] = true;
  }
}

function warn(err) {
  console.assert(false, String(err));
}

/* Fail on non-200 response codes. */
function alive(response) {
  if (response.status !== 200) {
    throw new Error('`' + response.url + '` could not be found');
  }
}

/* Fail on keys that look like dates. */
function invalidHeader(values) {
  var invalid = /(\d\d){1,2}[-\\/]\d{1,2}[-\\/]\d{1,2}/;
  var length = values.length;
  var index = -1;
  var value;
  var key;

  while (++index < length) {
    value = values[index];
    for (key in value) {
      if (invalid.test(key)) {
        return true;
      }
    }
  }

  return false;
}

function comments(node) {
  var comment = node.COMMENT_NODE;
  var result = [];
  var children = node.childNodes;
  var length = children.length;
  var index = -1;
  var child;

  while (++index < length) {
    child = children[index];
    if (child.nodeType === comment) {
      result.push(child);
    } else {
      result = result.concat(comments(child));
    }
  }

  return result;
}

function spy(value) {
  var calls = {};
  var key;

  value._calls = calls;

  for (key in value) {
    if (typeof value[key] === 'function') {
      value[key] = overload(value[key], key);
    }
  }

  function overload(fn, key) {
    return overloaded;

    /* Use many params: d3 does different stuff based on `length` on `fn`. */
    /* eslint-disable max-params, no-unused-vars */
    function overloaded($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
      /* eslint-enable max-params, no-unused-vars */
      var info = {args: slice.call(arguments)};
      var callback;

      if (checks.indexOf(key) !== -1) {
        callback = arguments[1];
        arguments[1] = overloadedCallback;
      }

      if (own.call(calls, key)) {
        calls[key].push(info);
      } else {
        calls[key] = [info];
      }

      return fn.apply(this, arguments);

      function overloadedCallback(err, result) {
        info.result = [err, result];
        return callback.apply(this, arguments);
      }
    }
  }
}
