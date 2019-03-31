import React, { Component } from 'react';

export default class Card extends Component {
	render(){
		return <div className={'info-card' + (this.props.className ? (' '+this.props.className) : '')} >
			<div className="title">{this.props.heading}</div>
			<div className="contents">
				{this.props.children}
			</div>
		</div>
	}
}

export class InfoCard extends Component {
	render(){
		let icon = null;

		if(this.props.iconNode){
			icon = this.props.iconNode;
		}else if(this.props.iconImageURL){
			icon = <img src={'../images/' + this.props.iconImageURL} alt='Link icon' width="96" height="96"/>
		}

		if(icon){
			icon = <a className="icon" href={this.props.iconURL} target={this.props.urlDirectDownload ? '' : '_blank'} rel="noopener noreferrer" alt={this.props.iconAlt ? this.props.iconAlt : 'icon'}>
					{icon}
				</a>
		}

		return <Card {...this.props}>
			{icon}
			{this.props.subheading ? <div className="subheading">{this.props.subheading}</div> : null}
			<div className="details">{this.props.children}</div>
		</Card>;
	}
}

export class FlipCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			flipped: props.flipped,
		}
	}

	render(){
		return <div {...this.props} className={'flip-card' + (this.state.flipped ? ' flipped' : '') + (this.props.className ? (' '+this.props.className) : '')} >
			<div className="flip-card-inner">
				<div className="flip-card-front">
					{this.props.front}
				</div>
				<div className="flip-card-back">
					{this.props.back}
				</div>
			</div>
		</div>
	}
}

export function twirlCards(interCardDelay=85, duration=1000, identifierClass='flip-card', flipClass='flipped'){
	let flipCards = document.getElementsByClassName(identifierClass);
	for(let i=0; i<flipCards.length; i++){
		let card = flipCards[i];
		
		window.setTimeout(()=>card.classList.add(flipClass), i*interCardDelay);
		window.setTimeout(()=>card.classList.remove(flipClass), i*interCardDelay + duration);
	}
}
