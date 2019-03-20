
import React, { Component } from 'react';

import Card, { FlipCard } from '../components/card.js';

import icon from '../images/experience-icon.svg';
import '../styles/jobs.css';
import jobs from '../data/jobs.json';
import skills from '../data/skills.json';

function sortByFields(fields){
	return (a, b) => {
		if(!Array.isArray(fields)){
			fields = [fields];
		}
		for(let field of fields){
			if(a.hasOwnProperty(field) && b.hasOwnProperty(field)){
				if(a[field] < b[field]){
					return 1;
				}else if(a[field] > b[field]){
					return -1;
				}
			}else if(a.hasOwnProperty(field)){
				return 1;
			}else if(b.hasOwnProperty(field)){
				return -1;
			}
		}

		return 0;
	};
}

export default class Page extends Component {
	constructor(){
		super();

		this.jobs = jobs.sort((a,b) => {
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
		this.jobs = jobs.sort(sortByFields(['end', 'start']));
		this.skills = skills.sort(sortByFields(['level', 'name']));
	}

	render() {
		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Code icon" width="32" height="32"/>Experience</h2>

				<div className="content">

					<h3>Skills</h3>
					<div className="skills">
					{
						this.skills.map((skill, index) => {
							return <SkillBlock key={index} {...skill} />
						})
					}
					</div>

					<h3>Jobs</h3>
					<div className="jobblocks">
					{
						this.jobs.map((job, index) => {
							return <JobBlock key={index} {...job} />
						})
					}
					</div>
				</div>
			</div>
		);
	}
}

class SkillBlock extends Component {
	render() {
		let imageFile = null;
		if(this.props.imageFile){
			imageFile = this.props.imageFile;
		}else{
			imageFile = this.props.name.toLowerCase().replace(/ /g, '-') + '-icon.svg';
		}

		let stars = (this.props.level / 20).toFixed(1);

		return <FlipCard
			className="skill"
			front={
				<div className="skill-main">
					<img src={'../images/' + imageFile} width="56" height="56" alt={this.props.name} />
					<ProgressBar value={this.props.level} />
				</div>
			}
			back={
				<div className="skill-alt-view">
					<div>{this.props.name}</div>
					<div>★ {stars}</div>
				</div>
			} />

	}
}

class JobBlock extends Component {
	render() {
		return <Card heading={this.props.title} className="job">
			{ 
				this.props.logo ? (
					<a href={this.props.url} target="_blank" rel="noopener noreferrer" title={this.props.employer}>
						<img src={'../images/' + this.props.logo} width="96" height="96" alt={this.props.employer + ' logo'}/>
					</a>
				) : null
			}
			<div><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.employer}{this.props.department ? (' / '+this.props.department) : ''}</a></div>
			<div>{this.props.start} - {this.props.end ? this.props.end : 'current'}</div>
			{ this.props.description ? <div className="description" dangerouslySetInnerHTML={{__html:this.props.description}} /> : null }
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

class ProgressBar extends Component {
	render(){
		return <div className="progressBar">
			<div className="fill" style={{width: this.props.value + '%'}}></div>
		</div>
	}
}
