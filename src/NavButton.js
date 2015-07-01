"use strict";

import React from 'react';

// Credits for :hover handling goes to https://github.com/Sitebase/cssinjs/blob/a83c22436978f1db9a6a3898d971583bba1b0c78/interaction-aware-mixin.js
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
					 onClick={this.props.onClick}
					 ref='image'
				/>
		);
	}


}
