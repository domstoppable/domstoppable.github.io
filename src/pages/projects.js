
import React, { Component } from 'react';

import Card from '../components/card.js';

import icon from '../images/experience-icon.svg';
import '../styles/jobs.css';
import jobs from '../data/jobs.json';

export default class Page extends Component {
	constructor(){
		super();

		this.jobs = jobs;
		console.log(jobs);
	}

	render() {
		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Project icon" width="32" height="32"/>Projects</h2>

				<div className="content">
				</div>
			</div>
		);
	}
}

class ProjectsBlock extends Component {
	render() {
		return <Card title={this.props.title}>
		</Card>
	}
}

