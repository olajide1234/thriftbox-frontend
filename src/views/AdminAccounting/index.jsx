import React, { useState, useEffect } from 'react';
import { Container, Row, } from 'react-bootstrap';
import { Store } from '../../data/store';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DataHeader from '../../components/DataHeader';
import AccountingEntry from '../../components/AccountingEntry';
import Footer from '../../components/Footer';
import ViewEntries from '../../components/ViewEntries';
import ViewFs from '../../components/ViewFs';
import CreateAccount from '../../components/CreateAccount';
import Loader from '../../components/Loader';
import { userDetails } from '../../data/actions/auth';

function AdminAccounting(props) {
  const { state } = React.useContext(Store);
  const [userDetailsState, setuserDetailsState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const details = await userDetails();
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
  return (
    <div>
      <Header props={props} />
      <Container>
        <DataHeader
          name={state.user.firstName}
          joinDate={userDetailsState.joinDate}
          subText="Welcome to your accounting dashboard!"
          memberId={userDetailsState.memberId}
          organization={userDetailsState.organization} />
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
