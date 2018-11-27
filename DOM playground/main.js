/* QUERY SELECTOR
// If multiple with same selector, will only select the first one
// See line 9
*/
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #000';

// Example of when there is more than one selector of the same name
var input = document.querySelector('input');
input.value = 'Hello world';

var submit = document.querySelector('input[type="submit"]');
//submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

// QUERYSELECTORALL //
var titles = document.querySelectorAll('.title');
titles[0].textContent = "Hello";

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
	odd[i].style.backgroundColor = '#f4f4f4';
}

var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < even.length; i++) {
	even[i].style.backgroundColor = '#ccc';
}

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
itemList.parentNode.style.backgroundColor = '#00cccc';

// parentElement
// itemList.parentElement.style.backgroundColor = '#00cccc';

// childNode
// console.log(itemList.childNodes);
// console.log(itemList.children);
// firstChild, lastChild, nextSibling, nextElementSibling, previousSibling, previousElementSibling

// createElement
// Create a div
var newDiv = document.createElement('div');

// Add a class, id and attribute
newDiv.className = 'new-div';
newDiv.id = 'new-div';
newDiv.setAttribute('title', 'hello');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// Insert to DOM
container.insertBefore(newDiv, h1);

//var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
	// document.getElementById('header-title').textContent = "Changed";
	// document.querySelector('#main').style.backgroundColor = '#f4f4f4';

	// Using event listener - e needs to be parsed
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);

	var output = document.getElementById('output');
	output.innerHTML = '<h3>'+e.target.id+'</h3>';

	// display event type
	// console.log(e.type);

	/* Get position of where button has been pressed (from window)
	console.log(e.clientX);
	console.log(e.clientY);
	*/

	/* Get position of where button has been pressed (from element)
	console.log(e.offsetX);
	console.log(e.offsetY);
	*/

	/* test if alt, ctrl, shift have been pressed when clicked
	console.log(e.altKey);
	console.log(e.ctrlKey);
	console.log(e.shiftKey);
	*/

}

var button = document.getElementById('button');
// types of even involving clicking
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

var box = document.getElementById('box');
// types of event using position of the mouse
box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

// Can be used to track mouse
box.addEventListener('mousemove', runEvent);

function runEvent(e){
	console.log('EVENT TYPE: '+e.type);
	output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><br><h3>MouseY: '+e.offsetY+'</h3>';

	// use mouse position to change the colour of the box
	box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

// types of event using keys
// itemInput.addEventListener('keyup', secondEvent);
// itemInput.addEventListener('keypress', secondEvent);
// itemInput.addEventListener('keydown', secondEvent);

// itemInput.addEventListener('focus', secondEvent);
// itemInput.addEventListener('blur', secondEvent);

// Detect cutting and pasting
// itemInput.addEventListener('cut', secondEvent);
// itemInput.addEventListener('paste', secondEvent);

// Detect any kind of input
// itemInput.addEventListener('input', secondEvent);

var select = document.querySelector('select');

// Detect any changes to drop down
select.addEventListener('change', secondEvent);

function secondEvent(e){
	console.log('EVENT TYPE: '+e.type);

	console.log(e.target.value);
	document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

// Submit event
form.addEventListener('submit', submitEvent);

function submitEvent(e){
	// Stop the default action of the submit
	e.preventDefault();
	console.log('EVENT TYPE: '+e.type);
}