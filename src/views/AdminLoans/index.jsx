import React from 'react';
import { Container, Row, Card, Col, Table } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import Footer from '../../components/Footer';
import LargeButton from '../../components/LargeButton';
import LoansApprovalGuide from '../../components/LoansApprovalGuide';


const request = () => (
  <Card className="mx-2 my-2" style={{ width: '48%' }}>
    <Card.Body>
      <Table className="table-borderless">
        <tbody>
          <tr>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Member ID</p>
              <p className="no-buttom-margin">65752</p>
            </td>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Guarantor 1</p>
              <p className="no-buttom-margin">6578 Margaret Thatcher</p>
            </td>
          </tr>
          <tr>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Member name</p>
              <p className="no-buttom-margin">Akinwale Habib</p>
            </td>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Guarantor 2</p>
              <p className="no-buttom-margin">6578 James Bond</p>
            </td>
          </tr>
          <tr>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Loan request amount</p>
              <p className="no-buttom-margin">NGN 500,000</p>
            </td>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Guarantor 2</p>
              <p className="no-buttom-margin">6579 Femi Otedola</p>
            </td>
          </tr>
        </tbody>
      </Table>
      <div>
        <h5 className="lighter no-buttom-margin">Comments</h5>
        <p>This loan is quite urgent. I would appreciate an early approval.</p>
      </div>
      <div>
        <h5 className="lighter no-buttom-margin">Approvals</h5>
        <p className="no-buttom-margin">65752 Akinwumni Ambode approved on 27/May/2018</p>
        <p className="no-buttom-margin">65752 Akinwumni Ambode approved on 27/May/2018</p>
      </div>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center"><LargeButton text="Approve" classStyle="mt-2 mb-2 px-3 greenButton" onClick={f => f} /></Col>
        <Col className="d-flex justify-content-center"><LargeButton text="Reject" classStyle="mt-2 mb-2 px-4 redButton" onClick={f => f} /></Col>
      </Row>
    </Card.Body>
  </Card>
);

const previousRequest = () => (
  <Card className="mx-2 my-2" style={{ width: '48%' }}>
    <Card.Body>
      <Table className="table-borderless">
        <tbody>
          <tr>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Member ID</p>
              <p className="no-buttom-margin">65752</p>
            </td>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Guarantor 1</p>
              <p className="no-buttom-margin">6578 Margaret Thatcher</p>
            </td>
          </tr>
          <tr>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Member name</p>
              <p className="no-buttom-margin">Akinwale Habib</p>
            </td>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Guarantor 2</p>
              <p className="no-buttom-margin">6578 James Bond</p>
            </td>
          </tr>
          <tr>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Loan request amount</p>
              <p className="no-buttom-margin">NGN 500,000</p>
            </td>
            <td className="pl-0">
              <p className="lighter no-buttom-margin">Guarantor 2</p>
              <p className="no-buttom-margin">6579 Femi Otedola</p>
            </td>
          </tr>
        </tbody>
      </Table>
      <div>
        <h5 className="lighter no-buttom-margin">Comments</h5>
        <p>This loan is quite urgent. I would appreciate an early approval.</p>
      </div>
      <div>
        <h5 className="lighter no-buttom-margin">Approvals</h5>
        <p className="no-buttom-margin">65752 Akinwumni Ambode approved on 27/May/2018</p>
        <p className="no-buttom-margin">65752 Akinwumni Ambode approved on 27/May/2018</p>
      </div>
    </Card.Body>
  </Card>
);

function AdminLoans(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Welcome to your loans admin dashboard!" admin />
        <h5 className="ml-2">Pending loans request</h5>
        <Row className="mr-0 ml-0 mb-5">
          {request()}
          {request()}
          {request()}
          {request()}
        </Row>
        <h5 className="ml-2">Previous loans requests</h5>
        <Row className="mr-0 ml-0">
          {previousRequest()}
          {previousRequest()}
          {previousRequest()}
          {previousRequest()}
        </Row>
        <LoansApprovalGuide classStyle="mt-4 mb-2" />
      </Container>
      <Footer />
    </div>
  );
}

AdminLoans.propTypes = {

};

export default AdminLoans;
