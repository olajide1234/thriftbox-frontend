import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Store } from '../../data/store';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import GraphBox from '../../components/GraphBox';
import ThreeLineCard from '../../components/ThreeLineCard';
import TwoLineCard from '../../components/TwoLineCard';
import AdminQuickActions from '../../components/AdminQuickActions';
import UsefulBalances from '../../components/UsefulBalances';
import Footer from '../../components/Footer';
import { userDetails } from '../../data/actions/auth';
import { generalStats } from '../../data/actions/account';
import Loader from '../../components/Loader';

function AdminDash(props) {
  const { state } = React.useContext(Store);
  const [userDetailsState, setuserDetailsState] = useState([]);
  const [generalStatState, setgeneralStatState] = useState([]);

  console.log('admin state', userDetailsState);

  useEffect(() => {
    async function fetchData() {
      const details = await userDetails();
      const coopStats = await generalStats();
      console.log('dea', coopStats);

      if (details.success === true) {
        setuserDetailsState(details.data);
      }
      if (coopStats.success === true) {
        setgeneralStatState(coopStats.data);
      }
    }
    fetchData();
  }, []);

  if (!userDetailsState.id) {
    return <div className='center'><Loader /></div>
  }

  if (!generalStatState.totalLoansBalance) {
    return <div className='center'><Loader /></div>
  }
  console.log('general stat', generalStatState);

  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader
          name={state.user.firstName}
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization}
          subText="Welcome to your admin dashboard!"
          memberStrenght={generalStatState.memberCount}
          admin />
        <Row>
          <Col>
            <GraphBox title="Total savings history" data={generalStatState.allSavingsTransactions}/>
          </Col>
          <Col>
            <Row className="mr-0 ml-0">
              <TwoLineCard classStyle="mb-3 mr-2 p-2" width="48%" header="Total savings amount" text={`NGN ${generalStatState.totalSavingsBalance.balance.toLocaleString()}`} />
              <TwoLineCard classStyle="mb-3 ml-2 p-2" width="48%" header="Total loans amount" text={`NGN ${generalStatState.totalLoansBalance.balance.toLocaleString()}`} />
            </Row>
            <Row className="mr-0 ml-0">
              <ThreeLineCard
              title="Useful statistics"
              itemOne={{ title: "Average savings amount", text: `NGN ${(generalStatState.totalSavingsBalance.balance / generalStatState.memberCount).toLocaleString()}` }}
              itemTwo={{ title: "Average loan amount", text: `NGN ${(generalStatState.totalLoansBalance.balance / generalStatState.memberCount).toLocaleString()}` }}  />
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
