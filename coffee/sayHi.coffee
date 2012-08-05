### my block comment test!
	this will leave all special commetary in the code
	for later use
		TRIPLE POUND FOR BLOCK COMMENTS IN PLACE!
###

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

# show how you can use triple quotes to do a heredocs wit TRIPLE QUOTES!

field2 = """
		<ul>
			<li>
				<input type ='text' name='#{ someName}' id='#{someId}' value='#{escape someValue}'>"
			</li>
		</ul>
		"""
console.log field2

# existential operator

console.log "Does x exist?\n"
console.log x?
console.log "Does text exist?\n"
console.log text?

console.log (doIexist?) + "\n"

# using isnt not and avoiding is not!

name = "mark"

console.log "The name is: #{name}!\n"
console.log "Is it mark?\n"
console.log name is "mark"
console.log "It isnt Bob?\n"
console.log name isnt "Bob"

# ok now not and the differnce between !x, not x, is not x

userExists = false

if not userExists
	console.log "The user does NOT exist!"

if userExists is false
	console.log "The userExists is FALSE is easier to write!"

if userExists?
	console.log "The userExists variable is existential!"

# watch how this renders in jscript! foo baah.

name = "Bob"

console.log name isnt "James"
console.log name is "Bob"
console.log name is not "Bob"
console.log "This one is using: is not - which ends up making everything false dammit!\n"
console.log not "1" # note that not ANYTHING will just be false! so isnt and is not work out to one always being false! AVOID!

# and and or alaises!

if true and true
	console.log "True and true is really true!\n"

if false or true
	console.log "One of these was true!\n"

# yes on off no!

myAnswer = true
console.log myAnswer is yes
console.log myAnswer is true

light = true
console.log light is on
console.log light is true

myAnswer = false
console.log myAnswer is no
console.log myAnswer is false

light = false
console.log light is off
console.log light is false

# @alias is this

object = {
	name: 'Mark'
	sayHello: -> 
		console.log "Hello #{ @name}"
}
object.sayHello()
# now @name is out of scope! undefined!
console.log @name
# inside the object{} the @name property was within scope and is able to be referenced this.name = @name

# if 

if true
	console.log "The statement was true!\n"

today = "Sunday"
if today is "Sunday"
	console.log "Today is Sunday!\n"

# if else

today = "Tuesday"
if today is "Monday"
	console.log "Today is Monday\n"
else
	console.log "Today is not Monday\n"

# more if else
today = "Sunday"

if today is "Saturday"
	console.log "Here are your toDos!"
else if today is "Sunday"
	console.log "Take a break!\n"
else
	console.log "GET TO WORK!\n"

# unless
today = "Monday"

unless today is "Sunday"
	console.log "Get to work you lazy fucking bastard!"

if today isnt "Sunday"
	console.log "Its not Sunday - so get to work!\n"

# switch
today = "Sunday"

switch today
	when "Saturday"
		console.log "Here are your toDos! for #{today}"
	when "Sunday"
		console.log "Its #{today} take a break or go to church!"
	else
		console.log "It's #{today} get to work you lazy fool!\n"

# swith with multiple in line items
today = "Monday"

switch today
  when "Sunday", "Saturday"
  	console.log "Have a nice weekend!"
  else
  	console.log "Off to work you go!\n"

# 










































































