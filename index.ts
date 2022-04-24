interface a {
  name: string
}

interface b extends a {
  age: 20
}

const c: b = {
  name: 'hi',
  age: 20,
}

// // array
// let a: string[] = ['kim', 'park']

// // object
// let b: { name?: string } = { name: 'kim' }

// // Union type
// let c: string | number = 123

// // Type alias
// type D1 = string | number

// let d: D1 = 123

// // function
// function fuc(x: number): number {
//   return x * 2
// }

// let hello = 'kim'
// let age = 12
