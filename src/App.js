
import React, { Component } from 'react';
import {
	HashRouter,
	Route,
	Switch
} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

import './styles/App.css';
import headshot from './images/dominic-canare.png';

import HomePage from './pages/home.js';
import AwardsPage from './pages/awards.js';
import AcademicsPage from './pages/academics.js';
import ProfessionalExperiencePage from './pages/professional-experience.js';
import CommunityInvolvementPage from './pages/community-involvement.js';
import PublicationsPage from './pages/publications.js';

class App extends Component {
	constructor(props){
		super(props);
		this.pages = [
			{
				url: '/',
				label:'Home',
				element: (props) => <HomePage {...props} />,
			},{
				url: '/academics',
				label:'Academics',
				element: (props) => <AcademicsPage {...props} />,
			},{
				url: '/professional-experience',
				label:'Professional experience',
				element: (props) => <ProfessionalExperiencePage {...props} />,
			},{
				url: '/community-involvement',
				label:'Community involvement',
				element: (props) => <CommunityInvolvementPage {...props} />,
			},{
				url: '/publications',
				label:'Publications & talks',
				element: (props) => <PublicationsPage {...props} />,
			},{
				url: '/awards',
				label:'Awards',
				element: (props) => <AwardsPage {...props} />,
			},
		];

		this.state = { page: this.getCurrentPage() };
		this.history = createBrowserHistory();
	}

	componentDidMount(){
		this.history.listen((location, action) => {
			this.setState({page: this.getCurrentPage()});

			document.getElementById('Nav').classList.remove('mobile-nav-show');
			document.getElementById('MenuButton').classList.remove('hide');
			document.getElementById('PageContainer').classList.remove('hide');
			window.scrollTo(0, 0);
		});
	}

	showNav(){
		document.getElementById('Nav').classList.add('mobile-nav-show');
		document.getElementById('MenuButton').classList.add('hide');
		document.getElementById('PageContainer').classList.add('hide');
		window.scrollTo(0, 0);
	}

	getCurrentPage(){
		for(let page of this.pages){
			if(page.url === window.location.hash.substring(1)){
				return page;
			}
		}
		return this.pages[0];
	}

	render() {
		return (
			<HashRouter>
				<div className="App">
					<div className="sidebar" id="Nav">
						<div className="sidebarMain">
							<a href="/" alt="Home"><img src={headshot} className="logo" alt="Dominic Canare headshot"/></a>
							<h1>Dominic Canare</h1>
							<nav>
								{
									this.pages.map(page => {
										return (
											<div key={page.label} className={page===this.state.page ? 'selected':''}>
												<a href={'/#' + page.url}>{page.label}</a>
											</div>
										);
									})
								}
								<div className="download-link">
									<a href="/Dominic%20Canare%20-%20Resume.pdf" download>🖺 Download Resume</a>
								</div>
							</nav>
						</div>
						<div className="footer">
							Made w/ <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> - hosted on <a href="https://github.com/domstoppable/domstoppable.github.io" target="_blank" rel="noopener noreferrer">GitHub</a><br/>
						</div>
					</div>
					
					<div id="PageContainer">
						<Switch>
							{
								this.pages.map(page => {
									return <Route key={page.label}
										exact
										path={page.url}
										component={page.element}
									/>;
								})
							}
						</Switch>
					</div>
					<div id="MenuButton" className="mobile-menu-button banner" onClick={()=>this.showNav()}>☰ Menu</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;