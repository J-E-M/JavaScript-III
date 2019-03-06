/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.window binding: when the 'this' keyword is used in the global scope, it's default value will be the window object.
* 2.implicit binding:when calling a function with a dot, the object before the dot is what 'this' will be bound to.
* 3. explicit binding: explicitly telling a function what object to use for this, by using .call or .apply
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var myFunction = function() {
   console.log(this);
}

myFunction();

// Principle 2

// code example for Implicit Binding

function imp(){
	console.log(this.a);
}

var obj = {
	a:2,
	imp:imp
};

obj.imp()

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding

function sayName() {
	console.log(this.name);
}

var person = {
	name:'Javon'
}

sayName.call(person);
