import React from 'react';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar_education'>
				<h3>Education</h3>
				<ul>
					<li>Lovejoy High School | 2014-2018</li>
					<li>Lambda School (Web Developement Bootcamp)| 2018-2019</li>
				</ul>
			</div>
			<div className='sidebar_summary'>
				<h3>Bio</h3>
				<p>
					My name is Robert Harris, a guy looking to make a way for himself. A
					family oriented individual looking to build a future for those close
					to him and himself. That enjoys digital arts, nature, and interacting
					with others. A curious person and a very quick learner hoping to
					improve where ever they are.
				</p>
			</div>
			<div className='hobbies'>
				<h3>Hobbies</h3>
				<ul>
					<li>3D Modeling & Game Design</li>
					<li>Codewars (programming training)</li>
					<li>Playing music</li>
					<li>Video Games</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
