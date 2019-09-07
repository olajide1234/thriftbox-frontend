import React, { useState, useEffect } from 'react';
import { Store } from '../../data/store';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import TwoLineCard from '../../components/TwoLineCard';
import UsefulContacts from '../../components/UsefulContacts';
import Footer from '../../components/Footer';
import DebtTable from '../../components/DebtTable';
import LoansRequest from '../../components/LoansRequest';
import { userDetails } from '../../data/actions/auth';
import { loansAndSavings } from '../../data/actions/account';


function LoansDash(props) {
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
          subText="Here are details of your loans history"
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization} />
          <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>
        <Row>
          <Col>
            {userLoansAndSavingsState.loansTransactions.length < 1 ? 'No loans history yet. Take a loan to see a table of loan history here!' : <DebtTable title="Loans details" data={userLoansAndSavingsState.loans} />}
          </Col>
          {/* <Col>
            <TwoLineCard classStyle="mb-3 p-2" header="Total outstanding amount" text={`NGN ${userLoansAndSavingsState.loansBalance.balance.toLocaleString()}`} />
            <TwoLineCard classStyle="mb-3 p-2" header="Next deduction date" text="26 March 2019" />
            <TwoLineCard classStyle="mb-3 p-2" header="Next deduction amount" text="NGN 50,000" />
          </Col> */}
        </Row>
        <Row className="mr-0 ml-0">
          <LoansRequest setErrors={setErrors} classStyle="mt-4 mb-2" />
          <UsefulContacts classStyle="mt-4 mb-2" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

LoansDash.propTypes = {

};

export default LoansDash;
