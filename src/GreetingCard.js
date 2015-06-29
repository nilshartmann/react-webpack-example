"use strict";

import React from 'react';
import Image from './Image';

export default class GreetingCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 className="GreetingCardTitle">{this.props.card.message}</h1>
				<Image image={this.props.card.image}/>
			</div>
		);
	}
}
