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
