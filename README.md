# ramda-maybe

Wrapping [ramda](https://github.com/ramda/ramda) functions that might return `undefined` in a `Maybe`. The implementation of `Maybe` is provided by [ramda-fantasy](https://github.com/ramda/ramda-fantasy). All other ramda functions are left unchanged.

## usage
```
var R = require('ramda-maybe');

R.find(R.is(String), [ 1, 'a' ]); //=> Maybe('a')

R.add(1, 2); //=> 3
```

## wrapped functions

 * find: `(a -> Boolean) -> [a] -> Maybe(a)`
 * findLast:  `(a -> Boolean) -> [a] -> Maybe(a)`
 * head: `[a] -> Maybe(a)`
 * last: `[a] -> Maybe(a)`
 * nth: `Number -> [a] -> Maybe(a)`
 * path: `[String] -> {k: v} -> Maybe(v)`
 * prop: `String -> {k: v} -> Maybe(v)`
