//var PI = 3.14;
//PI = 42; // stop me from doing this!

//Here is that code refactored into ES2015:
const PI = 3.14;
// PI = 42;

/* Write an ES2015 Version of Global Constants:*/
const Glob_Constant = "This is a global constant";

// console.log(Glob_Constant);

//Quiz: 
//1. The difference between var and let is that you can redeclare and reassign a var and it creates function scope, while let can't be redeclared and it creates block scope. It is possible to access a hoisted variable with var.
//2. The difference between var and const is that with const you can neither reassign nor redeclare and it creates block scope. With var you can redeclare and reassign, and you can access a hoisted variable, unlike with const.
//3. The difference between let and const is that you can reassign let but you can't reassign or redeclare with const.
//4. Hoisting is how the JS compiler works. It involves lifting or "hoisting" variables to the top of the scope in which they are declared. With var, you can access the variable name and its undefined value before it is used again. Hoisting also occurs with function declarations, so that these can be invoked "before" they are defined in a codebase. 