
import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import './styles/App.css';
import headshot from './images/dominic-canare.png';

import HomePage from './pages/home.js';
import AcademicsPage from './pages/academics.js';
import ProfessionalExperiencePage from './pages/professional-experience.js';
import CommunityInvolvementPage from './pages/community-involvement.js';
import PublicationsPage from './pages/publications.js';

class App extends Component {
	constructor(){
		super();
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
			},
		];

		this.state = { page: undefined };
		for(let page of this.pages){
			if(page.url === window.location.pathname){
				this.state.page = page;
				break;
			}
		}

		this.router = React.createRef();
	}

	render() {
		return (
			<BrowserRouter ref={this.router}>
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
												<div onClick={()=>this.goto(page)}>
													{page.label}
												</div>
											</div>
										);
									})
								}
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
			</BrowserRouter>
		);
	}

	goto(page){
		this.router.current.history.push(page.url);
		this.setState({page:page});

		document.getElementById('Nav').classList.remove('mobile-nav-show');
		document.getElementById('MenuButton').classList.remove('hide');
		document.getElementById('PageContainer').classList.remove('hide');
		window.scrollTo(0, 0);
	}

	showNav(){
		document.getElementById('Nav').classList.add('mobile-nav-show');
		document.getElementById('MenuButton').classList.add('hide');
		document.getElementById('PageContainer').classList.add('hide');
		window.scrollTo(0, 0);
	}
}

export default App;