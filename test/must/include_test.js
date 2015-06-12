var Must = require("../..")
var assert = require("./assert")

describe("Must.prototype.include", function() {
  // Allow using new String:
  /* jshint -W053 */

  describe("given String", function() {
    var literal = "Hello! How are you?"
    var object = new String(literal)

    it("must pass if given string literal includes string literal", function() {
      assert.pass(function() { Must(literal).include("How") })
    })

    it("must fail if given string literal does not include string literal",
      function() {
      assert.fail(function() { Must(literal).include("good") })
    })

    it("must pass if given string literal includes string object", function() {
      assert.pass(function() {
        Must(literal).include(new String("How"))
      })
    })

    it("must fail if given string literal does not include string object",
      function() {
      assert.fail(function() { Must(literal).include(new String("good")) })
    })

    it("must pass if given string object includes string literal", function() {
      assert.pass(function() { Must(object).include("How") })
    })

    it("must fail if given string object does not include string literal",
      function() {
      assert.fail(function() { Must(object).include("good") })
    })

    it("must pass if given string object includes string object", function() {
      assert.pass(function() {Must(object).include(new String("How"))})
    })

    it("must fail if given string object does not include string object",
      function() {
      assert.fail(function() { Must(object).include(new String("good")) })
    })
  })

  describe("given Array", function() {
    it("must pass if given array includes number literal", function() {
      assert.pass(function() { Must([1, 2, 3]).include(2) })
    })

    it("must fail if given array does not include number literal", function() {
      assert.fail(function() { Must([1, 2, 3]).include(42) })
    })

    it("must fail if given array includes equivalent number", function() {
      assert.fail(function() { Must([1, 2, 3]).include(new Number(2)) })
    })
  })

  describe("given Object", function() {
    it("must pass if given object includes number literal", function() {
      assert.pass(function() { Must({a: 1, b: 2, c: 3}).include(2) })
    })

    it("must fail if given array does not include number literal", function() {
      assert.fail(function() { Must({a: 1, b: 2, c: 3}).include(42) })
    })

    it("must fail if given array includes equivalent number", function() {
      var obj = ({a: 1, b: 2, c: 3})
      assert.fail(function() { Must(obj).include(new Number(2)) })
    })
  })

  require("./_assertion_error_test")(function() {
    Must([1, 2, 3]).include(42)
  }, {
    actual: [1, 2, 3],
    expected: 42,
    message: "[1,2,3] must include 42"
  })

  describe(".not", function() {
    function not() { Must([1, 42, 3]).not.include(42) }

    it("must invert the assertion", function() {
      assert.fail(not)
    })

    require("./_assertion_error_test")(not, {
      actual: [1, 42, 3],
      expected: 42,
      message: "[1,42,3] must not include 42"
    })
  })
})