
import React, { Component } from 'react';

import { InfoCard } from '../components/card.js';

import icon from '../images/community-icon.svg';
import volunteering from '../data/volunteering.json';

import { sortByFields } from '../utils.js';

export default class Page extends Component {
	constructor(){
		super();

		this.orgs = volunteering.sort(sortByFields(['end', 'start']));
	}

	render() {
		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Handshake icon" width="32" height="32"/>Community involvement</h2>

				<div className="content">
					{
						this.orgs.map((org, index) => {
							return <CommunityBlock key={index} {...org} />
						})
					}
				</div>
			</div>
		);
	}
}

class CommunityBlock extends Component {
	render() {
		let org = this.props.orgName;
		if(this.props.url){
			org = <a href={this.props.url} target="_blank" rel="noopener noreferrer">{org}</a>;
		}
		return <InfoCard
				heading={this.props.title}
				subheading={<div>{org}<br/>{this.props.start + ' - ' + (this.props.end ? this.props.end : 'current')}</div>}
				iconImageURL={this.props.logo}
				iconURL={this.props.url}
				iconAlt={this.props.orgName + ' logo'}
			>
				<div dangerouslySetInnerHTML={{__html:this.props.details}} />
				<ul className="split">{
					this.props.duties.map((duty, index) => {
						return <li key={index}>{duty}</li>;
					})
				}</ul>
			</InfoCard>
	}
}

