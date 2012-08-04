(function() {
  var day, field, someId, someName, someValue, text;

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

}).call(this);
