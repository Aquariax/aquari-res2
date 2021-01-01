import React from 'react';
import Header from './components/layout/Header';
import Contact from './components/layout/Contact';
import Skills from './components/layout/Skills';
import Summary from './components/layout/Summary';
import Sidebar from './components/layout/Sidebar';
import './components/layout/styles/compiled/main.css';
import Jobs from './components/layout/Jobs';

function App() {
	return (
		<div className='App'>
			<div className='App_sidebar'>
				<Sidebar />
			</div>
			<div className='App_main'>
				<Header />
				<Contact />
				<Skills />
				<Summary />
				<Jobs />
			</div>
		</div>
	);
}

export default App;
