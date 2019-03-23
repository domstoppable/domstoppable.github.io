
import React, { Component } from 'react';

import { InfoCard, FlipCard } from '../components/card.js';
import ProgressBar from '../components/progress-bar.js';

import icon from '../images/experience-icon.svg';
import '../styles/jobs.css';
import jobs from '../data/jobs.json';
import skills from '../data/skills.json';

import { sortByFields } from '../utils.js';
export default class Page extends Component {
	constructor(){
		super();

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

					<h3>Professional Experience</h3>
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
		return <InfoCard
				heading={this.props.title} className="job"
				subheading={
					<div>
						<a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.employer}{this.props.department ? (' / '+this.props.department) : ''}</a><br/>
						{this.props.start + ' - ' + (this.props.end ? this.props.end : 'current')}
					</div>
				}
				iconImageURL={this.props.logo}
				iconURL={this.props.url}
				URL={this.props.url}
				iconAlt={this.props.employer + ' logo'}
			>
				{ this.props.description ? <div className="description" dangerouslySetInnerHTML={{__html:this.props.description}} /> : null }
				<ul className="split">
					{
						this.props.duties.map((duty, index) => {
							return <li key={index}>{duty}</li>;
						})
					}
				</ul>
			</InfoCard>
	}
}
