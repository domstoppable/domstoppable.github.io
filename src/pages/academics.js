import React, { Component } from 'react';
import Card, { FlipCard, twirlCards } from '../components/card.js';

import icon from '../images/academics-icon.svg';
import '../styles/academics.css';

export default class AcademicsPage extends Component {
	constructor(){
		super();

		this.degrees = [
			{
				type: 'PhD',
				field: 'Human Factors Psychology',
				institution: 'Wichita State University',
				year: 2022,
				finished: true,
			},{
				type: 'MA',
				field: 'Psychology',
				institution: 'Wichita State University',
				year: 2017,
				finished: true,
			},{
				type: 'MS',
				field: 'Computer Science',
				institution: 'Wichita State University',
				year: 2008,
				finished: true,
			},{
				type: 'BS',
				field: 'Computer Science',
				institution: 'Pittsburg State University',
				year: 2006,
				finished: true,
			},
		];
	}

	componentDidMount(){
		window.setTimeout(()=>twirlCards(), 1000);
	}

	render() {
		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Academics icon" width="32" height="32"/>Academics</h2>

				<div className="content">
					<div className="intro">
						<p>Engineering always felt like the right fit for me, and Computer Science seemed to be where I had the greatest natural abilities. I began studying CS after graduating high school in 2003 and finished my BS in 2006. Wanting more, I relocated and completed an MS in 2008. I then spent several years working as a software developer and technology consultant, until taking what I expected to be a short break from industry work.</p>
						<p>While teaching engineering courses, a chance encounter introduced me to human factors research. I quickly realized this was my next new adventure: an opportunity to learn new things while applying my existing skills to improve systems. I completed my MA in 2017 and expect to complete my PhD in 2020.</p>
					</div>

					<div className="degree-blocks">
					{
						this.degrees.map((degree) => {
							return <DegreeBlock key={degree.type+'-'+degree.field} {...degree}/>
						})
					}
					</div>

					<Card heading="Honors and Organizations">
						<ul className="split">
							<li>2022 Michael P. Tilford Graduate Fellowship</li>
							<li>2021 Human Factors Graduate Student of the Year</li>
							<li>2019 Jayne and Glenn Milburn Fellowship</li>
							<li>2017 Randall Chambers Award Winner</li>
							<li>2017 WSU GRASP Honorable Mention</li>
							<li>2015 WSU Ventures Bright Future Award Winner</li>
							<li>2006 Outstanding Senior of the Year</li>
							<li>Tau Sigma Honor Society</li>
							<li>Kappa Mu Honor Society</li>
							<li>Human Factors &amp; Ergonomics Society (member)</li>
							<li>Association for Computing Machinery (president)</li>
						</ul>
					</Card>

					<Card heading="Theses">
						<ul>
							<li>2020 Dissertation: A tactile-phonemic sensory substitution device for universal speech perception</li>
							<li>2017 Thesis: Using gesture, gaze, and combination input schemes as an alternative to the computer mouse for new interfaces</li>
							<li>2008 Thesis: Fit4Work - an employee mental health evaluation system</li>
						</ul>
					</Card>
				</div>
			</div>
		);
	}
}

class DegreeBlock extends Component {
	render() {
		return <FlipCard
			flipped={this.props.flipped}
			className={'degree-block' + (this.props.finished ? '': ' pending')}
			front={
				<div>
					<div className="type">{this.props.type}</div>
					<div className="field">{this.props.field}</div>
				</div>
			}
			back={
				<div>
					<div className="institution">{this.props.institution}</div>
					<div className="year">{this.props.year}</div>
				</div>
			}
		/>

	}
}
