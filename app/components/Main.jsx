var React = require('react');
var Nav = require('Nav');
var Main = (props) => {
	return(
		<div>
		<Nav></Nav>
		<h1>This is the main component</h1>
		{props.children}
		</div>
	);
}
module.exports = Main;