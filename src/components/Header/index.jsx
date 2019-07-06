import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { props: { location: { pathname } } } = this.props;
    return (
      <div>

        <Navbar bg="white" expand="lg" className="header-shadow">
          <Container>
            <Navbar.Brand href="/">
              <h1 className="az-logo">
                ThriftB
                <span>o</span>
                x
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <Nav.Link className={pathname === '/dashboard' ? 'activeHeader' : null} href="#home">Dashboard</Nav.Link>
                <Nav.Link className={pathname === '/savings' ? 'activeHeader' : null} href="#home">Savings</Nav.Link>
                <Nav.Link className={pathname === '/loans' ? 'activeHeader' : null} href="#home">Loans</Nav.Link>
                <Nav.Link className={pathname === '/promo' ? 'activeHeader' : null} href="#home">Promo </Nav.Link>

              </Nav>
              <NavDropdown title="Hi Habib" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    );
  }
}
Header.propTypes = {
  props: PropTypes.object.isRequired
};

export default Header;
