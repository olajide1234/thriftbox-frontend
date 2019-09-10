import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Store } from '../../data/store';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import GraphBox from '../../components/GraphBox';
import ThreeLineCard from '../../components/ThreeLineCard';
import TwoLineCard from '../../components/TwoLineCard';
import QuickActions from '../../components/QuickActions';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import { userDetails } from '../../data/actions/auth';
import Loader from '../../components/Loader';
import { loansAndSavings } from '../../data/actions/account';


function UserDash(props) {

  const { state } = React.useContext(Store);
  const [userDetailsState, setuserDetailsState] = useState([]);
  const [userLoansAndSavingsState, setuserLoansAndSavingsState] = useState([]);

  function ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  useEffect(() => {
    async function fetchData() {
      const details = await userDetails();
      const loansandsavings = await loansAndSavings();
      if (details.success === true) {
        setuserDetailsState(details.data);
      }
      if (loansandsavings.success === true) {
        setuserLoansAndSavingsState(loansandsavings.data);
      }
    }
    fetchData();
  }, []);


  if (!userDetailsState.id) {
    return <div className='center'><Loader /></div>
  }

  if (!userLoansAndSavingsState.loansBalance) {
    return <div className='center'><Loader /></div>
  }

  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader
          name={state.user.firstName}
          joinDate={userDetailsState.joinDate}
          subText="Here is a summary of your activities!"
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization} />
        <Row>
          <Col>
            {userLoansAndSavingsState.savingsTransactions.length < 1 ? 'No savings history yet. Begin saving to see a chart of your history here!' : < GraphBox title="Savings history" data={userLoansAndSavingsState.savingsTransactions} />}
          </Col>
          <Col>
            <Row className="mr-0 ml-0">
              <TwoLineCard classStyle="mb-3 mr-2 p-2" width="48%" header="Total savings amount" text={`NGN ${userLoansAndSavingsState.savingsBalance.balance.toLocaleString()}`} />
              <TwoLineCard classStyle="mb-3 ml-2 p-2" width="48%" header="Total loans amount" text={`NGN ${userLoansAndSavingsState.loansBalance.balance.toLocaleString()}`} />
            </Row>
            <Row className="mr-0 ml-0">
              <ThreeLineCard
                title="Next savings details"
                itemOne={{
                  title: `${userDetailsState.savingsDateAndAmountApproval === 'pending' ? "Savings due date (Pending approval)" : "Savings due date"}`,
                  text: `${ordinal_suffix_of(userDetailsState.nextSavingsDate)} of the month`
                }}
                itemTwo={{
                  title: `${userDetailsState.savingsDateAndAmountApproval === 'pending' ? "Next savings amount (Pending approval)" : "Next savings amount"}`,
                  text: `NGN ${userDetailsState.nextSavingsAmount.toLocaleString()}`
                }} />
            </Row>
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <QuickActions classStyle="mt-4 mb-2" history={props.history} />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

UserDash.propTypes = {
  history: PropTypes.object.isRequired,
};

export default UserDash;
