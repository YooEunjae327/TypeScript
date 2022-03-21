// array
let a: string[] = ["kim", "park"]

// object
let b: { name?: string } = { name: "kim" }

// Union type
let c: string | number = 123

// Type alias
type D1 = string | number

let d: D1 = 123

// function
function fuc(x: number): number {
  return x * 2
}
