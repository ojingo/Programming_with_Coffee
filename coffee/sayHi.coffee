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

# functions!

defaulTaxRate = .0625

console.log "The tax rate here is #{defaulTaxRate}!"

calculateTotal = (subTotal, rate = defaulTaxRate) ->
	console.log "The tax rate here is #{rate}!"
	tax = subTotal * rate
	return subTotal + tax

purchases = 100

console.log "What is the total for #{purchases} dollars in purchases?"
console.log "Total plus tax is #{calculateTotal(purchases)}"

purchases = 200

console.log "What is the total for #{purchases} dollars in purchases?"
console.log "Total plus tax is #{calculateTotal(purchases)}"

purchases = 300

console.log "What is the total for #{purchases} dollars in purchases?"
console.log "Total plus tax is #{calculateTotal(purchases, .075)}\n"

# more function basics
# there is a hidden return line automagically placed for you...last line

myFunction = () ->
	console.log "Do something in here!"

myFunction()

# () are optional? but I don't like that... its not readable!
myNoFunction = ->
	console.log "Doing something else here...\n"

# but NOT optional here!
myNoFunction()

# return null or undefined on last line if you don't want them to send anything back!

# more function details

calculateTotal = (subTotal, rate) ->
	tax = subTotal * rate
	return subTotal + tax

console.log calculateTotal(100, .0875)

# you can leave off the damn paranthesis but I don't like it! and you can leave out the return!

calculateTotal = (subTotal, rate) ->
	tax = subTotal * rate
	subTotal + tax

console.log calculateTotal 100, .0875

# default argument can be set whilst going in

calculateTotal = (subTotal, rate = .05) ->
	tax = subTotal * rate
	return subTotal + tax

console.log calculateTotal(100)

# argument can default to other argument!

href = (text, url = text) ->
	html = "<a href='#{url}'>#{text}</a>"
	return html

console.log href("Click Here", "http://www.example.com")
console.log href("http://www.example.com")

# default now becomes call function from argument? ok now were gettign silly...

defaulTaxRate = -> .05

calculateTotal = (subTotal, rate = defaulTaxRate()) ->
	tax = subTotal * rate
	return subTotal + tax

console.log calculateTotal(100)

# splats! variable length arguments to a function!

splatter = (etc...) ->
	console.log "Length: #{etc.length}, Values: #{etc.join(',')}\n"

splatter()
splatter("a","b","c","d")

# splats in any argument in the list... but only ONE splats per function
# watch the indents there spanky... just spent 15 minutes trying to figure out whats wrong
# and it was the damn indents! wtf.

joinArguments = (first, middles..., last) ->
	parts = []

	if first?
		parts.push first.toUpperCase()

	for middle in middles
		parts.push middle.toLowerCase()

	if last?
		parts.push last.toUpperCase()

	return parts.join('/')

console.log joinArguments("a")
console.log joinArguments("a","b")
console.log joinArguments("a","B","C","d")
console.log ("\n")

# using splats to expand the array into the argument as well

splatter = (etc...) ->
	console.log "Length: #{etc.length}, Values: #{etc.join(',')}\n"

a = ["a","b","C","D"]
splatter(a)
splatter(a...)

# arrays!

myArray = ["a", "b", "C", "d", "E"]

console.log myArray

myStrangeArray = 
[

	"A"
	"B"
	"ERF"
	"Strange"
	"F"
	"G"

]

console.log myStrangeArray

myMatrixArray = 
[
	"1","2","3","4"
	"5","6","7","8"
	"9","1","2","3"
]

console.log myMatrixArray

# test for value in an array  ( I wonder how slow this shit is when you have a large damn array? )

myArray = ["a", "b", "C", "d", "E"]

if "b" in myArray
	console.log "I found b!"

unless "D" in myArray
	console.log "I can't find D!\n"

# swapping array places!

x = "X"
y = "Y"

console.log "x is #{x}"
console.log "y is #{y}\n"

[x,y] = [y,x]

console.log "x is #{x}"
console.log "y is #{y}\n"

# array pass back for data set up
# first array is formed with number, object, and string

rack = ->
	[200,{"Content-Type":"text/html"},"Hello Im RACKED!"]

console.log rack()

# now it assigns an array of variables and calls the function rack
# its almost like its creating a keyvalue pair based on two arrays facing each other?

[status, headers, body] = rack()

# now we print those variables as per assigned via the array
console.log "Status is #{status}"
console.log "Headers are #{JSON.stringify(headers)}"
console.log "Body is #{body}\n"


# using SPLATS and reassignment arrays - lets you pull off the ends of ANY variable length send

