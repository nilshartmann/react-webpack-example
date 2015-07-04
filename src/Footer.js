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
	}

	render() {
		return (
			<div className="Footer">
				<a href="https://github.com/nilshartmann/react-webpack-example"
					 title="Go to project GitHub page"
					 target="_blank">
					<NavButton
						hoverImage={Icons.github}
						image={Icons.githubLight} />
					<div className="Footer-FooterLine">A React Webpack Example</div>
				</a>
				<br/>

			</div>
		)
	}
}