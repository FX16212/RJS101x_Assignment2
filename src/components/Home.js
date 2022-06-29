import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div>
				<img
					width='100%'
					src={require('../data/homeepage.png')}
					alt='HomePage'
				/>
				;
			</div>
		);
	}
}

export default Home;