myArray = ["a", "b", "C", "X", "d", "E", "F"]

[start, middle..., end] = myArray

console.log "start is #{start}"
console.log "middle is #{middle}"
console.log "end is #{end}\n"

# when you have more VARIABLES than data?  the last variable has no data assigned to it - and becomes UNDEFINED

myArray = ["a","b"]

[one, two, three] = myArray

console.log "one = #{one}"
console.log "two = #{two}"
console.log "three = #{three}\n"

# ranges allow you to create variable arrays with numbers in sequence

# 1 thru 10 --- two dots between
myRange = [1..10]
console.log myRange

# 1 thru 10 ---- THREE dots between pay close attention
# leaves out the last number 10... pay attention for off by one errors!
myRange = [1...10]
console.log myRange

# reverse order as well
myRange = [10..1]
console.log myRange

myRange = [10...1]
console.log myRange

# ranges for larger arrays
myRange = [1..50]
console.log myRange.join(", ")

# at numbers larger than 22 it begins to build arrays differently 
# now slicing up arrays into different parts

myArray = [1..10]

firstThree = myArray[0..2]
console.log firstThree
firstFour = myArray[0..3]
console.log firstFour

middleArray = myArray[2..4]
console.log middleArray

# we can replace parts of an array by partial pointing
myArray = [1..10]
myArray[4..7] = ['a','b','c','d']
console.log myArray

# inject values into array - means APPEND into array - add them anywhere into the array
myArray = [1..10]
myArray[4..-1] = ['a','b','c','d']
console.log myArray

# OBJECTS!

obj = {}
console.log obj

# objects are basically key-value pairs... also called HASHES in other languages.
# no brackets needed, no commas needed, just keyvalue pairing
obj = 
	firstName: "TJ"
	lastName: "Marbois"

console.log obj

# on one line
obj = {firstName:"Yulia",lastName:"Komisar"}
console.log obj

# now adding a fucntion to that object
# this function returns string that expands from the internal variabls of this object (@ = this)
obj = 
	firstName: "TJ"
	lastName: "Marbois"
	sayName: ->
		"#{@firstName} #{@lastName}"

console.log obj
console.log obj.sayName()

# using variables to create an object with those variabls as names of keys
foo = "FOO!"
bar = "BAR!"

obj =
	foo: foo
	bar: bar

console.log obj

#instead you can do this but you MUST use brackets

obj = {
	foo
	bar
}

console.log obj

# defining an object as part of a call to a function ( sending an object thru a function call?)
myFunction = (optionsSent) ->
	console.log optionsSent

myFunction(foo: 'FOOl!', bar: 'BAR!')

# getting and setting properties in objects!

obj = 
	firstName: "John"
	lastName: "Doe"
	sayName: ->
		"#{@firstName} #{@lastName}"

# getting
console.log obj
console.log obj.firstName
console.log obj.sayName()
console.log obj['lastName']
console.log obj['firstName']
console.log obj.lastName

# setting
obj.firstName = "Jane"
obj['lastName'] = "Journey"
console.log obj
console.log obj.firstName
console.log obj.lastName

# jslint says use dot notation.... so avoid the stupid array accessor way

# extracting values from objects - I don't understand this part very well... needs reviews

book =
	title: "Programming with CoffeeScript"
	author: "Mark Bates"
	chapter_1:
		name: "Distributed Node"
		pageCount: 33
	chapter_2:
		name: "The chapter 2"
		pageCount: 44

{author, chapter_1: {name, pageCount}} = book

console.log "Author #{author}"
console.log "Chapter 1: #{name}"
console.log "Page Count: #{pageCount}"

# loops and iterations
# for loop ( taken from RUBY )
myLetters = ["a","b","c","d","e"]

for letter in myLetters
	console.log letter.toUpperCase()

# skip by 2 or by any # desired
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

for letter in letters by 4
	console.log letter

# when keyword
a = [1..10]

for num in a
	if num < 5
		console.log num

# OR with WHEN

for num in a when num < 5
	console.log num

# iteration over object keys!
# call for each KEY - give me back the VALUE of this OBJECT
# for variableNameOfKeyYouLike, variableNameOfValueYouLike of actualNameofObject

person =
	firstName: "Mike"
	lastName: "Rad"
	weight: 185
	book: "Red Rose Rumble"

for row, stuff of person
	console.log "#{row} is #{stuff}"

# iterate over objects with control

for key, value of person when value.length < 5
	console.log "#{key} is #{value}"

# use prototype to add functions or values to an existing object!

myObject = 
	name: "Luc Besson"

