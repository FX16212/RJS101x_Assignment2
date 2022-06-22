import React from 'react';
import { Link } from 'react-router-dom';
class StaffList extends React.Component {
	render() {
		const listNhanvien = this.props.staffs.map((nv) => {
			return (
				<div key={nv.id}>
					<div style={{ cursor: 'pointer' }} className='col-12 m-1'>
						<Link to={`/nhanvien/${nv.id}`}>
							<img
								style={{ width: '150px', height: '150px' }}
								src={nv.image}
								alt={nv.name}
							/>
						</Link>
						<p style={{ marginLeft: '1rem' }}>{nv.name}</p>
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
