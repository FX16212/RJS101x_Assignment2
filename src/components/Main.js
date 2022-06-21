import React from 'react';
import Header from './Header';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Salary from './Salary';
import Department from './Department';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import { STAFFS, DEPARTMENTS } from '../data/staffs.js';

class Main extends React.Component {
	state = {
		staffs: STAFFS,
		departments: DEPARTMENTS,
	};
	render() {
		const StaffWithId = ({ match }) => {
			return (
				<StaffDetail
					nv={
						this.state.staffs.filter(
							(item) => item.id === parseInt(match.params.nhanvienId, 10)
						)[0]
					}
				/>
			);
		};
		return (
			<div>
				<Header />
				<Switch>
					<Route
						exact
						path='/nhanvien'
						component={() => <StaffList staffs={this.state.staffs} />}
					/>
					<Route path='/nhanvien/:nhanvienId' component={StaffWithId} />
					<Route
						path='/bophan'
						component={() => <Department dept={this.state.departments} />}
					/>
					<Route
						path='/luong'
						component={() => <Salary luong={this.state.staffs} />}
					/>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
