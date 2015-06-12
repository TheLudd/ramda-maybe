var R = require('ramda');
var Maybe = require('ramda-fantasy').Maybe;

var assoc = R.assoc;
var compose = R.compose;
var curryN = R.curryN;
var reduce = R.reduce;

var hazards = [
 'find',
 'findLast',
 'head',
 'last',
 'match',
 'nth',
 'path',
 'prop'
];

function applyMaybe(fn) {
  return curryN(fn.length, compose(Maybe, fn));
}

function replaceWithMaybe(obj, key) {
  var fn = obj[key];
  return assoc(key, applyMaybe(fn), obj);
}

var RM = reduce(replaceWithMaybe, R, hazards);
module.exports = RM;
