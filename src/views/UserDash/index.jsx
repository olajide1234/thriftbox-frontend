import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import GraphBox from '../../components/GraphBox';
import ThreeLineCard from '../../components/ThreeLineCard';
import TwoLineCard from '../../components/TwoLineCard';
import QuickActions from '../../components/QuickActions';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';

function UserDash(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Here is a summary of your activities!" />
        <Row>
          <Col>
            <GraphBox />
          </Col>
          <Col>
            <Row className="mr-0 ml-0">
              <TwoLineCard classStyle="mb-3 mr-2 p-2" width="48%" header="Total savings amount" text="NGN 225,000" />
              <TwoLineCard classStyle="mb-3 ml-2 p-2" width="48%" header="Total loans amount" text="NGN 105,000" />
            </Row>
            <Row className="mr-0 ml-0">
              <ThreeLineCard />
            </Row>
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <QuickActions classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

UserDash.propTypes = {

};

export default UserDash;
