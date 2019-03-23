import React, { Component } from 'react';

export default class ProgressBar extends Component {
	render(){
		return <div className="progressBar">
			<div className="fill" style={{width: this.props.value + '%'}}></div>
		</div>
	}
}
