<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# uncurry

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Transform a curried function into a function invoked with multiple arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-uncurry
```

</section>

<section class="usage">

## Usage

```javascript
var uncurry = require( '@stdlib/utils-uncurry' );
```

#### uncurry( fcn\[, arity]\[, thisArg] )

Transforms a curried function into a function invoked with multiple arguments.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function add( x ) {
    return function add( y ) {
        return x + y;
    };
}

var fcn = uncurry( add );

var sum = fcn( 2, 3 );
// returns 5
```

To enforce a fixed number of parameters, provide an `arity` argument.

<!-- run throws: true -->

<!-- eslint-disable no-restricted-syntax -->

```javascript
function add( x ) {
    return function add( y ) {
        return x + y;
    };
}

var fcn = uncurry( add, 2 );

var sum = fcn( 9 );
// throws <Error>
```

To specify an execution context, provide a `thisArg` argument.

<!-- eslint-disable no-invalid-this -->

```javascript
function addX( x ) {
    this.x = x;
    return addY;
}

function addY( y ) {
    return this.x + y;
}

var fcn = uncurry( addX, {} );

var sum = fcn( 2, 3 );
// returns 5
```

The function supports providing both an `arity` and execution context.

<!-- run throws: true -->

<!-- eslint-disable no-invalid-this -->

```javascript
function addX( x ) {
    this.x = x;
    return addY;
}

function addY( y ) {
    return this.x + y;
}

var fcn = uncurry( addX, 2, {} );

var sum = fcn( 2, 3 );
// returns 5

sum = fcn( 4 );
// throws <Error>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var curry = require( '@stdlib/utils-curry' );
var uncurry = require( '@stdlib/utils-uncurry' );

var uncurried;
var curried;
var bool;
var out;
var i;

function add( x, y, z, w, t, s ) {
    return x + y + z + w + t + s;
}

out = add( 0, 10, 20, 30, 40, 50 );
// returns 150

// Transform `add` into a curried function:
curried = curry( add );
out = curried;
for ( i = 0; i < add.length; i++ ) {
    out = out( i*10 );
}
bool = ( out === 150 );
// returns true

// Uncurry a curried function:
uncurried = uncurry( curried );

out = uncurried( 0, 10, 20, 30, 40, 50 );
// returns 150
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-uncurry.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-uncurry

[test-image]: https://github.com/stdlib-js/utils-uncurry/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-uncurry/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-uncurry/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-uncurry?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-uncurry
[dependencies-url]: https://david-dm.org/stdlib-js/utils-uncurry/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-uncurry/main/LICENSE

</section>

<!-- /.links -->
