## Unreleased
- Adds [`must`] that returns self for those of us who sometimes write it twice:

  ```javascript
  demand(undefined).must.be.undefined()
  ```

- Fixes a false positive in [`eql`][] when an object had some keys set to
  `undefined`.
- Adds [`the`] for a fluent chain.
- Changes [`boolean`] to not consider boxed boolean objects as booleans.
- Changes [`number`] to not consider boxed number objects as numbers.
- Changes [`string`] to not consider boxed string objects as strings.
- Changes [`true`] and [`false`] to not consider boxed boolean objects as
  either true or false.

- Adds [`resolve`] and [`reject`] for asserting on promises.  
  The former is also aliased to [`then`] and [`eventually`] for different
  language styles.

  With [Mocha](http://mochajs.org), using this will look something like:

  ```javascript
  it("must pass", function() {
    return Promise.resolve(42).must.resolve.to.equal(42)
  })
  ```

  Using [CoMocha](https://github.com/blakeembrey/co-mocha), it'll look like:
  ```javascript
  it("must pass", function*() {
    yield Promise.resolve(42).must.resolve.to.equal(42)
    yield Promise.resolve(42).must.then.equal(42)
    yield Promise.reject(42).must.reject.and.equal(42)
  })
  ```

- Adds [`with`] for a fluent chain.
- Adds [`error`] to assert on errors.  
  Similar to [`throw`], but useful for when you already have an error at hand.
- Adds [`startWith`].
- Adds [`endWith`].
- Adds [`nan`] to test `NaN`.

[`must`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.must
[`the`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.the
[`boolean`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.boolean
[`number`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.number
[`string`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.string
[`true`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.true
[`false`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.false
[`resolve`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.resolve
[`reject`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.reject
[`then`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.then
[`with`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.with
[`error`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.error
[`startWith`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.startWith
[`endWith`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.endWith
[`nan`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.nan

## 0.12.0 (May 28, 2014)
- Adds [`permutationOf`] to assert that two arrays contain the same elements.
  Thanks, [Miroslav Bajtoš][@bajtos]!

[`permutationOf`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.permutationOf
[@bajtos]: http://about.me/bajtos

## 0.11.0 (Feb 13, 2014)
- Works on other JavaScript engines besides V8 by not assuming
  `Error.captureStackTrace`. Thanks, [Dmitry Starostin][@incrop]!

[@incrop]: https://github.com/incrop

## 0.10.0 (Oct 31, 2013)
- Allows asserting `NaN`s with [`eql`] — `NaN.must.eql(NaN)`.

## 0.9.1 (Oct 31, 2013)
- Fixes [`eql`] to consider two equivalent boxed `Boolean`, `Number` or `String`
  values *eql*.  
  Previously it only did so if both were primitive (`42`) or only one was boxed
  (`new Number(42)`).

## 0.9.0 (Oct 28, 2013)
- Adds [`between`] to assert that a value is between a range.

[`between`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.between

## 0.8.0 (Oct 27, 2013)
- Allows asserting and comparing circular and self-referential objects with
  [`eql`]. Objects that are self-referential in the exact same way are
  considered *eql*.
- Displays circular and self-referential objects and arrays in assertion error
  messages properly.
- Displays object's inherited properties in assertion error messages.

## 0.7.0 (Oct 23, 2013)
- Adds [`contain`] as an alias of [`include`].

- Adds [`before`] as an alias of [`below`] to make comparing dates read more
  natural:

  ```javascript
  new Date(2000, 5, 18).must.be.before(new Date(2001, 0, 1))
  ```

- Adds [`after`] as an alias of [`above`] to make comparing dates read more
  natural:

  ```javascript
  new Date(2030, 5, 18).must.be.after(new Date(2013, 9, 23))
  ```

[`contain`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.contain
[`include`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.include
[`below`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.below
[`before`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.before
[`above`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.above
[`after`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.after

## 0.6.0 (Oct 15, 2013)
- Allows asserting both the exception constructor and its message together in
  the [`throw`] matcher:

  ```javascript
  someFunction.must.throw(RangeError, /out of bounds/)
  ```

[`throw`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.throw

## 0.5.0 (Oct 13, 2013)
- Sets the [`eql`] matcher's [`AssertionError`] diffable so some test
  runners would print out a property-by-property diff for mismatches. This helps
  visual comparison.

[`AssertionError`]: https://github.com/moll/js-must/blob/master/doc/API.md#AssertionError

## 0.4.0 (Oct 11, 2013)
- Changes [`eql`] so it also compares instances of the same class recursively
  like it does with plain objects.  
  If the instance has a `valueOf` function, however, its output is used as
  before.

[`eql`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.eql

## 0.3.0 (Oct 5, 2013)
- Allows asserting [`property`] and [`ownProperty`] on all types (such as
  functions, booleans etc.), not only objects.
- Allows asserting [`keys`] and [`ownKeys`] on all types (such as functions,
  booleans etc.), not only objects.
- Allows asserting [`enumerable`] and [`nonenumerable`] properties on all
  types (such as functions, booleans etc.), not only objects.

[`nonenumerable`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.nonenumerable
[`ownProperty`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.ownProperty

## 0.2.0 (Sep 26, 2013)
- Fails gracefully if property matchers ([`property`],
  [`enumerable`] etc.) are used on non-objects.
- Adds the [`keys`] matcher to test if an object has all
  the expected keys.  
  Takes inherited keys into account just like the [`empty`] and [`property`]
  matchers.
- Adds the [`ownKeys`] matcher to test if an object has all the expected keys
  of its own.

[`empty`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.empty
[`enumerable`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.enumerable
[`property`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.property
[`keys`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.keys
[`ownKeys`]: https://github.com/moll/js-must/blob/master/doc/API.md#Must.prototype.ownKeys

## 0.1.338 (Sep 26, 2013)
- Fixes Must.js's own tests on Windows thanks to [Bart van der Schoor][bartvds].
[bartvds]: https://github.com/Bartvds

## 0.1.337 (Sep 24, 2013)
- First release. Must-have!
