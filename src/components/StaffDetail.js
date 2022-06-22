import React from 'react';
import {
	CardImg,
	CardText,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

class StaffDetail extends React.Component {
	render() {
		if (this.props.nv != null) {
			return (
				<div className='container'>
					<div className='row'>
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to='/nhanvien'>Nhân viên</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>{this.props.nv.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className='col-12'>
							<h3>{this.props.nv.name}</h3>
							<hr />
						</div>
					</div>
					<div className='row mb-3'>
						<RenderStaff staff={this.props.nv} />
					</div>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

function RenderStaff({ staff }) {
	if (staff != null) {
		return (
			<div className='col-12'>
				<div className='row'>
					<div className=' col-md-3 col-xs-1'>
						<CardImg width='100%' src={staff.image} alt={staff.name} />
					</div>
					<div className=' col-md-4 col-xs-1'>
						<CardTitle>Họ và tên: {staff.name}</CardTitle>
						<CardText>
							Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}
						</CardText>
						<CardText>
							Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
						</CardText>
						<CardText>Phòng ban: {staff.department.name}</CardText>
						<CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
						<CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
}

export default StaffDetail;
