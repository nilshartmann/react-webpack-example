"use strict";

import React from 'react';
import GreetingCard from './GreetingCard';

export default class GreetingCardApp extends React.Component {
	constructor(props) {
		super(props);

		this.prevClicked = this.prevClicked.bind(this);
		this.nextClicked = this.nextClicked.bind(this);

		this.state = {
			cardId: 0
		}
	}

	prevClicked() {
		const newCardId = (this.state.cardId === 0 ? this.props.cards.length-1 : this.state.cardId - 1);
		this.setState({cardId: newCardId});
	}

	nextClicked() {
		const newCardId = (this.state.cardId > this.props.cards.length-1 ? 0 : this.state.cardId + 1);
		this.setState({cardId: newCardId});

	}

	currentCard() {
		return this.props.cards[this.state.cardId];
	}

	render() {
		return (
			<div className="GreetingCard">
				<GreetingCard card={this.currentCard()} />
				<button onClick={this.prevClicked} className="NavButton">Previous</button><button  onClick={this.nextClicked}className="NavButton">Next</button>
			</div>
		);
	}
}
