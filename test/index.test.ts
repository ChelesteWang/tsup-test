import { test, assert } from "vitest"
import { foo, add, R_test } from "../src"

test("simple", () => {
  assert.equal(foo, "foo")
})
test("add function", () => {
  assert.equal(add(1, 2), 3)
})

test("ramda function", () => {
  assert.equal(R_test("ramda"), "Hello, Ramda!")
})
