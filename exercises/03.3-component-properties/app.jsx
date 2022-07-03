// Neeed help on this

import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	image: "../../.learn/assets/Dylan.png?raw=true";
	title: "Bob Dylan";
	description: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.";
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan";
		label: "Go to wikipedia";
	}
	return (
		<div className="card m-5">
			<img className="card-img-top" src={BootstrapCard.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{BootstrapCard.title}</h5>
				<p className="card-text">{BootstrapCard.description}</p>
				<a href={BootstrapCard.button.url} className="btn btn-primary">
					{BootstrapCard.button.label}
				</a>
			</div>
		</div>
	);
};

BootstrapCard.propTypes = {
	// 2) add here the new properties into the proptypes object
	title: PropType.string,
	image: PropType.string,
	description: PropType.string,
	button: PropType.object,
	url: PropType.string,
	label: PropType.string,
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
