"use strict";

// Import styles used by our app
import normalize from 'normalize.css/normalize.css';
import styles from './styles/styles.css';
import React from 'react';

import GreetingCard from './GreetingCard';
import NavBar from './NavBar';
import Footer from './Footer';

export default class GreetingCardApp extends React.Component {
	constructor(props) {
		super(props);

		// ES7 function bind proposal (https://github.com/zenparsing/es-function-bind)
		this.prevClicked = ::this.prevClicked;
		this.nextClicked = ::this.nextClicked;

		this.state = {
			cardId: 0
		};
	}

	prevClicked() {
		const newCardId = (this.state.cardId === 0 ? this.props.cards.length-1 : this.state.cardId - 1);
		this.setState({cardId: newCardId});
	}

	nextClicked() {
		const newCardId = (this.state.cardId === this.props.cards.length-1 ? 0 : this.state.cardId + 1);
		this.setState({cardId: newCardId});
	}

	currentCard() {
		return this.props.cards[this.state.cardId];
	}

	render() {
		return (
			<div>
				<div className="GreetingCard">
					<GreetingCard card={this.currentCard()} />
					<NavBar onPrev={this.prevClicked} onNext={this.nextClicked} />
				</div>
				<Footer />
			</div>
		);
	}
}
