import React from 'react';

class StaffList extends React.Component {
	render() {
		const listNhanvien = this.props.staffs.map((nv) => {
			return (
				<div key={nv.id}>
					<div className='col-12 m-1'>
						<img
							style={{ width: '150px', height: '150px' }}
							src={nv.image}
							alt={nv.name}
						/>
						<p>{nv.name}</p>
					</div>
				</div>
			);
		});
		return (
			<div className='container'>
				<h4>Nhân Viên</h4>
				<br />
				<div className='row'>{listNhanvien}</div>
			</div>
		);
	}
}

export default StaffList;
