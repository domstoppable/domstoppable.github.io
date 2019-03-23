
import React, { Component } from 'react';

import { InfoCard } from '../components/card.js';
import icon from '../images/publications-icon.svg';

import '../styles/publications.css';

import publications from '../data/publications.json';
import talks from '../data/talks.json';

import { parseDate } from '../utils.js';


export default class Page extends Component {
	constructor(){
		super();

		this.publications = publications;
		this.talks = talks.sort((a,b) => a.date < b.date);
	}

	render() {
		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Publications icon" width="32" height="32"/>Publications &amp; talks</h2>

				<div className="content">
					<h3>Publications</h3>
					{
						this.publications.map((publication, index) => {
							return <PublicationBlock key={index} {...publication} />
						})
					}

					<h3 style={{marginTop: "1em"}}>Talks</h3>
					{
						this.talks.map((talk, index) => {
							return <TalkBlock key={index} {...talk} />
						})
					}
				</div>
			</div>
		);
	}
}

class PublicationBlock extends Component {
	render() {
		let bits = [];
		let vol = '';
		if(this.props.volume || this.props.issue || this.props.pages){
			if(this.props.volume){
				bits.push('Vol. ' + this.props.volume);
			}
			if(this.props.issue){
				bits.push('No. ' + this.props.issue);
			}
			if(this.props.pages){
				bits.push('pp. ' + this.props.pages);
			}
			if(bits.length > 0){
				vol = '(' + bits.join(', ') + '). ';
			} 
		}

		let title = this.props.title;
		if(this.props.url){
			title = <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title}</a>
		}

		return <div className="hang">
			{this.props.authors.join(', ')}. ({this.props.date}). {title}. In <em>{this.props.journal}</em> {vol}{this.props.publisher}.
		</div>
	}
}

class TalkBlock extends Component {
	render() {
		let iconNode = null;
		if(this.props.url){
			let icon = 'link-icon.svg';
			if(this.props.icon){
				icon = this.props.icon;
			}else if(this.props.url.match(/https:\/\/.*\.?youtube\.com/)){
				icon = 'youtube-icon.svg';
			}else if(this.props.url.match(/https:\/\/.*\.google\.com/)){
				icon = 'google-drive-icon.svg';
			}else if(this.props.url.match(/https?:\/\/.*\.?greenlightgo\.org/)){
				icon = 'greenlightgo-logo.svg';
			}
			iconNode = <div>
				<img src={'../images/' + icon} alt='Link icon' width="48" height="48"/>
				<div>View</div>
			</div>;
		}

		let audience = this.props.audience;
		if(this.props.audienceURL){
			audience = <a href={this.props.audienceURL} target="_blank" rel="noopener noreferrer">{this.props.audience}</a>;
		}

		let date = parseDate(this.props.date);
		return <InfoCard
				heading={this.props.title}
				subheading={
					<div>
						{audience}<br/>
						{date.toLocaleString('en-us', {year: 'numeric', month: 'long', day: 'numeric'})}
					</div>
				}
				iconNode={iconNode}
				iconURL={this.props.url}
				urlDirectDownload={this.props.urlDirectDownload}
			>
				{this.props.description ? <div dangerouslySetInnerHTML={{__html:this.props.description}} /> : null}
			</InfoCard>;
	}
}
