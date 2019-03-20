import React, { Component } from 'react';

import headshot from '../images/dominic-canare.png';
import '../styles/home.css';
import icon from '../images/wave-icon.svg';

export default class Page extends Component {
	render() {
		let contactMethods = [
			{
				name: 'email',
				uri: 'mailto:dom@greenlightgo.org',
				text: 'dom@dominiccanare.com',
				icon: 'email-icon.svg'
			},{
				name: 'phone',
				uri: 'tel:+13164613981',
				text: '+1.316.461.3981',
				icon: 'phone-icon.svg'
			},{
				name: 'GitHub',
				uri: 'https://github.com/domstoppable',
				icon: 'github-icon.svg'
			},{
				name: 'LinkedIn',
				uri: 'https://www.linkedin.com/in/dom-can/',
				icon: 'linkedin-icon.svg'
			},{
				name: 'ResearchGate',
				uri: 'https://www.researchgate.net/profile/Dominic_Canare',
				icon: 'research-gate-icon.png'
			},{
				name: 'Twitter',
				uri: 'https://www.twitter.com/obi_dom',
				icon: 'twitter-icon.svg'
			},{
				name: 'YouTube',
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
					<p>Hi, there! My name is Dominic Canare, and I'm a PhD candidate in <a href="https://en.wikipedia.org/wiki/Human_factors_and_ergonomics#Cognitive_ergonomics" target="_blank" rel="noopener noreferrer">Human Factors Psychology</a> at <a href="https://www.wichita.edu/academics/fairmount_college_of_liberal_arts_and_sciences/psychology/graduate/humanfactors/humanfactorsphd.php" target="_blank" rel="noopener noreferrer">Wichita State University</a>. My research interests are primarily focused on <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction" target="_blank" rel="noopener noreferrer">human-computer interaction</a>, experience design, sensory substitution/augmentation, and adaptive technologies.</p>
					<p>Presently, I am seeking internship opportunities in Human Factors and HCI.</p>

					<h3>Connect with me!</h3>
					<div className="contact-blocks">
					{
						contactMethods.map((info, index) => {
							return <a href={info.uri} target={info.uri.startsWith('http') ? '_blank' : ''} rel="noopener noreferrer" className="contact-block" key={index}>
								<img src={'../images/' + info.icon} width="100" height="100" alt={info.name + ' icon'} />
								<div>{info.text ? info.text : info.name}</div>
							</a>
							
						})
					}
					</div>
				</div>
			</div>
		);
	}
}

