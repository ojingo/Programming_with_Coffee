
/* my block comment test!
	this will leave all special commetary in the code
	for later use
		TRIPLE POUND FOR BLOCK COMMENTS IN PLACE!
*/


(function() {
  var day, field, field2, name, someId, someName, someValue, text, userExists;

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

}).call(this);
