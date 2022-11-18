const john = {
  name: "john",
  age: 18,
  sayName: function () {
    console.log(this.name);
  },
};
john.sayName();
