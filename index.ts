class a {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  draw() {
    console.log(
      `이름은 ${this.name}, 나이는 ${this.age}, 이메일은 ${this.email}입니다.`,
    );
  }
}

class b extends a {
  name: string;
  constructor(name: string, age: number, email: string, name2: string) {
    super(name, age, email);
    this.name = name2;
  }

  print() {
    console.log(this.name, super.name());
  }
}

const testing = new b('홍길동', 20, 'tomato@gmail.com', 'hello');

testing.print();
