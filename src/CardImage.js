import React from 'react';

// Use Image resources via ES6 'import'
import landscape from './images/landscape.jpg';
import flower from './images/flower.jpg';
import sunset from './images/sunset.jpg';

const IMAGES = {
	landscape,
	flower,
	sunset
};

export default class CardImage extends React.Component {
	constructor(props) {
		super(props);
	}

	imageSrc() {
		return IMAGES[this.props.image];
	}

	render() {
		return (
			<img className="Image" src={this.imageSrc()} />
		);
	}
}
