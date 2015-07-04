"use strict";

import React from 'react';

// Credits for :hover handling goes to https://github.com/Sitebase/cssinjs/blob/a83c22436978f1db9a6a3898d971583bba1b0c78/interaction-aware-mixin.js
export default class HoverComponent extends React.Component {
	constructor(props) {
		super(props);

		// ES7 function bind proposal (https://github.com/zenparsing/es-function-bind)
		this.onOver = ::this.onOver;
		this.onOut = ::this.onOut;

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
			<div ref='image'>{this.props.component}</div>
		);
	}


}
