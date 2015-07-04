"use strict";

import React from 'react';
import NavButton from './NavButton';

// Use Image resources via require
const Icons = {
	github: require('./styles/gh/GitHub-Mark-64px.png'),
	githubLight: require('./styles/gh/GitHub-Mark-Light-64px.png')
};

export default class Footer extends React.Component {
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


	componentDidMount() {
		this.footerNode = React.findDOMNode(this.refs.footer);

		this.footerNode.addEventListener("mouseover", this.onOver);
		this.footerNode.addEventListener("mouseout", this.onOut);
	}

	componentWillUnmount() {
		this.footerNode.removeEventListener("mouseover", this.onOver);
		this.footerNode.removeEventListener("mouseout", this.onOut);
	}

	onOver() {
		this.setState({ hovered: true });
	}

	onOut() {
		this.setState({ hovered: false });
	}


	render() {

		const footerLineClassName = this.state.hovered?'Footer-FooterLine Footer-FooterLine-Selected':'Footer-FooterLine';

		return (
			<div ref="footer" className="Footer">
				<a href="https://github.com/nilshartmann/react-webpack-example"
					 title="Go to project GitHub page"
					 target="_blank">
					<img src={this.state.hovered?Icons.github:Icons.githubLight} />
					<div className={footerLineClassName}>A React Webpack Example</div>
				</a>
				<br/>
			</div>
		)
	}
}