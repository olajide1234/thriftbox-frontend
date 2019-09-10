import React, { useState, useEffect } from 'react';
import { Store } from '../../data/store';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import TwoLineCard from '../../components/TwoLineCard';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import MainTable from '../../components/MainTable';
import SavingsChangeRequest from '../../components/SavingsChangeRequest';
import Loader from '../../components/Loader';
import { userDetails } from '../../data/actions/auth';
import { loansAndSavings } from '../../data/actions/account';


function SavingsDash(props) {
  const { state } = React.useContext(Store);

  const [userDetailsState, setuserDetailsState] = useState([]);
  const [userLoansAndSavingsState, setuserLoansAndSavingsState] = useState([]);
  const [errors, setErrors] = useState([]);

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

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
          subText="Here are details of your savings history"
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization} />
        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>
        <Row>
          <Col sm={9}>
            {userLoansAndSavingsState.savingsTransactions.length < 1 ? 'No savings history yet. Begin saving to see a table of your savings here!' : <MainTable title="Savings details" data={userLoansAndSavingsState.savingsTransactions} />}
          </Col>
          <Col>
            <TwoLineCard classStyle="mb-3 p-2" header="Total savings amount" text={`NGN ${userLoansAndSavingsState.savingsBalance.balance.toLocaleString()}`} />
            <TwoLineCard
              classStyle="mb-3 p-2"
              header={userDetailsState.savingsDateAndAmountApproval === 'pending' ? "Savings due date (Pending approval)" : "Savings due date"}
              text={`${ordinal_suffix_of(userDetailsState.nextSavingsDate)} of the month`}
            />
            <TwoLineCard
              classStyle="mb-3 p-2"
              header={userDetailsState.savingsDateAndAmountApproval === 'pending' ? "Next savings amount (Pending approval)" : "Next savings amount"}
              text={`NGN ${userDetailsState.nextSavingsAmount.toLocaleString()}`}
            />
          </Col>
        </Row>
        <Row className="mr-0 ml-0">
          <SavingsChangeRequest currDate={userDetailsState.nextSavingsDate} currAmount={userDetailsState.nextSavingsAmount} setErrors={setErrors} classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

SavingsDash.propTypes = {

};

export default SavingsDash;
