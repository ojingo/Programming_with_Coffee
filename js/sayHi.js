
/* my block comment test!
	this will leave all special commetary in the code
	for later use
		TRIPLE POUND FOR BLOCK COMMENTS IN PLACE!
*/


(function() {
  var Employee, Manager, User, a, anotherObject, author, bar, bob, body, book, calculateTotal, day, defaulTaxRate, end, field, field2, fire, firstFour, firstThree, foo, headers, href, joinArguments, key, letter, letters, light, log, mary, middle, middleArray, myAnswer, myArray, myFunction, myLetters, myMatrixArray, myNoFunction, myObject, myRange, myStrangeArray, name, num, obj, object, one, pageCount, person, purchases, rack, row, someId, someName, someValue, splatter, start, status, stuff, text, three, times, today, two, upperLetters, userExists, value, x, y, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _o, _p, _ref, _ref1, _ref2, _ref3, _ref4, _results, _step,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.sayhi = function() {
    return console.log("Hello with an @ sign used!");
  };

  someName = 'user[ firstName]';

  someId = 'firstName';

  someValue = 'TJ Example';

  field = "<input type ='text' name='" + someName + "' id='" + someId + "' value='" + (escape(someValue)) + "'>";

  console.log(field);

  text = "Add these numbers: " + (1 + 1 + 1);

  console.log(text);

  text = "Call a function: " + (escape("Hello! Escaping FUCNTIONS!"));

  console.log(text);

  day = 'Monday';

  console.log("Its a beautiful " + (day === 'Sunday' ? day : "DAY!"));

  field2 = "<ul>\n	<li>\n		<input type ='text' name='" + someName + "' id='" + someId + "' value='" + (escape(someValue)) + "'>\"\n	</li>\n</ul>";

  console.log(field2);

  console.log("Does x exist?\n");

  console.log(typeof x !== "undefined" && x !== null);

  console.log("Does text exist?\n");

  console.log(text != null);

  console.log((typeof doIexist !== "undefined" && doIexist !== null) + "\n");

  name = "mark";

  console.log("The name is: " + name + "!\n");

  console.log("Is it mark?\n");

  console.log(name === "mark");

  console.log("It isnt Bob?\n");

  console.log(name !== "Bob");

  userExists = false;

  if (!userExists) {
    console.log("The user does NOT exist!");
  }

  if (userExists === false) {
    console.log("The userExists is FALSE is easier to write!");
  }

  if (userExists != null) {
    console.log("The userExists variable is existential!");
  }

  name = "Bob";

  console.log(name !== "James");

  console.log(name === "Bob");

  console.log(name === !"Bob");

  console.log("This one is using: is not - which ends up making everything false dammit!\n");

  console.log(!"1");

  if (true && true) {
    console.log("True and true is really true!\n");
  }

  if (false || true) {
    console.log("One of these was true!\n");
  }

  myAnswer = true;

  console.log(myAnswer === true);

  console.log(myAnswer === true);

  light = true;

  console.log(light === true);

  console.log(light === true);

  myAnswer = false;

  console.log(myAnswer === false);

  console.log(myAnswer === false);

  light = false;

  console.log(light === false);

  console.log(light === false);

  object = {
    name: 'Mark',
    sayHello: function() {
      return console.log("Hello " + this.name);
    }
  };

  object.sayHello();

  console.log(this.name);

  if (true) {
    console.log("The statement was true!\n");
  }

  today = "Sunday";

  if (today === "Sunday") {
    console.log("Today is Sunday!\n");
  }

  today = "Tuesday";

  if (today === "Monday") {
    console.log("Today is Monday\n");
  } else {
    console.log("Today is not Monday\n");
  }

  today = "Sunday";

  if (today === "Saturday") {
    console.log("Here are your toDos!");
  } else if (today === "Sunday") {
    console.log("Take a break!\n");
  } else {
    console.log("GET TO WORK!\n");
  }

  today = "Monday";

  if (today !== "Sunday") {
    console.log("Get to work you lazy fucking bastard!");
  }

  if (today !== "Sunday") {
    console.log("Its not Sunday - so get to work!\n");
  }

  today = "Sunday";

  switch (today) {
    case "Saturday":
      console.log("Here are your toDos! for " + today);
      break;
    case "Sunday":
      console.log("Its " + today + " take a break or go to church!");
      break;
    default:
      console.log("It's " + today + " get to work you lazy fool!\n");
  }

  today = "Monday";

  switch (today) {
    case "Sunday":
    case "Saturday":
      console.log("Have a nice weekend!");
      break;
    default:
      console.log("Off to work you go!\n");
  }

  defaulTaxRate = .0625;

  console.log("The tax rate here is " + defaulTaxRate + "!");

  calculateTotal = function(subTotal, rate) {
    var tax;
    if (rate == null) {
      rate = defaulTaxRate;
    }
    console.log("The tax rate here is " + rate + "!");
    tax = subTotal * rate;
    return subTotal + tax;
  };

  purchases = 100;

  console.log("What is the total for " + purchases + " dollars in purchases?");

  console.log("Total plus tax is " + (calculateTotal(purchases)));

  purchases = 200;

  console.log("What is the total for " + purchases + " dollars in purchases?");

  console.log("Total plus tax is " + (calculateTotal(purchases)));

  purchases = 300;

  console.log("What is the total for " + purchases + " dollars in purchases?");

  console.log("Total plus tax is " + (calculateTotal(purchases, .075)) + "\n");

  myFunction = function() {
    return console.log("Do something in here!");
  };

  myFunction();

  myNoFunction = function() {
    return console.log("Doing something else here...\n");
  };

  myNoFunction();

  calculateTotal = function(subTotal, rate) {
    var tax;
    tax = subTotal * rate;
    return subTotal + tax;
  };

  console.log(calculateTotal(100, .0875));

  calculateTotal = function(subTotal, rate) {
    var tax;
    tax = subTotal * rate;
    return subTotal + tax;
  };

  console.log(calculateTotal(100, .0875));

  calculateTotal = function(subTotal, rate) {
    var tax;
    if (rate == null) {
      rate = .05;
    }
    tax = subTotal * rate;
    return subTotal + tax;
  };

  console.log(calculateTotal(100));

  href = function(text, url) {
    var html;
    if (url == null) {
      url = text;
    }
    html = "<a href='" + url + "'>" + text + "</a>";
    return html;
  };

  console.log(href("Click Here", "http://www.example.com"));

  console.log(href("http://www.example.com"));

  defaulTaxRate = function() {
    return .05;
  };

  calculateTotal = function(subTotal, rate) {
    var tax;
    if (rate == null) {
      rate = defaulTaxRate();
    }
    tax = subTotal * rate;
    return subTotal + tax;
  };

  console.log(calculateTotal(100));

  splatter = function() {
    var etc;
    etc = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log("Length: " + etc.length + ", Values: " + (etc.join(',')) + "\n");
  };

  splatter();

  splatter("a", "b", "c", "d");

  joinArguments = function() {
    var first, last, middle, middles, parts, _i, _j, _len;
    first = arguments[0], middles = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), last = arguments[_i++];
    parts = [];
    if (first != null) {
      parts.push(first.toUpperCase());
    }
    for (_j = 0, _len = middles.length; _j < _len; _j++) {
      middle = middles[_j];
      parts.push(middle.toLowerCase());
    }
    if (last != null) {
      parts.push(last.toUpperCase());
    }
    return parts.join('/');
  };

  console.log(joinArguments("a"));

  console.log(joinArguments("a", "b"));

  console.log(joinArguments("a", "B", "C", "d"));

  console.log("\n");

  splatter = function() {
    var etc;
    etc = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log("Length: " + etc.length + ", Values: " + (etc.join(',')) + "\n");
  };

  a = ["a", "b", "C", "D"];

  splatter(a);

  splatter.apply(null, a);

  myArray = ["a", "b", "C", "d", "E"];

  console.log(myArray);

  myStrangeArray = ["A", "B", "ERF", "Strange", "F", "G"];

  console.log(myStrangeArray);

  myMatrixArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "1", "2", "3"];

  console.log(myMatrixArray);

  myArray = ["a", "b", "C", "d", "E"];

  if (__indexOf.call(myArray, "b") >= 0) {
    console.log("I found b!");
  }

  if (__indexOf.call(myArray, "D") < 0) {
    console.log("I can't find D!\n");
  }

  x = "X";

  y = "Y";

  console.log("x is " + x);

  console.log("y is " + y + "\n");

  _ref = [y, x], x = _ref[0], y = _ref[1];

  console.log("x is " + x);

  console.log("y is " + y + "\n");

  rack = function() {
    return [
      200, {
        "Content-Type": "text/html"
      }, "Hello Im RACKED!"
    ];
  };

  console.log(rack());

  _ref1 = rack(), status = _ref1[0], headers = _ref1[1], body = _ref1[2];

  console.log("Status is " + status);

  console.log("Headers are " + (JSON.stringify(headers)));

  console.log("Body is " + body + "\n");

  myArray = ["a", "b", "C", "X", "d", "E", "F"];

  start = myArray[0], middle = 3 <= myArray.length ? __slice.call(myArray, 1, _i = myArray.length - 1) : (_i = 1, []), end = myArray[_i++];

  console.log("start is " + start);

  console.log("middle is " + middle);

  console.log("end is " + end + "\n");

  myArray = ["a", "b"];

  one = myArray[0], two = myArray[1], three = myArray[2];

  console.log("one = " + one);

  console.log("two = " + two);

  console.log("three = " + three + "\n");

  myRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(myRange);

  myRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(myRange);

  myRange = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  console.log(myRange);

  myRange = [10, 9, 8, 7, 6, 5, 4, 3, 2];

  console.log(myRange);

  myRange = (function() {
    _results = [];
    for (_j = 1; _j <= 50; _j++){ _results.push(_j); }
    return _results;
  }).apply(this);

  console.log(myRange.join(", "));

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  firstThree = myArray.slice(0, 3);

  console.log(firstThree);

  firstFour = myArray.slice(0, 4);

  console.log(firstFour);

  middleArray = myArray.slice(2, 5);

  console.log(middleArray);

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  [].splice.apply(myArray, [4, 4].concat(_ref2 = ['a', 'b', 'c', 'd'])), _ref2;

  console.log(myArray);

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  [].splice.apply(myArray, [4, (-1) - 4 + 1].concat(_ref3 = ['a', 'b', 'c', 'd'])), _ref3;

  console.log(myArray);

  obj = {};

  console.log(obj);

  obj = {
    firstName: "TJ",
    lastName: "Marbois"
  };

  console.log(obj);

  obj = {
    firstName: "Yulia",
    lastName: "Komisar"
  };

  console.log(obj);

  obj = {
    firstName: "TJ",
    lastName: "Marbois",
    sayName: function() {
      return "" + this.firstName + " " + this.lastName;
    }
  };

  console.log(obj);

  console.log(obj.sayName());

  foo = "FOO!";

  bar = "BAR!";

  obj = {
    foo: foo,
    bar: bar
  };

  console.log(obj);

  obj = {
    foo: foo,
    bar: bar
  };

  console.log(obj);

  myFunction = function(optionsSent) {
    return console.log(optionsSent);
  };

  myFunction({
    foo: 'FOOl!',
    bar: 'BAR!'
  });

  obj = {
    firstName: "John",
    lastName: "Doe",
    sayName: function() {
      return "" + this.firstName + " " + this.lastName;
    }
  };

  console.log(obj);

  console.log(obj.firstName);

  console.log(obj.sayName());

  console.log(obj['lastName']);

  console.log(obj['firstName']);

  console.log(obj.lastName);

  obj.firstName = "Jane";

  obj['lastName'] = "Journey";

  console.log(obj);

  console.log(obj.firstName);

  console.log(obj.lastName);

  book = {
    title: "Programming with CoffeeScript",
    author: "Mark Bates",
    chapter_1: {
      name: "Distributed Node",
      pageCount: 33
    },
    chapter_2: {
      name: "The chapter 2",
      pageCount: 44
    }
  };

  author = book.author, (_ref4 = book.chapter_1, name = _ref4.name, pageCount = _ref4.pageCount);

  console.log("Author " + author);

  console.log("Chapter 1: " + name);

  console.log("Page Count: " + pageCount);

  myLetters = ["a", "b", "c", "d", "e"];

  for (_k = 0, _len = myLetters.length; _k < _len; _k++) {
    letter = myLetters[_k];
    console.log(letter.toUpperCase());
  }

  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (_l = 0, _len1 = letters.length, _step = 4; _l < _len1; _l += _step) {
    letter = letters[_l];
    console.log(letter);
  }

  a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (_m = 0, _len2 = a.length; _m < _len2; _m++) {
    num = a[_m];
    if (num < 5) {
      console.log(num);
    }
  }

  for (_n = 0, _len3 = a.length; _n < _len3; _n++) {
    num = a[_n];
    if (num < 5) {
      console.log(num);
    }
  }

  person = {
    firstName: "Mike",
    lastName: "Rad",
    weight: 185,
    book: "Red Rose Rumble"
  };

  for (row in person) {
    stuff = person[row];
    console.log("" + row + " is " + stuff);
  }

  for (key in person) {
    value = person[key];
    if (value.length < 5) {
      console.log("" + key + " is " + value);
    }
  }

  myObject = {
    name: "Luc Besson"
  };

  for (key in myObject) {
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  Object.prototype.dob = new Date(1972, 7, 24);

  for (key in myObject) {
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  anotherObject = {
    name: "David Lynch"
  };

  for (key in anotherObject) {
    value = anotherObject[key];
    console.log("" + key + ": " + value);
  }

  myObject = {
    name: "Stanley Kubrick"
  };

  for (key in myObject) {
    if (!__hasProp.call(myObject, key)) continue;
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  Object.prototype.dob = new Date(1952, 4, 24);

  for (key in myObject) {
    if (!__hasProp.call(myObject, key)) continue;
    value = myObject[key];
    console.log("" + key + ": " + value);
  }

  anotherObject = {
    name: "Akira Kurosawa",
    dob: new Date(1999, 1, 1)
  };

  for (key in anotherObject) {
    if (!__hasProp.call(anotherObject, key)) continue;
    value = anotherObject[key];
    console.log("" + key + ": " + value + "\n");
  }

  times = function(number_of_times, callback) {
    var index;
    index = 0;
    while (index++ < number_of_times) {
      callback(index);
    }
    return null;
  };

  times(5, function(index) {
    return console.log(index);
  });

  times(6, function(index) {
    return console.log(index);
  });

  times = function(number_of_times, callback) {
    var index;
    index = 0;
    while (!(index++ >= number_of_times)) {
      callback(index);
    }
    return null;
  };

  times(5, function(index) {
    return console.log(index);
  });

  times(6, function(index) {
    return console.log(index);
  });

  myLetters = ['a', 'b', 'c', 'c', 'd', 'e'];

  for (_o = 0, _len4 = myLetters.length; _o < _len4; _o++) {
    letter = myLetters[_o];
    console.log(letter.toUpperCase());
  }

  for (_p = 0, _len5 = myLetters.length; _p < _len5; _p++) {
    letter = myLetters[_p];
    console.log(letter.toLowerCase());
  }

  upperLetters = (function() {
    var _len6, _q, _results1;
    _results1 = [];
    for (_q = 0, _len6 = myLetters.length; _q < _len6; _q++) {
      letter = myLetters[_q];
      _results1.push(letter.toUpperCase());
    }
    return _results1;
  })();

  console.log(upperLetters);

  /*
  for x in [1..5]
  	do (x) ->
  		setTimeout ->
  			console.log x
  		,1
  */


  Employee = (function() {

    function Employee() {
      Employee.hire(this);
    }

    Employee.hire = function(employee) {
      this.allEmployees || (this.allEmployees = []);
      return this.allEmployees.push(employee);
    };

    Employee.total = function() {
      console.log("There are " + this.allEmployees.length + " employees.");
      return this.allEmployees.length;
    };

    Employee.prototype.dob = function(year, month, day) {
      return this.birthDay = new Date(year, month, day);
    };

    Employee.prototype.printInfo = function() {
      console.log("My name is: " + this.attributes.name);
      console.log("I was born on: " + this.attributes.birthDay);
      if (this.attributes.salary) {
        return console.log("Salary is: " + this.attributes.salary);
      } else {
        return console.log("Salary unknown.");
      }
    };

    Employee.prototype.bonus = function() {
      return 0;
    };

    return Employee;

  })();

  Manager = (function(_super) {

    __extends(Manager, _super);

    function Manager() {
      return Manager.__super__.constructor.apply(this, arguments);
    }

    Manager.prototype.printInfo = function() {
      Manager.__super__.printInfo.apply(this, arguments);
      return console.log("My bonus is: " + (this.bonus()));
    };

    Manager.prototype.bonus = function() {
      return this.attributes.salary * .25;
    };

    Manager.total = function() {
      return console.log("There are 0 managers.");
    };

    return Manager;

  })(Employee);

  /*
  emp1 = new Employee
  	name:"Bob Marley"
  	birthDay: new Date(1600,0,1)
  	salary: 50000
  
  emp2 = new Employee
  	name: "John Jacob JingleheimerSmith"
  	birthDay: new Date(999,9,9)
  	salary: 45000
  
  manager = new Manager
  	name: "TJ Marbois"
  	birthDay: new Date(1972,5,18)
  	salary: 175000
  */


  new Employee();

  new Employee();

  new Employee();

  new Employee();

  Employee.total();

  Manager.total();

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  try {
    console.log(myArray.size());
  } catch (error) {
    console.log("Heres the error: " + error);
  }

  Array.prototype.size = function() {
    return this.length;
  };

  console.log(myArray.size());

  myArray.push(11);

  console.log(myArray.size());

  fire = function(msg, wait) {
    return setTimeout(function() {
      return console.log("Im firing in timeout! " + msg);
    }, wait);
  };

  User = (function() {

    function User(name) {
      this.name = name;
      this.sayHi = __bind(this.sayHi, this);

    }

    User.prototype.sayHi = function() {
      return console.log("Hello " + this.name + "!");
    };

    return User;

  })();

  bob = new User('bob');

  mary = new User('mary');

  log = function(callback) {
    console.log("About to execute callback!");
    callback();
    return console.log("Finished executing callback!");
  };

  log(bob.sayHi);

  log(mary.sayHi);

}).call(this);
