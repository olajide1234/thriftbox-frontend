import React, { useState, useEffect } from 'react';
import { Container, Row, } from 'react-bootstrap';
import { Store } from '../../data/store';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import Footer from '../../components/Footer';
import CreateMember from '../../components/CreateMember';
import EditMember from '../../components/EditMember';
import UsefulContacts from '../../components/UsefulContacts';
import { allMembers } from '../../data/actions/users';
import { userDetails } from '../../data/actions/auth';
import { generalStats } from '../../data/actions/account';
import Loader from '../../components/Loader';
import MemberTable from '../../components/MemberTable';



function AdminMembers(props) {

  const { state } = React.useContext(Store);
  const [memberDetailsState, setMemberDetailsState] = useState([]);
  const [userDetailsState, setuserDetailsState] = useState([]);
  const [generalStatState, setgeneralStatState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const details = await allMembers();
      const userInfo = await userDetails();
      const coopStats = await generalStats();
      if (details.success === true) {
        setMemberDetailsState(details.data);
      }
      if (userInfo.success === true) {
        setuserDetailsState(userInfo.data);
      }
      if (coopStats.success === true) {
        setgeneralStatState(coopStats.data);
      }
    }
    fetchData();
  }, []);

  if (memberDetailsState.length < 1) {
    return <div className='center'><Loader /></div>
  }
  if (!generalStatState.totalLoansBalance) {
    return <div className='center'><Loader /></div>
  }

  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader
          name={state.user.firstName}
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization}
          subText="Welcome to your member admin dashboard!"
          memberStrenght={generalStatState.memberCount}
          admin />
        <Row className="mr-0 ml-0">
          <MemberTable title="Member list" subTitle="View all members of the cooperative" data={memberDetailsState} />
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
