'use strict';

var fs = require('fs');
var path = require('path');
var unified = require('unified');
var stringify = require('remark-stringify');
var u = require('unist-builder');
var vfile = require('to-vfile');
var bail = require('bail');
var not = require('not');
var hidden = require('is-hidden');

var pkg = JSON.parse(fs.readFileSync('package.json'));
var c1b = pkg.repository + '/blob/master/class-1.md#bar-chart';
var c2r = pkg.repository + '/blob/master/class-2.md#do-you-read-me';
var url = pkg.homepage + 'class-1-bar/';
var code = pkg.repository + '/blob/master/site/class-1-bar/';

var base = path.join('site', 'class-1-bar');

var projects = fs
  .readdirSync(base)
  .filter(not(hidden))
  .filter(directory);

vfile.write({
  path: path.join('site', 'class-1-bar', 'readme.md'),
  contents: unified().use(stringify).stringify(u('root', [
    u('heading', {depth: 1}, [
      u('text', 'Bar Chart (Class 1) and Readme (Class 2)')
    ]),
    u('paragraph', [
      u('text', 'Each chart was made for '),
      u('link', {url: c1b}, [u('text', 'Class 1: Bar chart')]),
      u('text', '. Each '),
      u('inlineCode', 'readme.md'),
      u('text', ' for '),
      u('link', {url: c2r}, [u('text', 'Class 2: Do you read me?!')])
    ]),
    u('heading', {depth: 2}, [
      u('text', 'Projects')
    ]),
    u('list', {ordered: false}, projects.map(listItem))
  ]))
}, bail);

function listItem(username) {
  return u('listItem', [
    u('paragraph', [
      u('link', {url: 'https://github.com/' + username}, [
        u('strong', [u('text', '@' + username)])
      ]),
      u('text', ' ('),
      u('link', {url: url + username}, [u('text', 'chart')]),
      u('text', ' · '),
      u('link', {url: code + username + '#readme'}, [u('text', 'readme')]),
      u('text', ')')
    ])
  ]);
}
function directory(name) {
  return fs.statSync(path.join(base, name)).isDirectory();
}
