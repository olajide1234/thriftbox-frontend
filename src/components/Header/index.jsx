import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Store } from '../../data/store';
import { switchUser } from '../../data/actions/auth';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  switchAuthAccess = (dispatch, level) => {
    switchUser(dispatch, level);
  }

  render() {
    const { props: { history, location: { pathname } } } = this.props;
    const values = this.context;
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

                {values.state.user.level === 'admin'
                  ? (
                    <Fragment>
                      <Nav.Link className={pathname === '/admindashboard' ? 'activeHeader' : null} onClick={() => history.push('/admindashboard')}>Dashboard</Nav.Link>
                      <Nav.Link className={pathname === '/adminsavings' ? 'activeHeader' : null} onClick={() => history.push('/adminsavings')}>Savings</Nav.Link>
                      <Nav.Link className={pathname === '/adminloans' ? 'activeHeader' : null} onClick={() => history.push('/adminloans')}>Loans</Nav.Link>
                      <Nav.Link className={pathname === '/adminpromo' ? 'activeHeader' : null} onClick={() => history.push('/adminpromo')}>Promo </Nav.Link>
                      <Nav.Link className={pathname === '/adminaccounting' ? 'activeHeader' : null} onClick={() => history.push('/adminaccounting')}>Accounting </Nav.Link>
                      <Nav.Link className={pathname === '/adminmembers' ? 'activeHeader' : null} onClick={() => history.push('/adminmembers')}>Members </Nav.Link>
                    </Fragment>
                  )
                  : (
                    <Fragment>
                      <Nav.Link className={pathname === '/dashboard' ? 'activeHeader' : null} onClick={() => history.push('/dashboard')}>Dashboard</Nav.Link>
                      <Nav.Link className={pathname === '/savings' ? 'activeHeader' : null} onClick={() => history.push('/savings')}>Savings</Nav.Link>
                      <Nav.Link className={pathname === '/loans' ? 'activeHeader' : null} onClick={() => history.push('/loans')}>Loans</Nav.Link>
                      {/* <Nav.Link className={pathname === '/promo' ? 'activeHeader' : null} onClick={() => history.push('/promo')}>Promo </Nav.Link> */}
                    </Fragment>
                  )
                }

              </Nav>
              <NavDropdown title="Hi Habib" id="basic-nav-dropdown">
                {values.state.user.level === 'admin'
                  ? <NavDropdown.Item onClick={() => { this.switchAuthAccess(values.dispatch, 'member'); history.push('/dashboard'); }}>Member view</NavDropdown.Item>
                  : <NavDropdown.Item onClick={() => { this.switchAuthAccess(values.dispatch, 'admin'); history.push('/admindashboard'); }}>Admin view</NavDropdown.Item>}
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

Header.contextType = Store;

Header.propTypes = {
  props: PropTypes.object.isRequired
};

export default Header;
