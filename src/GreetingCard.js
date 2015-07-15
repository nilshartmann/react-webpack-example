import React from 'react';
import CardImage from './CardImage';

export default class GreetingCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 className="GreetingCardTitle">{this.props.card.message}</h1>
				<CardImage image={this.props.card.image}/>
			</div>
		);
	}
}
