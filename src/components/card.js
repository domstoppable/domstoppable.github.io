import React, { Component } from 'react';

export default class Card extends Component {
	render(){
		return <div {...this.props} className={'info-card' + (this.props.className ? (' '+this.props.className) : '')} >
			<div className="title">{this.props.heading}</div>
			<div className="contents">
				{this.props.children}
			</div>
		</div>
	}
}

export class FlipCard extends Component {
	render(){
		return <div {...this.props} className={'flip-card' + (this.props.className ? (' '+this.props.className) : '')} >
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