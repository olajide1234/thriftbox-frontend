import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="white" expand="lg" className="footer-shadow mt-5">
      <Container>
        <p className="mt-2"> &copy; 2019 All rights reserved! ThriftBox Limited. Email: admin@thriftbox.com</p>
      </Container>
    </Navbar>
  );
}

export default Footer;
