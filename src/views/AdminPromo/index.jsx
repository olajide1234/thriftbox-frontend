import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import Footer from '../../components/Footer';
import MainTable from '../../components/MainTable';
import PromoAdmin from '../../components/PromoAdmin';
import UsefulContacts from '../../components/UsefulContacts';

function AdminPromo(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Welcome to your promo items dashboard!" admin />
        <Row>
          <Col>
            <MainTable title="Promo items" subTitle="List of items available for purchase at discounted prices" approval />
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <PromoAdmin classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

AdminPromo.propTypes = {

};

export default AdminPromo;
