// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// const john = new Person("john", 20);

//======
function Person(name, birthday) {
  this.name = name;
  this.birthday = new Date(birthday);
}
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return ageDate.getUTCFullYear() - 1970;
};
const john = new Person("john", "10-10-1980");
const mary = new Person("mary", "10-10-1999");
console.log(john.calculateAge());
console.log(mary.calculateAge());
