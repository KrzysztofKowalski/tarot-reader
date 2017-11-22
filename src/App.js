import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
// import Modal from 'react-modal';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './tarot/cardList.js';
import { Spreads } from './tarot/spreads.js';
// note: below json generated using ./tarot/makedeck.js, but I elected to use pregenerated json to save some processing time
import deck from './tarot/tarot.json';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul className='mainNav'>
						<li><Link className='button button-primary' to="/">Home</Link></li>
						<li><Link className='button button-primary' to="/Cards">Card Reference</Link></li>
						<li><Link className='button button-primary' to="/Spreads">Spreads</Link></li>
					</ul>
					<Route exact path="/" component={Home}/>
					<Route path="/Cards" component={() => <CardList deck={deck}/>}/>
					<Route path="/Spreads" component={() => <Spreads deck={deck}/>}/>
				</div>
			</Router>
		);
	}
}

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to Tarot Reader</h1>
				<p>Tarot reader is a simple tarot reading and reference app.</p>
				<p>Built by Andy Zeigert using React.</p>
			</div>
		)
	}
}

export default App;
