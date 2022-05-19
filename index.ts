class a {
  //status: number;
  message: string;

  constructor(message: string) {
    //this.status = status;
    this.message = message;
  }

  static success(message: string) {
    return new a(message);
  }
}

console.log(a.success('sdsa'));

console.error(e);
