import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import Footer from '../../components/Footer';
import MainTable from '../../components/MainTable';
import CreateMember from '../../components/CreateMember';
import EditMember from '../../components/EditMember';
import UsefulContacts from '../../components/UsefulContacts';


function AdminMembers(props) {
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader subText="Welcome to your member admin dashboard!" admin />
        <Row className="mr-0 ml-0">
          <MainTable title="Member list" subTitle="View all members of the cooperative" />
          <CreateMember />
          <EditMember />
          <UsefulContacts />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

AdminMembers.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AdminMembers;
