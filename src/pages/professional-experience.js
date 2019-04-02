
import React, { Component } from 'react';

import { InfoCard, FlipCard, twirlCards } from '../components/card.js';
import ProgressBar from '../components/progress-bar.js';

import icon from '../images/experience-icon.svg';
import '../styles/jobs.css';
import jobInfo from '../data/jobs.json';
import skills from '../data/skills.json';

import { sortByFields } from '../utils.js';
export default class Page extends Component {
	constructor(){
		super();

		let {categories, jobs} = jobInfo;

		this.categories = categories;
		this.jobs = jobs.sort(sortByFields(['end', 'start']));
		this.skills = skills.sort(sortByFields(['level', 'name']));
	}

	componentDidMount(){
		window.setTimeout(()=>twirlCards(25, 2000), 1000);
	}

	render() {
		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Code icon" width="32" height="32"/>Experience</h2>

				<div className="content">
					<div className="intro">
						<p>After a decade in the tech industry, I set out to learn new ways to solve problems. With a professional background primarily in software engineering, I have designed, developed, and deployed countless programs, web-sites, mobile apps, plugins, and libraries for a wide variety of employers and clients, from healthcare providers to local artists. Presently, I'm a research assistant studying and testing theories on perception and cognition, and I occassionally do tech consulting and contract work.</p>
						<p>I'm optimistic that my career path will allow me to use what I know to improve lives.</p>
					</div>

					<h3>Skills</h3>
					<div className="skills">
					{
						this.skills.map((skill, index) => {
							return <SkillBlock key={index} {...skill} />
						})
					}
					</div>

					<h3>Professional Experience</h3>
					{
						this.categories.map((category, index) => {
							return <div key={index} className="job-category">
									<details open="1">
										<summary>
											<h4>{category}</h4>
										</summary>
										{
											this.jobs.filter((t)=>t.category===category).map((job, index) => {
												return <JobBlock key={index} {...job} />
											})
										}
									</details>
								</div>
						})
					}
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
