import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import SavingsChangeRequest from '../../components/SavingsChangeRequest';


function AdminSavings(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Welcome to your savings admin dashboard!" admin />
        <Row className="mr-0 ml-0">
          <SavingsChangeRequest classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

AdminSavings.propTypes = {

};

export default AdminSavings;
