function Employee(firstName, lastName, age, gender, employeeNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.gender= gender,
    this.employeeNumber = employeeNumber
};
var krassy = new Employee("Krasimira", "Petkova", 24, "f", 27560000);
var ivan = new Employee("Ivan", "Mishev", 25, "m", 27560001);
var petyo = new Employee("Petyo", "Kostakov", 25, "m", 27560002);

console.log(krassy);
console.log(ivan);
console.log(petyo);
