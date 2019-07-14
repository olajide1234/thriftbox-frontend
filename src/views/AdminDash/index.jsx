import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import GraphBox from '../../components/GraphBox';
import ThreeLineCard from '../../components/ThreeLineCard';
import TwoLineCard from '../../components/TwoLineCard';
import AdminQuickActions from '../../components/AdminQuickActions';
import UsefulBalances from '../../components/UsefulBalances';
import Footer from '../../components/Footer';

function AdminDash(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Welcome to your admin dashboard!" admin />
        <Row>
          <Col>
            <GraphBox title="Total savings history" />
          </Col>
          <Col>
            <Row className="mr-0 ml-0">
              <TwoLineCard classStyle="mb-3 mr-2 p-2" width="48%" header="Total savings amount" text="NGN 225,000" />
              <TwoLineCard classStyle="mb-3 ml-2 p-2" width="48%" header="Total loans amount" text="NGN 105,000" />
            </Row>
            <Row className="mr-0 ml-0">
              <ThreeLineCard title="Useful statistics" itemOne={{ title: "Average savings amount", text: "NGN 50,000" }} itemTwo={{ title: "Average loan amount", text: "NGN 50,000" }} />
            </Row>
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <AdminQuickActions classStyle="mt-4 mb-2" history={props.history} />
          <UsefulBalances classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

AdminDash.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AdminDash;
