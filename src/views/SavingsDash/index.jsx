import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import TwoLineCard from '../../components/TwoLineCard';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import MainTable from '../../components/MainTable';
import SavingsChangeApproval from '../../components/SavingsChangeApproval';


function SavingsDash(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Here are details of your savings history" />
        <Row>
          <Col sm={9}>
            <MainTable title="Savings details" />
          </Col>
          <Col>
            <TwoLineCard classStyle="mb-3 p-2" header="Total savings amount" text="NGN 225,000" />
            <TwoLineCard classStyle="mb-3 p-2" header="Next savings date" text="26 March 2019" />
            <TwoLineCard classStyle="mb-3 p-2" header="Next savings amount" text="NGN 50,000" />
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <SavingsChangeApproval classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

SavingsDash.propTypes = {

};

export default SavingsDash;
