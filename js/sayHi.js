
/* my block comment test!
	this will leave all special commetary in the code
	for later use
		TRIPLE POUND FOR BLOCK COMMENTS IN PLACE!
*/


(function() {
  var a, calculateTotal, day, defaulTaxRate, field, field2, href, joinArguments, light, myAnswer, myArray, myFunction, myMatrixArray, myNoFunction, myStrangeArray, name, object, purchases, someId, someName, someValue, splatter, text, today, userExists,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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
    console.log("I can't find D!");
  }

}).call(this);
