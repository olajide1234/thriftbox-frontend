import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { props: { history, location: { pathname } } } = this.props;
    return (
      <div>
        <Navbar bg="white" expand="lg" className="header-shadow fixed-top">
          <Container>
            <Navbar.Brand onClick={() => history.push('/dashboard')}>
              <h1 className="az-logo">
                ThriftB
                <span>o</span>
                x
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <Nav.Link className={pathname === '/dashboard' || pathname === '/admindashboard' ? 'activeHeader' : null} onClick={() => history.push('/dashboard')}>Dashboard</Nav.Link>
                <Nav.Link className={pathname === '/savings' ? 'activeHeader' : null} onClick={() => history.push('/savings')}>Savings</Nav.Link>
                <Nav.Link className={pathname === '/loans' ? 'activeHeader' : null} onClick={() => history.push('/loans')}>Loans</Nav.Link>
                <Nav.Link className={pathname === '/promo' ? 'activeHeader' : null} onClick={() => history.push('/promo')}>Promo </Nav.Link>

              </Nav>
              <NavDropdown title="Hi Habib" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => history.push('/')}>Sign Out</NavDropdown.Item>
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
