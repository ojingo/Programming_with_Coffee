
/* my block comment test!
	this will leave all special commetary in the code
	for later use
		TRIPLE POUND FOR BLOCK COMMENTS IN PLACE!
*/


(function() {
  var day, field, field2, someId, someName, someValue, text;

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

  console.log(typeof doIexist !== "undefined" && doIexist !== null);

}).call(this);
