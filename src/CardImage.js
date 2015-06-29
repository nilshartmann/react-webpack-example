import React from 'react';

const IMAGES = {
	landscape: require('./images/landscape.jpg'),
	flower: require('./images/flower.jpg'),
	sunset: require('./images/sunset.jpg')
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
