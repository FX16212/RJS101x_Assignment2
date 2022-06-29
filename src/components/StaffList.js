import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STAFFS } from '../data/staffs';

function StaffList() {
	const [name, setName] = useState('');
	const [foundStaffs, setFoundStaffs] = useState(STAFFS);
	const filter = (e) => {
		const keyword = e.target.value;
		if (keyword !== '') {
			const results = STAFFS.filter((staff) => {
				return staff.name.toLowerCase().includes(keyword.toLowerCase());
			});
			setFoundStaffs(results);
		} else {
			setFoundStaffs(STAFFS);
		}
		setName(keyword);
	};
	return (
		<div className='container'>
			<h3>Nhân Viên</h3>
			<input
				type='search'
				value={name}
				onChange={filter}
				className='form-control'
				placeholder='Tìm Kiếm Nhân Viên'
			/>
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

export default StaffList;
