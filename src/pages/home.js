import React, { Component } from 'react';

import headshot from '../images/dominic-canare.png';
import '../styles/home.css';
import icon from '../images/wave-icon.svg';

export default class Page extends Component {
	render() {
		let contactMethods = [
			{
				name: 'dom@​dominiccanare.com',
				uri: 'mailto:dom@dominiccanare.com',
				icon: 'email-icon.svg'
			},{
				name: 'GitHub/domstoppable',
				uri: 'https://github.com/domstoppable',
				icon: 'github-icon.svg'
			},{
				name: 'LinkedIn/dom‑can',
				uri: 'https://www.linkedin.com/in/dom-can/',
				icon: 'linkedin-icon.svg'
			},{
				name: 'ResearchGate/Dominic_Canare',
				uri: 'https://www.researchgate.net/profile/Dominic_Canare',
				icon: 'research-gate-icon.png'
			},{
				name: 'Twitter/obi_dom',
				uri: 'https://www.twitter.com/obi_dom',
				icon: 'twitter-icon.svg'
			},{
				name: 'YouTube/domstoppable',
				uri: 'https://www.youtube.com/user/domstoppable',
				icon: 'youtube-icon.svg'
			}
		];

		return (
			<div className="page">
				<h2 className="banner"><img src={icon} className="icon" alt="Publications icon" width="32" height="32"/>Greetings!</h2>

				<div className="content">
					<img src={headshot} width="256" height="256" className="logo" alt="Dominic Canare headshot"/>
					<h3>About me</h3>
					<p>Hi, there! My name is Dominic Canare, and I'm a PhD candidate in <a href="https://en.wikipedia.org/wiki/Human_factors_and_ergonomics#Cognitive_ergonomics" target="_blank" rel="noopener noreferrer">Human Factors Psychology</a> at <a href="https://www.wichita.edu/academics/fairmount_college_of_liberal_arts_and_sciences/psychology/graduate/humanfactors/humanfactorsphd.php" target="_blank" rel="noopener noreferrer">Wichita State University</a>. I'm most interested in research on <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction" target="_blank" rel="noopener noreferrer">human-computer interaction</a>, sensory substitution/augmentation, and assistive/adaptive technologies. I believe that a universal design approach to problems will yield the best possible outcomes.</p>
					<p>I'm a scientist, a problem-solver, a software developer, an educator, a community leader, and an activist, and I'm always looking for ways to use my talent and skill to improve lives and reduce harm. I have a passion for making technologies more accessible, efficient, and  effective through the thoughtful use of artificial intelligence, automation, and data-driven interaction design.</p>

					<h3>Connect with me!</h3>
					<ul className="contact-blocks">
					{
						contactMethods.map((info, index) => {
							return <li className="contact-block">
								<a href={info.uri} target={info.uri.startsWith('http') ? '_blank' : ''} rel="noopener noreferrer" className="contact-block" key={index}>
									<img src={'../images/' + info.icon} width="50" height="50" alt={info.name + ' icon'} />
									<div className="contact-text" dangerouslySetInnerHTML={{__html: info.name.replace('/', '/<wbr/>')}}></div>
								</a>
							</li>
						})
					}
					</ul>
				</div>
			</div>
		);
	}
}

