import React from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	NavItem,
	Collapse,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false,
		};
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand='md' color='primary'>
					<div className='container'>
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className='mr-auto' href='/'>
							<img
								src='assets/images/logo.png'
								height='30'
								width='41'
								alt='Quản lý nhân viên'
							/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className='nav-link' to='/nhanvien'>
										<span className='fa fa-users fa-lg'></span> Nhân viên
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/bophan'>
										<span className='fa fa-id-card-o fa-lg'></span> Phòng Ban
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/luong'>
										<span className='fa fa-money fa-lg'></span> Bảng Lương
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header;
