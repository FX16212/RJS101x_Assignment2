import React from 'react';

class StaffList extends React.Component {
	render() {
		const listNhanvien = this.props.staffs.map((nv) => {
			return (
				<div key={nv.id}>
					<div className='col-12 m-2'>
						<img src={nv.image} alt={nv.name} />
						<p>{nv.name}</p>
					</div>
				</div>
			);
		});
		return (
			<div className='container'>
				<h4>Nhân Viên</h4>
				<br />
				<div className='row'>{listNhanvien}</div>;
			</div>
		);
	}
}

export default StaffList;
