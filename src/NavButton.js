"use strict";
// --------------------------------------------------------------------------------------
// ---
// ---
// ---
// --------------------------------------------------------------------------------------
// --- Copyright (c) 2015 Nils Hartmann (http://nilshartmann.net).
// -------------------------------------------------------------------------------------
"use strict";

import React from 'react';

const Icons = {
	prev: require('./styles/prev.png'),
	next: require('./styles/next.png'),
	prevHi: require('./styles/prev-hi.png'),
	nextHi: require('./styles/next-hi.png')
};

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.onOver = this.onOver.bind(this);
		this.onOut = this.onOut.bind(this)

	}

	componentWillMount() {
		this.state = this.state || {};
		this.state.hovered = false;
	}

	getImageDomNode() {
		return React.findDOMNode(this.refs.image);
	}

	componentDidMount() {
		this.getImageDomNode().addEventListener("mouseover", this.onOver);
		this.getImageDomNode().addEventListener("mouseout", this.onOut);
	}

	componentWillUnmount() {
		this.getImageDomNode().removeEventListener("mouseover", this.onOver);
		this.getImageDomNode().removeEventListener("mouseout", this.onOut);
	}

	onOver() {
		this.setState({ hovered: true });
	}

	onOut() {
		this.setState({ hovered: false });
	}

	render() {
		return (
			<img src={this.state.hovered?this.props.hoverImage:this.props.image}
					 onClick={()=>{this.props.onClick()}}
					 ref='image'
				/>
		);
	}


}
