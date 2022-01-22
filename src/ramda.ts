import R from "ramda"

export function R_test(msg: string): string {
  // @ts-ignore
  const greet = R.replace("{name}", R.__, "Hello, {name}!")
  return greet(msg) //=> 'Hello, Ramda!'
}
