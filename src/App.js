import React from 'react';
import Header from './components/layout/Header';
import Contact from './components/layout/Contact';
import Skills from './components/layout/Skills';
import Summary from './components/layout/Summary';
import './components/layout/styles/compiled/main.css';
function App() {
	return (
		<div className='App'>
			<Header />
			<Contact />
			<Skills />
			<Summary />
		</div>
	);
}

export default App;
