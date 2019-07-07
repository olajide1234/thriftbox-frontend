import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import MainTable from '../../components/MainTable';
import PromoRequest from '../../components/PromoRequest';


function PromoDash(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Here are promo items available to you as a cooperative member" />
        <Row>
          <Col sm={9}>
            <MainTable title="Loans details" />
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <PromoRequest classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

PromoDash.propTypes = {

};

export default PromoDash;