for key, value of myObject
	console.log "#{key}: #{value}"

Object.prototype.dob = new Date(1972,7,24)

for key, value of myObject
	console.log "#{key}: #{value}"

anotherObject =
		name: "David Lynch"

for key, value of anotherObject
	console.log "#{key}: #{value}"

# adding own to for own key

myObject = 
	name: "Stanley Kubrick"

for own key, value of myObject
	console.log "#{key}: #{value}"

Object.prototype.dob = new Date(1952,4,24)

for own key, value of myObject
	console.log "#{key}: #{value}"

anotherObject =
		name: "Akira Kurosawa"
		dob: new Date(1999,1,1)

for own key, value of anotherObject
	console.log "#{key}: #{value}\n"

# while loop with a callback
# the first function asks for number of times to loop 
# and sends in a callback link
# you loop by number of times
# then you call the pointer to the callback input
# which you also wire as a function and send in INDEX 
# then when you actually call this function below
# it takes in 5
# and sends (index) a un-named function
# then logs it 
# now once run - the loop begins
# it then sends in index++ and places it into the callback(index)
# callback(index) now maps back to 
# times 5, (index) -> which maps to
# times 5, (1) -> which then executes this function(1) = to log 1!
# when done it returns to callback(index)
# where the loop continues and this repeats giving us 12345

times = (number_of_times, callback) ->
	index = 0
	while index++ < number_of_times
		callback(index)
	return null

times 5, (index) ->
	console.log index

times 6, (index) ->
	console.log index

# use untill instead now

times = (number_of_times, callback) ->
	index = 0
	until index++ >= number_of_times
		callback(index)
	return null

times 5, (index) ->
	console.log index

times 6, (index) ->
	console.log index

# comprehensions = sticking on loops at the end of a function return....

myLetters = ['a','b','c','c','d','e']

console.log letter.toUpperCase() for letter in myLetters

for letter in myLetters 
	console.log letter.toLowerCase()

upperLetters = (letter.toUpperCase() for letter in myLetters)

console.log upperLetters

# using do keyword  notice the timer causes this to render AFTER the code below about class!
###
for x in [1..5]
	do (x) ->
		setTimeout ->
			console.log x
		,1
###
# blocked it all out because the delay was screwing up my output for stuff below

# classes! javascript has no real class support... coffeescript provides it with some simple add ons

class Employee

	# the constructor function! gets called automagically when new is called

	constructor: () ->
		Employee.hire(@)

	@hire: (employee) ->
		@allEmployees ||=[]
		@allEmployees.push employee

	@total: ->
		console.log "There are #{@allEmployees.length} employees."
		@allEmployees.length


	dob: (year,month,day) ->
		@birthDay = new Date(year, month, day)

	printInfo: () ->
		console.log "My name is: #{@attributes.name}"
		console.log "I was born on: #{@attributes.birthDay}"

		if @attributes.salary
			console.log "Salary is: #{@attributes.salary}"
		else
			console.log "Salary unknown."

	bonus: ->
		return 0


# class extends!

class Manager extends Employee

	printInfo: () ->
		super
		console.log "My bonus is: #{@bonus()}"

	bonus: ->
		@attributes.salary * .25

	@total: ->
		console.log "There are 0 managers."
		# super - CANT CALL THIS OR BOOM = Manager does NOT have access to variables of class Employee!




###
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
###


new Employee()
new Employee()
new Employee()
new Employee()

Employee.total()
Manager.total()

# prototypes

myArray = [1..10]

try
  console.log myArray.size()
catch error
  console.log "Heres the error: #{error}"

# this adds size() to all Arrays - the function takes in nothing but returns @length
# which I assume is already available internally to Arrays?

 Array::size = -> @length
 console.log myArray.size()

 myArray.push(11)
 console.log myArray.size()

# JavaScript is asynchronous - fire and forget vs halt and wait for return.

fire = (msg, wait) ->
	setTimeout ->
		console.log "Im firing in timeout! #{msg}"
	, wait

# disable to continue!

# fire("Hello!", 3000)
# fire("Goodbye!", 1000)

# callbacks!

class User

	constructor: (@name) ->

# if this function is -> then it cannot access the variables within this class!
# if this fucntion is => then it CAN access the internal class variables @name
# they say its BOUND - im still not sure what that means in practice
# or why you would want an UNBOUND function call?

	sayHi: =>
		console.log "Hello #{@name}!"

bob = new User('bob')
mary = new User('mary')

log = (callback) ->

	console.log "About to execute callback!"
	callback()
	console.log "Finished executing callback!"

log(bob.sayHi)
log(mary.sayHi)


























































































