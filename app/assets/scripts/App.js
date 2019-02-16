import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0.");
  }
}

alert("ABC 123");

var john = new Person("John Doe", "blue");
  john.greet();
var jane = new Adult("Jane Smith", "red");
  jane.greet();
  jane.payTaxes();
