import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import AccountingEntry from '../../components/AccountingEntry';
import Footer from '../../components/Footer';
import ViewEntries from '../../components/ViewEntries';
import ViewFs from '../../components/ViewFs';
import CreateAccount from '../../components/CreateAccount';

function AdminAccounting(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Welcome to your accounting dashboard!" admin />
        <Row className="mr-0 ml-0">
          <AccountingEntry classStyle="mt-4 mb-2" history={props.history} />
          <ViewEntries />
          <ViewFs />
          <CreateAccount />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

AdminAccounting.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AdminAccounting;
