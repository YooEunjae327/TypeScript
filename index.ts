class to {
  a1: string;
  a2: string;
  name: string;

  constructor(a1: string, a2: string) {
    this.a1 = a1;
    this.a2 = a2;
  }

  print() {
    console.log(this.a1, this.a2);
  }
}

to.prototype.name = '1';

console.log(to.prototype);
