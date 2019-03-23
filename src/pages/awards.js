import React, { Component } from 'react';
import { InfoCard } from '../components/card.js';

import icon from '../images/awards-icon.svg';
import awards from '../data/awards.json';

import { parseDate } from '../utils.js';

export default class AcademicsPage extends Component {
	constructor(){
		super();

		this.awards = awards.sort((a, b) => a.date<b.date ? 1 : -1);
	}

	render() {
		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Awards icon" width="32" height="32"/>Awards</h2>

				<div className="content">
					<div className="degree-blocks">
					{
						this.awards.map((award, index) => {
							return <AwardBlock key={index} {...award} />
						})
					}
					</div>

				</div>
			</div>
		);
	}
}

class AwardBlock extends Component {
	render() {
		let date = parseDate(this.props.date);
		let year = date.toLocaleString('en-us', {year: 'numeric'});
		let fullDate = date.toLocaleString('en-us', {year: 'numeric', month: 'long', day: 'numeric'});

		return <InfoCard
				heading={year + ' ' + this.props.name}
				subheading={
					<div>
						<a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.org}</a><br/>
					{fullDate}
					</div>}
				iconImageURL={this.props.logo}
				iconURL={this.props.url}
			>
				<div dangerouslySetInnerHTML={{__html:this.props.details}} />
		</InfoCard>
	}
}
