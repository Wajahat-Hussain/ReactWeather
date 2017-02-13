var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>	
			<h3 className = "page-title">Example Component!</h3>
			<p>Here are a few example location to try out!</p>
			<ol>
				<li>
					<Link to = "/?location=Karachi">Karachi, PK</Link>
				</li>
				<li>
					<Link to = "/?location=Lahore">Lahore, PK</Link>
				</li>
			</ol>
		</div>
		);
}
module.exports = Examples;