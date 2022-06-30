import React from 'react';
import { Link } from 'react-router-dom';
import { STAFFS } from '../data/staffs';

class StaffList extends React.Component {
	state = {
		name: '',
		foundStaffs: STAFFS,
	};

	handleSearch() {
		const keyword = this.state.name;
		if (keyword !== '') {
			const results = STAFFS.filter((staff) => {
				return staff.name.toLowerCase().includes(keyword.toLowerCase());
			});
			this.setState({ foundStaffs: results });
		} else {
			this.setState({ foundStaffs: STAFFS });
		}
		this.setState({ name: keyword });
	}
	render() {
		const { name, foundStaffs } = this.state;
		return (
			<div className='container'>
				<h3>Nhân Viên</h3>
				<input
					type='text'
					value={name}
					onChange={(e) => this.setState({ name: e.target.value })}
					className='form-control'
					placeholder='Tìm Kiếm Nhân Viên'
				/>

				<button
					onClick={() => this.handleSearch()}
					type='button'
					className='btn btn-primary'
				>
					Tìm Kiếm
				</button>
				<br />
				<br />
				<div className='row'>
					{foundStaffs && foundStaffs.length > 0 ? (
						foundStaffs.map((staff) => {
							return (
								<div key={staff.id}>
									<div style={{ cursor: 'pointer' }} className='col-12 m-1'>
										<Link to={`/nhanvien/${staff.id}`}>
											<img
												style={{ width: '150px', height: '150px' }}
												src={staff.image}
												alt={staff.name}
											/>
										</Link>
										<p style={{ marginLeft: '1rem' }}>{staff.name}</p>
									</div>
								</div>
							);
						})
					) : (
						<h1>No results found!</h1>
					)}
				</div>
			</div>
		);
	}
}

export default StaffList;
