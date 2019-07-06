import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import TwoLineCard from '../../components/TwoLineCard';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import MainTable from '../../components/MainTable';
import LoansRequest from '../../components/LoansRequest';


function LoansDash(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Here are details of your loans history" />
        <Row>
          <Col sm={9}>
            <MainTable title="Loans details" />
          </Col>
          <Col>
            <TwoLineCard classStyle="mb-3 p-2" header="Total outstanding amount" text="NGN 225,000" />
            <TwoLineCard classStyle="mb-3 p-2" header="Next deduction date" text="26 March 2019" />
            <TwoLineCard classStyle="mb-3 p-2" header="Next deduction amount" text="NGN 50,000" />
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <LoansRequest classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

LoansDash.propTypes = {

};

export default LoansDash;
