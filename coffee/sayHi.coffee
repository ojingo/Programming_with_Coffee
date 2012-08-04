# simple @ use
@sayhi = ->
	console.log("Hello with an @ sign used!")

# additional code

someName = 'user[ firstName]'
someId = 'firstName'
someValue = 'TJ Example'

field = "<input type ='text' name='#{ someName}' id='#{someId}' value='#{escape someValue}'>"
console.log field

# more stuff going

# simple expression expansion with interpolated text embedded inside DOUBLE QUOTES
text = "Add these numbers: #{1+1+1}"
console.log text

# call a function within the #{}
text = "Call a function: #{escape "Hello! Escaping FUCNTIONS!"}"
console.log text

# call a conditional within the #{} and allow choice based on solving for it
day = 'Monday'
console.log "Its a beautiful #{if day is 'Sunday' then day else "DAY!"}"

