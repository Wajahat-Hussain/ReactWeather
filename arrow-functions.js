// var names = ['Asad','Anas','Basit'];
// names.forEach(function(name){
// 	console.log('forEach  : ',name);
// });

// names.forEach((name) => {
// 	console.log('Arrow Func : ',name);
// });

// names.forEach((name) => console.log('Single-Line Arrow Func : ',name));

// var returnName = (name) => name + '!';
// console.log(returnName('Marfani'));

// var person = {
// 	name: "Koder",
// 	greet: function(){
// 		names.forEach((name) =>{
// 			console.log(this.name + ' says Salam to ' + name);
// 		});
// 	}
// };
// person.greet();
function add(a,b){
	return(a + b);
}

var addStatement = (a,b) => {
	return(a + b);
}
var addExpression = (a,b) => console.log('Sum is : ',a+b);
console.log('Sum is : ',addStatement(4,5));
addExpression(10,9);