
import React, { Component } from 'react';

import Card from '../components/card.js';

import icon from '../images/community-icon.svg';
import volunteering from '../data/volunteering.json';

export default class Page extends Component {
	constructor(){
		super();

		this.orgs = volunteering.sort((a,b) => {
			if(a.end && b.end){
				if(a.end === b.end){
					return a.start < b.start;
				}else{
					return a.end < b.end
				}
			}else if(a.end){
				return true;
			}else if(b.end){
				return false;
			}else{
				return a.start < b.start;
			}
		});
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
		return <Card heading={this.props.orgName + ' - ' + this.props.title}>
			{ 
				this.props.logo ? (
					<a href={this.props.url} target="_blank" rel="noopener noreferrer">
						<img src={'../images/' + this.props.logo} width="96" height="96" alt={this.props.orgName + ' logo'}/>
					</a>
				) : null
			}
			<div>{this.props.start} - {this.props.end ? this.props.end : 'current'}</div>
			<div dangerouslySetInnerHTML={{__html:this.props.details}}></div>
			<ul className="split">
				{
					this.props.duties.map((duty, index) => {
						return <li key={index}>{duty}</li>;
					})
				}
			</ul>
		</Card>
	}
}

