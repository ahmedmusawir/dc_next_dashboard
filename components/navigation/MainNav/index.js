import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import { blueGradiant } from 'components/theme/DeepCast/gradiants';

const MainNavbar = styled(Navbar)`
	background: ${blueGradiant};
`;

export class MainNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<MainNavbar color="dark" dark expand="md" className="fixed-top">
					<Link prefetch href="/" passHref>
						<NavbarBrand>DeepCast.ai</NavbarBrand>
					</Link>
					<NavbarToggler
						aria-label="mobile navigation toggle button"
						onClick={this.toggle}
					/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link prefetch href="/" passHref>
									<NavLink>Home</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/features" passHref>
									<NavLink>Features</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/media" passHref>
									<NavLink>Media</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/about" passHref>
									<NavLink>About</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/styles" passHref>
									<NavLink>Styles</NavLink>
								</Link>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Test Comps
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<Link prefetch href="/dashboard" passHref>
											<a style={{ color: 'black' }}>Dashboard</a>
										</Link>
									</DropdownItem>
									<DropdownItem>
										<Link prefetch href="/dashboard/icons" passHref>
											<a style={{ color: 'black' }}>Icons</a>
										</Link>
									</DropdownItem>
									{/* <DropdownItem>
										<Link prefetch href="/dashboard/notifications" passHref>
											<a style={{color:' blac'k}}>Notifications</a>
										</Link>
									</DropdownItem> */}
									<DropdownItem>
										<Link prefetch href="/dashboard/rtl" passHref>
											<a style={{ color: 'black' }}>Language</a>
										</Link>
									</DropdownItem>
									<DropdownItem>
										<Link prefetch href="/dashboard/table-list" passHref>
											<a style={{ color: 'black' }}>Table List</a>
										</Link>
									</DropdownItem>
									<DropdownItem>
										<Link prefetch href="/dashboard/typography" passHref>
											<a style={{ color: 'black' }}>Typography</a>
										</Link>
									</DropdownItem>
									<DropdownItem>
										<Link prefetch href="/dashboard/user-profile" passHref>
											<a style={{ color: 'black' }}>User Profile</a>
										</Link>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</MainNavbar>
			</div>
		);
	}
}

export default MainNav;
