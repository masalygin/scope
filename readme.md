![](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)
[![Build Status](https://travis-ci.org/masalygin/scope.svg?branch=master)](https://travis-ci.org/masalygin/scope)

```javascript
import {get, set} from 'scope';

class A {

  constructor() {
    this::set('a', 1); // set "private" member default value
  }


  get a() {
    return this::get('a'); // get value
  }

  set a(value) {
    this::set('a', value);
  }

}


var a = new A();
console.log(a.a === 1);
a.a = 2;
console.log(a.a === 2);
```
