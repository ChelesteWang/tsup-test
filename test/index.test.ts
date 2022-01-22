import { test, assert } from "vitest"
import { foo, add } from "../src"

test("simple", () => {
  assert.equal(foo, "foo")
})
test("add function", () => {
  assert.equal(add(1, 2), 3)
})
